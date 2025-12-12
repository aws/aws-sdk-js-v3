/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Map;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.ShapeType;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add Nimble customization.
 */
@SmithyInternalApi
public class AddNimbleCustomizations implements TypeScriptIntegration {

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        ServiceShape service = settings.getService(model);
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        if (!serviceId.equals("nimble")) {
            return model;
        }
        Map<ShapeId, ShapeType> overWriteTypeMap = MapUtils.of(
            ShapeId.from("com.amazonaws.nimble#StudioComponentConfiguration"),
            ShapeType.STRUCTURE
        );
        return ModelTransformer.create().changeShapeType(model, overWriteTypeMap);
    }
}
