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
import java.util.TreeMap;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeIndex;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * Visitor to generate serialization functions for shapes in AWS JSON protocol
 * document bodies.
 *
 * No standard visitation methods are overridden; function body generation for all
 * expected serializers is handled by this class.
 *
 * Timestamps are serialized to {@link Format}.EPOCH_SECONDS by default.
 */
final class JsonShapeSerVisitor extends DocumentShapeSerVisitor {

    JsonShapeSerVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberSerVisitor getMemberVisitor(String dataSource) {
        return new JsonMemberSerVisitor(getContext(), dataSource, Format.EPOCH_SECONDS);
    }

    @Override
    public void serializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getMember().getTarget()).get();

        // Dispatch to the input value provider for any additional handling.
        writer.openBlock("return (input || []).map(entry =>", ");", () -> {
            writer.write(target.accept(getMemberVisitor("entry")));
        });
    }

    @Override
    public void serializeDocument(GenerationContext context, DocumentShape shape) {
        TypeScriptWriter writer = context.getWriter();
        // Documents are JSON content, so don't modify.
        writer.write("return input;");
    }

    @Override
    public void serializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getValue().getTarget()).get();

        // Get the right serialization for each entry in the map. Undefined
        // inputs won't have this serializer invoked.
        writer.write("let mapParams: any = {};");
        writer.openBlock("Object.keys(input).forEach(key => {", "});", () -> {
            // Dispatch to the input value provider for any additional handling.
            writer.write("mapParams[key] = $L;", target.accept(getMemberVisitor("input[key]")));
        });
        writer.write("return mapParams;");
    }

    @Override
    public void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("let bodyParams: any = {};");
        // Use a TreeMap to sort the members.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = memberShape.getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElse(memberName);
            Shape target = context.getModel().getShapeIndex().getShape(memberShape.getTarget()).get();

            // Generate an if statement to set the bodyParam if the member is set.
            writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
                // Dispatch to the input value provider for any additional handling.
                writer.write("bodyParams['$L'] = $L;", locationName,
                        target.accept(getMemberVisitor("input." + memberName)));
            });
        });
        writer.write("return bodyParams;");
    }

    @Override
    public void serializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        ShapeIndex index = context.getModel().getShapeIndex();

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("return $L.visit(input, {", "});", shape.getId().getName(), () -> {
            // Use a TreeMap to sort the members.
            Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
            members.forEach((memberName, memberShape) -> {
                    Shape target = index.getShape(memberShape.getTarget()).get();
                    // Dispatch to the input value provider for any additional handling.
                    writer.write("$L: value => $L,", memberName, target.accept(getMemberVisitor("value")));
                });
            writer.write("_: value => value");
        });
    }
}
