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
import java.util.Set;
import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.traits.DocumentationTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
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

    private static final Set<String> EXCEPTIONS_OF_200_OPERATIONS = SetUtils.of(
        "CopyObject",
        "UploadPartCopy",
        "CompleteMultipartUpload"
    );

    private static final String CRT_NOTIFICATION = "<p>Note: To supply the Multi-region Access Point (MRAP) to Bucket,"
        + " you need to install the \"@aws-sdk/signature-v4-crt\" package to your project dependencies. \n"
        + "For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>";

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        ServiceShape serviceShape = settings.getService(model);
        if (!isS3(serviceShape)) {
            return model;
        }
        Model.Builder modelBuilder = model.toBuilder();
        Set<StructureShape> inputShapes = new HashSet<>();
        for (ShapeId operationId : serviceShape.getAllOperations()) {
            OperationShape operationShape = model.expectShape(operationId, OperationShape.class);
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
        return modelBuilder.addShapes(inputShapes).build();
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
        if (settings.getExperimentalIdentityAndAuth()) {
            return;
        }
        // feat(experimentalIdentityAndAuth): control branch for S3 Config interface fields
        writer.writeDocs("Whether to escape request path when signing the request.")
            .write("signingEscapePath?: boolean;\n");
        writer.writeDocs(
                "Whether to override the request region with the region inferred from requested resource's ARN."
                    + " Defaults to false.")
            .addImport("Provider", "Provider", TypeScriptDependency.SMITHY_TYPES)
            .write("useArnRegion?: boolean | Provider<boolean>;");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings, Model model,
        SymbolProvider symbolProvider, LanguageTarget target
    ) {
        if (!isS3(settings.getService(model))) {
            return Collections.emptyMap();
        }
        if (settings.getExperimentalIdentityAndAuth()) {
            return Collections.emptyMap();
        }
        // feat(experimentalIdentityAndAuth): control branch for S3 Config runtime config
        switch (target) {
            case SHARED:
                return MapUtils.of("signingEscapePath", writer -> {
                    writer.write("false");
                }, "useArnRegion", writer -> {
                    writer.write("false");
                }, "signerConstructor", writer -> {
                    writer.addDependency(AwsDependency.SIGNATURE_V4_MULTIREGION)
                        .addImport("SignatureV4MultiRegion", "SignatureV4MultiRegion",
                            AwsDependency.SIGNATURE_V4_MULTIREGION.packageName)
                        .write("SignatureV4MultiRegion");
                });
            case NODE:
                return MapUtils.of("useArnRegion", writer -> {
                    writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER)
                        .addImport("loadConfig", "loadNodeConfig",
                                TypeScriptDependency.NODE_CONFIG_PROVIDER.packageName)
                        .addDependency(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE)
                        .addImport("NODE_USE_ARN_REGION_CONFIG_OPTIONS", "NODE_USE_ARN_REGION_CONFIG_OPTIONS",
                            AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE.packageName)
                        .write("loadNodeConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS)");
                });
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
                .operationPredicate(
                    (m, s, o) -> EXCEPTIONS_OF_200_OPERATIONS.contains(o.getId().getName(s))
                        && isS3(s))
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
                .withConventions(AwsDependency.S3_MIDDLEWARE.dependency, "S3",
                    HAS_CONFIG)
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

    private static boolean isS3(Shape serviceShape) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals("S3");
    }
}
