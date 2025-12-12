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
