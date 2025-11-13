/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isEndpointsV2Service;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.pattern.SmithyPattern;
import software.amazon.smithy.model.pattern.UriPattern;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.StringShape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.TimestampShape;
import software.amazon.smithy.model.traits.DeprecatedTrait;
import software.amazon.smithy.model.traits.DocumentationTrait;
import software.amazon.smithy.model.traits.EndpointTrait;
import software.amazon.smithy.model.traits.HttpHeaderTrait;
import software.amazon.smithy.model.traits.HttpPayloadTrait;
import software.amazon.smithy.model.traits.HttpTrait;
import software.amazon.smithy.model.traits.StreamingTrait;
import software.amazon.smithy.model.traits.Trait;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.rulesengine.traits.ContextParamTrait;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.http.integration.AddHttpSigningPlugin;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SetUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * AWS S3 client configuration.
 */
@SmithyInternalApi
public final class AddS3Config implements TypeScriptIntegration {
    private static final Logger LOGGER = Logger.getLogger(AddS3Config.class.getName());

    private static final Set<String> SSEC_INPUT_KEYS = SetUtils.of("SSECustomerKey", "CopySourceSSECustomerKey");

    private static final Set<String> BUCKET_ENDPOINT_INPUT_KEYS = SetUtils.of("Bucket");

    private static final Set<String> NON_BUCKET_ENDPOINT_OPERATIONS = SetUtils.of(
        "CreateBucket",
        "DeleteBucket",
        "ListBuckets"
    );

    private static final String CRT_NOTIFICATION = "<p>Note: To supply the Multi-region Access Point (MRAP) to Bucket,"
        + " you need to install the \"@aws-sdk/signature-v4-crt\" package to your project dependencies. \n"
        + "For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>";

    /**
     * Remove the hostPrefix functionality by removing the endpoint traits.
     * Only applied if endpointRuleSet trait present on S3/S3Control services.
     */
    public static Shape removeHostPrefixTrait(Shape shape) {
        return shape.asOperationShape()
            .map(OperationShape::shapeToBuilder)
            .map((Object object) -> {
                OperationShape.Builder builder = (OperationShape.Builder) object;
                Trait trait = builder.getAllTraits().get(EndpointTrait.ID);
                if (trait instanceof EndpointTrait endpointTrait) {
                    if (
                        endpointTrait.getHostPrefix().equals(
                            SmithyPattern.builder()
                                .segments(List.of())
                                .pattern("{AccountId}.")
                                .build()
                        )
                    ) {
                        builder.removeTrait(EndpointTrait.ID);
                    }
                }
                return builder;
            })
            .map(OperationShape.Builder::build)
            .map(s -> (Shape) s)
            .orElse(shape);
    }

    /**
     * Remove `/{Bucket}` from the operation endpoint URI IFF
     * - it is in a prefix position.
     * - input has a member called "Bucket".
     * - "Bucket" input member is a contextParam.
     */
    public static Shape removeUriBucketPrefix(Shape shape, Model model) {
        return shape.asOperationShape()
            .map(OperationShape::shapeToBuilder)
            .map((Object object) -> {
                OperationShape.Builder builder = (OperationShape.Builder) object;
                Trait trait = builder.getAllTraits().get(HttpTrait.ID);
                if (trait instanceof HttpTrait httpTrait) {
                    String uri = httpTrait.getUri().toString();

                    StructureShape input = model.expectShape(
                        shape.asOperationShape().get().getInputShape()
                    ).asStructureShape().orElseThrow(
                        () -> new RuntimeException("operation must have input structure")
                    );

                    boolean hasBucketPrefix = uri.startsWith("/{Bucket}");
                    Optional<MemberShape> bucket = input.getMember("Bucket");
                    boolean inputHasBucketMember = bucket.isPresent();
                    boolean bucketIsContextParam = bucket
                        .map(ms -> ms.getTrait(ContextParamTrait.class))
                        .isPresent();
                    if (hasBucketPrefix && inputHasBucketMember && bucketIsContextParam) {
                        String replaced = uri
                            .replace("/{Bucket}/", "/")
                            .replace("/{Bucket}", "/");
                        builder.addTrait(
                            httpTrait
                                .toBuilder()
                                .uri(UriPattern.parse(replaced))
                                .build()
                        );
                    }
                }
                return builder;
            })
            .map(OperationShape.Builder::build)
            .map(s -> (Shape) s)
            .orElse(shape);
    }

