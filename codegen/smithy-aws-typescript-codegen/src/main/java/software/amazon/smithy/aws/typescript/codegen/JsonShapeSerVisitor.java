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
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.IdempotencyTokenTrait;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
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
    private static final Format TIMESTAMP_FORMAT = Format.EPOCH_SECONDS;

    JsonShapeSerVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberSerVisitor getMemberVisitor(String dataSource) {
        return new JsonMemberSerVisitor(getContext(), dataSource, TIMESTAMP_FORMAT);
    }

    @Override
    public void serializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());

        writer.openBlock("return input.map(entry => ", ");", () ->
                // Dispatch to the input value provider for any additional handling.
                writer.write("$L", target.accept(getMemberVisitor("entry"))));
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
        SymbolProvider symbolProvider = context.getSymbolProvider();

        // Get the right serialization for each entry in the map. Undefined
        // inputs won't have this serializer invoked.
        writer.openBlock("return Object.entries(input).reduce((acc: $T, [key, value]: [$T, any]) => ({",
            "}), {});",
            symbolProvider.toSymbol(shape),
            symbolProvider.toSymbol(shape.getKey()),
            () -> {
                writer.write("...acc,");
                // Dispatch to the input value provider for any additional handling.
                writer.write("[key]: $L", target.accept(getMemberVisitor("value")));
            }
        );
    }

    @Override
    public void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        writer.openBlock("return {", "};", () -> {
            // Use a TreeMap to sort the members.
            Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
            members.forEach((memberName, memberShape) -> {
                // Use the jsonName trait value if present, otherwise use the member name.
                String locationName = memberShape.getTrait(JsonNameTrait.class)
                        .map(JsonNameTrait::getValue)
                        .orElse(memberName);
                Shape target = context.getModel().expectShape(memberShape.getTarget());
                String inputLocation = "input." + memberName;

                // Handle @timestampFormat on members not just the targeted shape.
                String valueProvider = memberShape.hasTrait(TimestampFormatTrait.class)
                        ? AwsProtocolUtils.getInputTimestampValueProvider(context, memberShape,
                                TIMESTAMP_FORMAT, inputLocation)
                        : target.accept(getMemberVisitor(inputLocation));

                if (memberShape.hasTrait(IdempotencyTokenTrait.class)) {
                    writer.write("'$L': $L ?? generateIdempotencyToken(),", locationName, valueProvider);
                } else {
                    writer.write("...($L !== undefined && { $S: $L }),", inputLocation, locationName, valueProvider);
                }
            });

        });
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
                    // Use the jsonName trait value if present, otherwise use the member name.
                    String locationName = memberShape.getTrait(JsonNameTrait.class)
                            .map(JsonNameTrait::getValue)
                            .orElse(memberName);
                    Shape target = model.expectShape(memberShape.getTarget());
                    // Dispatch to the input value provider for any additional handling.
                    writer.write("$L: value => ({ $S: $L }),", memberName, locationName,
                            target.accept(getMemberVisitor("value")));
                });
            writer.write("_: (name, value) => ({ name: value } as any)");
        });
    }
}
