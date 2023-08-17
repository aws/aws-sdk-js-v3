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
import java.util.function.BiFunction;
import software.amazon.smithy.aws.typescript.codegen.validation.UnaryFunctionCall;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.IdempotencyTokenTrait;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.SparseTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Visitor to generate serialization functions for shapes in AWS JSON protocol
 * document bodies.
 *
 * This class handles function body generation for all types expected by the {@code
 * DocumentShapeSerVisitor}. No other shape type serialization is overridden.
 *
 * Timestamps are serialized to {@link Format}.EPOCH_SECONDS by default.
 */
@SmithyInternalApi
final class JsonShapeSerVisitor extends DocumentShapeSerVisitor {
    private static final Format TIMESTAMP_FORMAT = Format.EPOCH_SECONDS;

    private final BiFunction<MemberShape, String, String> memberNameStrategy;

    JsonShapeSerVisitor(GenerationContext context, boolean serdeElisionEnabled) {
        this(context,
                // Use the jsonName trait value if present, otherwise use the member name.
                (memberShape, memberName) -> memberShape.getTrait(JsonNameTrait.class)
                        .map(JsonNameTrait::getValue)
                        .orElse(memberName),
                serdeElisionEnabled);
    }

    JsonShapeSerVisitor(GenerationContext context, BiFunction<MemberShape, String, String> memberNameStrategy,
            boolean serdeElisionEnabled) {
        super(context);
        this.serdeElisionEnabled = serdeElisionEnabled;
        this.memberNameStrategy = memberNameStrategy;
    }


    private DocumentMemberSerVisitor getMemberVisitor(String dataSource) {
        return new JsonMemberSerVisitor(getContext(), dataSource, TIMESTAMP_FORMAT);
    }

    @Override
    public void serializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());

        // Filter out null entries if we don't have the sparse trait.
        String potentialFilter = "";
        boolean hasSparseTrait = shape.hasTrait(SparseTrait.ID);
        if (!hasSparseTrait) {
            potentialFilter = ".filter((e: any) => e != null)";
        }

        String returnedExpression = target.accept(getMemberVisitor("entry"));

        if (returnedExpression.equals("entry")) {
          writer.write("return input$L;", potentialFilter);
        } else {
          writer.openBlock("return input$L.map(entry => {", "});", potentialFilter, () -> {
              // Short circuit null values from serialization.
              if (hasSparseTrait) {
                  writer.write("if (entry === null) { return null as any; }");
              }

              // Dispatch to the input value provider for any additional handling.
              writer.write("return $L;", target.accept(getMemberVisitor("entry")));
          });
        }
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
        writer.openBlock("return Object.entries(input).reduce((acc: Record<string, any>, "
                + "[key, value]: [$1T, any]) => {", "}, {});", symbolProvider.toSymbol(shape.getKey()),
            () -> {
                writer.openBlock("if (value === null) {", "}", () -> {
                    // Handle the sparse trait by short-circuiting null values
                    // from serialization, and not including them if encountered
                    // when not sparse.
                    if (shape.hasTrait(SparseTrait.ID)) {
                        writer.write("acc[key] = null as any;");
                    }
                    writer.write("return acc;");
                });

                // Dispatch to the input value provider for any additional handling.
                writer.write("acc[key] = $L;", target.accept(getMemberVisitor("value")));
                writer.write("return acc;");
            }
        );
    }

    @Override
    public void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();
        writer.addImport("take", null, TypeScriptDependency.AWS_SMITHY_CLIENT);
        writer.openBlock("return take(input, {", "});", () -> {
            // Use a TreeMap to sort the members.
            Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
            members.forEach((memberName, memberShape) -> {
                String wireName = memberNameStrategy.apply(memberShape, memberName);
                boolean hasJsonName = memberShape.hasTrait(JsonNameTrait.class);
                Shape target = context.getModel().expectShape(memberShape.getTarget());
                String inputLocation = "input." + memberName;

                // Handle @timestampFormat on members not just the targeted shape.
                String valueExpression = (memberShape.hasTrait(TimestampFormatTrait.class)
                    ? AwsProtocolUtils.getInputTimestampValueProvider(context, memberShape,
                            TIMESTAMP_FORMAT, "_")
                    : target.accept(getMemberVisitor("_")));
                String valueProvider = "_ => " + valueExpression;
                boolean isUnaryCall = UnaryFunctionCall.check(valueExpression);

                if (hasJsonName) {
                    if (memberShape.hasTrait(IdempotencyTokenTrait.class)) {
                        writer.write("'$L': [true, _ => _ ?? generateIdempotencyToken(), `$L`],", wireName, memberName);
                    } else {
                        if (valueProvider.equals("_ => _")) {
                            writer.write("'$L': [,,`$L`],", wireName, memberName);
                        } else if (isUnaryCall) {
                            writer.write("'$L': [,$L,`$L`],", wireName,
                                UnaryFunctionCall.toRef(valueExpression), memberName);
                        } else {
                            writer.write("'$L': [,$L,`$L`],", wireName, valueProvider, memberName);
                        }
                    }
                } else {
                    if (memberShape.hasTrait(IdempotencyTokenTrait.class)) {
                        writer.write("'$L': [true, _ => _ ?? generateIdempotencyToken()],", memberName);
                    } else {
                        if (valueProvider.equals("_ => _")) {
                            writer.write("'$1L': [],", memberName);
                        } else if (isUnaryCall) {
                            writer.write("'$1L': $2L,", memberName, UnaryFunctionCall.toRef(valueExpression));
                        } else {
                            writer.write("'$1L': $2L,", memberName, valueProvider);
                        }
                    }
                }
            });

        });
    }

    @Override
    public void serializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();
        ServiceShape serviceShape = context.getService();

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("return $L.visit(input, {", "});", shape.getId().getName(serviceShape), () -> {
            // Use a TreeMap to sort the members.
            Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
            members.forEach((memberName, memberShape) -> {
                    String locationName = memberNameStrategy.apply(memberShape, memberName);
                    Shape target = model.expectShape(memberShape.getTarget());
                    // Dispatch to the input value provider for any additional handling.
                    writer.write("$L: value => ({ $S: $L }),", memberName, locationName,
                            target.accept(getMemberVisitor("value")));
                });
            writer.write("_: (name, value) => ({ name: value } as any)");
        });
    }
}