    @Override
    public List<String> runAfter() {
        return List.of(
            new AddHttpSigningPlugin().name(),
            AddBuiltinPlugins.class.getCanonicalName()
        );
    }

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        ServiceShape serviceShape = settings.getService(model);
        if (!isS3(serviceShape)) {
            return model;
        }

        Model.Builder modelBuilder = model.toBuilder();
        boolean hasRuleset = !model.getServiceShapesWithTrait(EndpointRuleSetTrait.class).isEmpty();

        TopDownIndex topDownIndex = TopDownIndex.of(model);
        Set<StructureShape> inputShapes = new HashSet<>();
        for (OperationShape operationShape : topDownIndex.getContainedOperations(serviceShape)) {
            if (NON_BUCKET_ENDPOINT_OPERATIONS.contains(operationShape.getId().getName(serviceShape))) {
                continue;
            }
            operationShape.getInput().ifPresent(inputShapeId -> {
                StructureShape inputShape = model.expectShape(inputShapeId, StructureShape.class);
                inputShape.getMember("Bucket").ifPresent(bucketMember -> {
                    bucketMember.getTrait(DocumentationTrait.class).ifPresent(documentationTrait -> {
                        StructureShape.Builder inputShapeBuilder = inputShape.toBuilder();
                        MemberShape.Builder builder = MemberShape.shapeToBuilder(bucketMember);
                        String newDocString = documentationTrait.getValue() + "\n" + CRT_NOTIFICATION;
                        MemberShape newMemberShape = builder.addTrait(new DocumentationTrait(newDocString)).build();
                        inputShapeBuilder.addMember(newMemberShape);
                        inputShapes.add(inputShapeBuilder.build());
                    });
                });
            });
        }
        LOGGER.info("Patching " + inputShapes.size() + " input shapes with CRT notification");

        boolean expiresShapeIsPresent = model.getShape(ShapeId.from("com.amazonaws.s3#Expires")).isPresent();
        if (expiresShapeIsPresent) {
            // ExpiresString customization part 1:
            // enforce that "com.amazonaws.s3#Expires" retains type=timestamp.
            // add a shape "com.amazonaws.s3#ExpiresString" of type=string.
            Shape expiresShape = model.getShape(ShapeId.from("com.amazonaws.s3#Expires")).get();
            TimestampShape expiresTimestampShape = TimestampShape.builder()
                .id(expiresShape.getId())
                .build();
            StringShape expiresStringShape = StringShape.builder()
                .id("com.amazonaws.s3#ExpiresString")
                .build();
            modelBuilder
                .removeShape(expiresShape.getId())
                .addShapes(expiresTimestampShape, expiresStringShape);

            // ExpiresString customization part 2:
            // for any output shape member targeting Expires, add a member ExpiresString targeting ExpiresString.
            // and mark Expires deprecated in favor of ExpiresString.
            // move Expires documentation trait to ExpiresString.
            // set the httpHeader trait of ExpiresString to be ExpiresString.
            // SDK middleware will take care of copying expires header to expiresstring header prior to deserialization.
            for (OperationShape operationShape : topDownIndex.getContainedOperations(serviceShape)) {
                if (operationShape.getOutput().isEmpty()) {
                    continue;
                }
                StructureShape structureShape = model.expectShape(
                    operationShape.getOutputShape(), StructureShape.class
                );

                Set<Map.Entry<String, MemberShape>> memberEntries = structureShape
                    .getAllMembers()
                    .entrySet();
                StructureShape.Builder structureShapeBuilder = structureShape.toBuilder();

                boolean isTargetingExpires = structureShape
                    .getAllMembers()
                    .values()
                    .stream()
                    .anyMatch(memberShape -> memberShape.getTarget().equals(expiresShape.getId()));

                if (isTargetingExpires) {
                    for (Map.Entry<String, MemberShape> entry : memberEntries) {
                        String memberName = entry.getKey();
                        MemberShape memberShape = entry.getValue();

                        Optional<HttpHeaderTrait> httpHeader = memberShape.getTrait(HttpHeaderTrait.class);
                        Optional<DocumentationTrait> doc = memberShape.getTrait(DocumentationTrait.class);

                        if (memberShape.getTarget().equals(expiresShape.getId())
                            && httpHeader.isPresent()) {
                            structureShapeBuilder
                                .removeMember(memberName)
                                .addMember(
                                    memberName,
                                    expiresTimestampShape.getId(),
                                    (m) -> {
                                        m
                                            .addTrait(new DocumentationTrait("Deprecated in favor of ExpiresString."))
                                            .addTrait(httpHeader.get())
                                            .addTrait(DeprecatedTrait.builder().build());
                                    }
                                )
                                .addMember(
                                    "ExpiresString",
                                    expiresStringShape.getId(),
                                    (m) -> {
                                        m.addTrait(new HttpHeaderTrait("ExpiresString"));
                                        doc.ifPresent(m::addTrait);
                                    }
                                );
                        } else {
                            // This is done to preserve the member order
                            // and insert ExpiresString adjacent to Expires.
                            structureShapeBuilder
                                .removeMember(memberName)
                                .addMember(memberName, memberShape.getTarget(), (m) -> {
                                    m.addTraits(memberShape.getAllTraits().values());
                                });
                        }
                    }
                    modelBuilder
                        .addShape(structureShapeBuilder.build());
                }
            }
        }

