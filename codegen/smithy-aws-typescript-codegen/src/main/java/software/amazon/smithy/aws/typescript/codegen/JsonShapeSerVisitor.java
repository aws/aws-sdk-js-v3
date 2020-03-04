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
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
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
 * This class handles function body generation for all types expected by the {@code
 * DocumentShapeSerVisitor}. No other shape type serialization is overridden.
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
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());

        writer.write("const contents = [];");
        writer.openBlock("for (let entry of input) {", "}", () ->
                // Dispatch to the input value provider for any additional handling.
                writer.write("contents.push($L);", target.accept(getMemberVisitor("entry"))));
        writer.write("return contents;");
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
        Shape target = context.getModel().expectShape(shape.getValue().getTarget());

        // Get the right serialization for each entry in the map. Undefined
        // inputs won't have this serializer invoked.
        writer.write("const mapParams: any = {};");
        writer.openBlock("Object.keys(input).forEach(key => {", "});", () -> {
            // Dispatch to the input value provider for any additional handling.
            writer.write("mapParams[key] = $L;", target.accept(getMemberVisitor("input[key]")));
        });
        writer.write("return mapParams;");
    }

    @Override
    public void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("const bodyParams: any = {};");
        // Use a TreeMap to sort the members.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = memberShape.getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElse(memberName);
            Shape target = context.getModel().expectShape(memberShape.getTarget());
            String inputLocation = "input." + memberName;

            // Handle if the member is an idempotency token that should be auto-filled.
            AwsProtocolUtils.writeIdempotencyAutofill(context, memberShape, inputLocation);

            // Generate an if statement to set the bodyParam if the member is set.
            writer.openBlock("if ($L !== undefined) {", "}", inputLocation, () -> {
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
        Model model = context.getModel();

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("return $L.visit(input, {", "});", shape.getId().getName(), () -> {
            // Use a TreeMap to sort the members.
            Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
            members.forEach((memberName, memberShape) -> {
                    Shape target = model.expectShape(memberShape.getTarget());
                    // Dispatch to the input value provider for any additional handling.
                    writer.write("$L: value => $L,", memberName, target.accept(getMemberVisitor("value")));
                });
            writer.write("_: value => value");
        });
    }
}
