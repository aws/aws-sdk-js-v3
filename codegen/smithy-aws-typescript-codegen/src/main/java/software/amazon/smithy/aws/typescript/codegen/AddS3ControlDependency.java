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

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.function.Function;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.RequiredTrait;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.endpointsV2.AddDefaultEndpointRuleSet;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add S3Control customization.
 */
@SmithyInternalApi
public class AddS3ControlDependency implements TypeScriptIntegration {

    @Override
    public List<String> runAfter() {
        return List.of(AddBuiltinPlugins.class.getCanonicalName(), AddDefaultEndpointRuleSet.class.getCanonicalName());
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        if (!isS3Control(service)) {
            return;
        }
        writer
            .writeDocs(
                "Whether to override the request region with the region inferred from requested resource's ARN." +
                    " Defaults to undefined."
            )
            .addImport("Provider", "Provider", TypeScriptDependency.SMITHY_TYPES)
            .write("useArnRegion?: boolean | undefined | Provider<boolean | undefined>;");
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_CONTROL_MIDDLEWARE.dependency, "S3Control", HAS_CONFIG)
                .servicePredicate((m, s) -> isS3Control(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(
                    AwsDependency.S3_CONTROL_MIDDLEWARE.dependency,
                    "HostPrefixDeduplication",
                    HAS_MIDDLEWARE
                )
                .servicePredicate((m, s) -> isS3Control(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_CONTROL_MIDDLEWARE.dependency, "ProcessArnables", HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> isS3Control(s) && isArnableOperation(o, s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.S3_CONTROL_MIDDLEWARE.dependency, "RedirectFromPostId", HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> isS3Control(s) && !isArnableOperation(o, s))
                .build()
        );
    }

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        if (!isS3Control(settings.getService(model))) {
            return model;
        }
        boolean hasRuleset = !model.getServiceShapesWithTrait(EndpointRuleSetTrait.class).isEmpty();
        ServiceShape serviceShape = model.expectShape(settings.getService(), ServiceShape.class);
        Function<Shape, Shape> removeRequired = shape -> {
            Optional<MemberShape> modified = shape
                .asMemberShape()
                .filter(memberShape -> memberShape.getTarget().getName(serviceShape).equals("AccountId"))
                .filter(memberShape -> model.expectShape(memberShape.getTarget()).isStringShape())
                .filter(MemberShape::isRequired)
                .map(memberShape -> Shape.shapeToBuilder(memberShape).removeTrait(RequiredTrait.ID).build());
            return modified.isPresent() ? modified.get() : shape;
        };
        return ModelTransformer.create().mapShapes(
            model,
            hasRuleset ? removeRequired.andThen(AddS3Config::removeHostPrefixTrait) : removeRequired
        );
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        if (!isS3Control(settings.getService(model))) {
            return Collections.emptyMap();
        }
        switch (target) {
            case SHARED:
                return MapUtils.of(
                    "signingEscapePath",
                    writer -> {
                        writer.write("false");
                    },
                    "useArnRegion",
                    writer -> {
                        writer.write("undefined");
                    }
                );
            case NODE:
                return MapUtils.of("useArnRegion", writer -> {
                    writer
                        .addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER)
                        .addImport("loadConfig", "loadNodeConfig", TypeScriptDependency.NODE_CONFIG_PROVIDER)
                        .addDependency(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE)
                        .addImport(
                            "NODE_USE_ARN_REGION_CONFIG_OPTIONS",
                            "NODE_USE_ARN_REGION_CONFIG_OPTIONS",
                            AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE
                        )
                        .write("loadNodeConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS, loaderConfig)");
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isS3Control(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return serviceId.equals("S3 Control");
    }

    private static boolean isArnableOperation(OperationShape operation, ServiceShape serviceShape) {
        String operationName = operation.getId().getName(serviceShape);
        return !operationName.equals("CreateBucket") && !operationName.equals("ListRegionalBuckets");
    }
}