        Model builtModel = modelBuilder.addShapes(inputShapes).build();
        if (hasRuleset) {
            return ModelTransformer.create().mapShapes(
                builtModel, (shape) -> removeUriBucketPrefix(shape, model)
            );
        }
        return builtModel;
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        if (!isS3(service)) {
            return;
        }
        writer.writeDocs("Whether to escape request path when signing the request.")
            .write("signingEscapePath?: boolean;\n");
        writer.writeDocs(
                "Whether to override the request region with the region inferred from requested resource's ARN."
                    + " Defaults to undefined.")
            .addImport("Provider", "Provider", TypeScriptDependency.SMITHY_TYPES)
            .write("useArnRegion?: boolean | undefined | Provider<boolean | undefined>;");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings, Model model,
        SymbolProvider symbolProvider, LanguageTarget target
    ) {
        if (!isS3(settings.getService(model))) {
            return Collections.emptyMap();
        }
        switch (target) {
            case SHARED:
                return MapUtils.of(
                    "signingEscapePath", writer -> {
                        writer.write("false");
                    },
                    "useArnRegion", writer -> {
                        writer.write("undefined");
                    }
                );
            case NODE:
                return MapUtils.of(
                    "useArnRegion", writer -> {
                        writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER)
                        .addImport("loadConfig", "loadNodeConfig",
                                TypeScriptDependency.NODE_CONFIG_PROVIDER)
                        .addDependency(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE)
                        .addImport("NODE_USE_ARN_REGION_CONFIG_OPTIONS", "NODE_USE_ARN_REGION_CONFIG_OPTIONS",
                            AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE)
                        .write("loadNodeConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS, loaderConfig)");
                    },
                    "disableS3ExpressSessionAuth", writer -> {
                        writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER)
                        .addImport("loadConfig", "loadNodeConfig",
                                TypeScriptDependency.NODE_CONFIG_PROVIDER)
                        .addDependency(AwsDependency.S3_MIDDLEWARE)
                        .addImport(
                            "NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS",
                            "NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS",
                            AwsDependency.S3_MIDDLEWARE
                        )
                        .write("loadNodeConfig(NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS, loaderConfig)");
                    }
                );
            default:
                return Collections.emptyMap();
        }
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "ValidateBucketName",
                    HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> isS3(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "CheckContentLengthHeader",
                    HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> isS3(s) && o.getId().getName(s).equals("PutObject"))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "throw200Exceptions",
                    HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> {
                    if (!isS3(s)) {
                        return false;
                    }
                    Optional<ShapeId> output = o.getOutput();
                    if (output.isPresent()) {
                        Shape outputShape = m.expectShape(output.get());
                        boolean hasStreamingBlobOutputPayload = outputShape.getAllMembers().values().stream().anyMatch(
                            memberShape -> {
                                boolean isPayload = memberShape.hasTrait(HttpPayloadTrait.class);
                                if (!isPayload) {
                                    return false;
                                }
                                Shape shape = m.expectShape(memberShape.getTarget());
                                boolean isBlob = shape.isBlobShape();
                                if (!isBlob) {
                                    return false;
                                }
                                return shape.hasTrait(StreamingTrait.class);
                            }
                        );
                        if (hasStreamingBlobOutputPayload) {
                            return false;
                        }
                    }
                    return output.isPresent();
                })
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.ADD_EXPECT_CONTINUE.dependency, "AddExpectContinue",
                    HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> isS3(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.SSEC_MIDDLEWARE.dependency, "Ssec", HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> containsInputMembers(m, o, SSEC_INPUT_KEYS)
                    && isS3(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.LOCATION_CONSTRAINT.dependency, "LocationConstraint",
                    HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> o.getId().getName(s).equals("CreateBucket")
                    && isS3(s))
                .build(),
            RuntimeClientPlugin.builder()
                .inputConfig(
                    Symbol.builder()
                        .namespace(AwsDependency.S3_MIDDLEWARE.dependency.getPackageName(), "/")
                        .name("S3InputConfig")
                        .build()
                )
                .resolvedConfig(
                    Symbol.builder()
                        .namespace(AwsDependency.S3_MIDDLEWARE.dependency.getPackageName(), "/")
                        .name("S3ResolvedConfig")
                        .build()
                )
                .resolveFunction(
                    Symbol.builder()
                        .namespace(AwsDependency.S3_MIDDLEWARE.dependency.getPackageName(), "/")
                        .name("resolveS3Config")
                        .addDependency(
                            AwsDependency.S3_MIDDLEWARE.dependency
                        )
                        .build(),
                    (m, s, o) -> MapUtils.of(
                        "session", Symbol.builder()
                            .name("[() => this, CreateSessionCommand]")
                            .addReference(Symbol.builder()
                                .name("CreateSessionCommand")
                                .namespace("./src/commands/CreateSessionCommand", "/")
                                .build())
                            .build()
                    )
                )
                .servicePredicate((m, s) -> isS3(s) && isEndpointsV2Service(s))
                .build(),
            /*
             * BUCKET_ENDPOINT_MIDDLEWARE needs two separate plugins. The first resolves the config in the client.
             * The second applies the middleware to bucket endpoint operations.
             */
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE.dependency, "BucketEndpoint",
                    HAS_CONFIG)
                .servicePredicate((m, s) -> isS3(s) && !isEndpointsV2Service(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE.dependency, "BucketEndpoint",
                    HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> !NON_BUCKET_ENDPOINT_OPERATIONS.contains(o.getId().getName(s))
                    && isS3(s)
                    && !isEndpointsV2Service(s)
                    && containsInputMembers(m, o, BUCKET_ENDPOINT_INPUT_KEYS))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "RegionRedirectMiddleware",
                    HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> isS3(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "S3ExpiresMiddleware",
                    HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> isS3(s) && containsExpiresOutput(m, o))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "S3Express",
                    HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> isS3(s) && isEndpointsV2Service(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "S3ExpressHttpSigning",
                    HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> isS3(s) && isEndpointsV2Service(s))
                .build()
        );
    }

    private static boolean containsInputMembers(
        Model model,
        OperationShape operationShape,
        Set<String> expectedMemberNames
    ) {
        OperationIndex operationIndex = OperationIndex.of(model);
        return operationIndex.getInput(operationShape)
            .filter(input -> input.getMemberNames().stream().anyMatch(expectedMemberNames::contains))
            .isPresent();
    }

    private static boolean containsExpiresOutput(
        Model model,
        OperationShape operationShape
    ) {
        OperationIndex operationIndex = OperationIndex.of(model);
        return operationIndex.getOutput(operationShape)
            .filter(input -> input.getMemberNames().stream().anyMatch("Expires"::equals))
            .isPresent();
    }

    private static boolean isS3(Shape serviceShape) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals("S3");
    }
}
