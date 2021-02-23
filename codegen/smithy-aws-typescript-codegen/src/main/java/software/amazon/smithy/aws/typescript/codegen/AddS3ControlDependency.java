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

import java.util.List;
import java.util.Optional;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.RequiredTrait;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;

/**
 * Add S3Control customization.
 */
public class AddS3ControlDependency implements TypeScriptIntegration {

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
                            "ProcessArnables",
                            HAS_MIDDLEWARE
                        )
                        .operationPredicate((m, s, o) ->  isS3Control(s) && isArnableOperation(o))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(
                            AwsDependency.S3_CONTROL_MIDDLEWARE.dependency,
                            "RedirectFromPostId",
                            HAS_MIDDLEWARE
                        )
                        .operationPredicate((m, s, o) ->  isS3Control(s) && !isArnableOperation(o))
                        .build());
    }

    @Override
    public Model preprocessModel(PluginContext context, TypeScriptSettings settings) {
        Model model = context.getModel();
        if (!isS3Control(settings.getService(model))) {
            return model;
        }
        return ModelTransformer.create().mapShapes(model, shape -> {
            Optional<MemberShape> modified = shape.asMemberShape()
                    .filter(memberShape -> memberShape.getTarget().getName().equals("AccountId"))
                    .filter(memberShape -> model.expectShape(memberShape.getTarget()).isStringShape())
                    .filter(memberShape -> memberShape.isRequired())
                    .map(memberShape -> Shape.shapeToBuilder(memberShape).removeTrait(RequiredTrait.ID).build());
            return modified.isPresent() ? modified.get() : shape;
        });
    }

    private static boolean isS3Control(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return serviceId.equals("S3 Control");
    }

    private static boolean isArnableOperation(OperationShape operation) {
        String operationName = operation.getId().getName();
        return !operationName.equals("CreateBucket") && !operationName.equals("ListRegionalBuckets");
    }
}
