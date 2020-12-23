/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.StringShape;
import software.amazon.smithy.model.traits.EnumDefinition;
import software.amazon.smithy.model.traits.EnumTrait;
import software.amazon.smithy.model.traits.Trait;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;

/**
 * Strips enum names from enums that GA'd without them.
 *
 * A number of enums had names back-filled after GA. Since the type generated would change,
 * this is backwards-incompatible. This integration ensures that clients generated
 * preserve backwards-compatibility by stripping names from enums that were known to have
 * launched without them.
 */
public final class StripNewEnumNames implements TypeScriptIntegration {
    private final Set<ShapeId> enumsToStrip;

    public StripNewEnumNames() {
        // Load the list of enums
        Node json = Node.parse(IoUtils.readUtf8Url(getClass().getResource("enums-to-strip.json")));
        Set<ShapeId> toStrip = new HashSet<>();
        json.asArrayNode().ifPresent(array -> array.forEach(node -> {
            node.asStringNode().ifPresent(stringNode -> {
                toStrip.add(ShapeId.from(stringNode.getValue()));
            });
        }));
        enumsToStrip = Collections.unmodifiableSet(toStrip);
    }

    @Override
    public Model preprocessModel(PluginContext context, TypeScriptSettings settings) {
        Model model = context.getModel();
        Set<Shape> shapesToUpdate = model.shapes(StringShape.class)
                .filter(shape -> enumsToStrip.contains(shape.getId()))
                .flatMap(shape -> Trait.flatMapStream(shape, EnumTrait.class))
                // Replace the existing enum trait with an updated version
                .map(pair -> pair.getKey().toBuilder().addTrait(stripNames(pair.getValue())).build())
                .collect(Collectors.toSet());
        return ModelTransformer.create().replaceShapes(model, shapesToUpdate);
    }

    private EnumTrait stripNames(EnumTrait trait) {
        // Use toBuilder to ensure that any other information (e.g. source location) is preserved.
        EnumTrait.Builder builder = trait.toBuilder().clearEnums();
        for (EnumDefinition definition : trait.getValues()) {
            // Setting the name to null effectively removes it
            builder.addEnum(definition.toBuilder().name(null).build());
        }
        return builder.build();
    }
}
