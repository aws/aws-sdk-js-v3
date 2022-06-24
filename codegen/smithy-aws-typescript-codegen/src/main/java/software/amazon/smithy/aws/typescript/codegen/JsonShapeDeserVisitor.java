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

import static software.amazon.smithy.aws.typescript.codegen.propertyaccess.PropertyAccessor.getFrom;

import java.util.Map;
import java.util.TreeMap;
import java.util.function.BiFunction;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.NumberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.EventHeaderTrait;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.MediaTypeTrait;
import software.amazon.smithy.model.traits.SparseTrait;
import software.amazon.smithy.model.traits.StreamingTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings.ArtifactType;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Visitor to generate deserialization functions for shapes in AWS JSON protocol
 * document bodies.
 * <p>
 * No standard visitation methods are overridden; function body generation for all
 * expected deserializers is handled by this class.
 * <p>
 * Timestamps are deserialized from {@link Format}.EPOCH_SECONDS by default.
 */
@SmithyInternalApi
final class JsonShapeDeserVisitor extends DocumentShapeDeserVisitor {

    private final BiFunction<MemberShape, String, String> memberNameStrategy;

    JsonShapeDeserVisitor(GenerationContext context) {
        this(context,
            // Use the jsonName trait value if present, otherwise use the member name.
            (memberShape, memberName) -> memberShape.getTrait(JsonNameTrait.class)
                .map(JsonNameTrait::getValue)
                .orElse(memberName));
    }

    JsonShapeDeserVisitor(GenerationContext context, BiFunction<MemberShape, String, String> memberNameStrategy) {
        super(context);
        this.memberNameStrategy = memberNameStrategy;
    }

    private DocumentMemberDeserVisitor getMemberVisitor(MemberShape memberShape, String dataSource) {
        return new JsonMemberDeserVisitor(getContext(), memberShape, dataSource, Format.EPOCH_SECONDS);
    }

    @Override
    protected void deserializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());
        ArtifactType artifactType = context.getSettings().getArtifactType();

        // Filter out null entries if we don't have the sparse trait.
        String potentialFilter = "";
        if (!shape.hasTrait(SparseTrait.ID) && !artifactType.equals(ArtifactType.SSDK)) {
            potentialFilter = ".filter((e: any) => e != null)";
        }

        writer.openBlock("const retVal = (output || [])$L.map((entry: any) => {", "});", potentialFilter, () -> {
            // Short circuit null values from serialization.
            writer.openBlock("if (entry === null) {", "}", () -> {
                // In the SSDK we want to be very strict about not accepting nulls in non-sparse lists.
                if (!shape.hasTrait(SparseTrait.ID) && artifactType.equals(ArtifactType.SSDK)) {
                    writer.write("throw new TypeError('All elements of the non-sparse list $S must be non-null.');",
                        shape.getId());
                } else {
                    writer.write("return null as any;");
                }
            });

            // Dispatch to the output value provider for any additional handling.
            writer.write("return $L$L;", target.accept(getMemberVisitor(shape.getMember(), "entry")),
                usesExpect(target) ? " as any" : "");
        });
        if (shape.isSetShape() && artifactType.equals(ArtifactType.SSDK)) {
            writer.addDependency(TypeScriptDependency.SERVER_COMMON);
            writer.addImport("findDuplicates", "__findDuplicates", "@aws-smithy/server-common");
            writer.openBlock("if (__findDuplicates(retVal).length > 0) {", "}", () -> {
                writer.write("throw new TypeError('All elements of the set $S must be unique.');",
                    shape.getId());
            });
        }
        writer.write("return retVal;");
    }

    @Override
    protected void deserializeDocument(GenerationContext context, DocumentShape shape) {
        TypeScriptWriter writer = context.getWriter();
        // Documents are JSON content, so don't modify.
        writer.write("return output;");
    }

    @Override
    protected void deserializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getValue().getTarget());
        SymbolProvider symbolProvider = context.getSymbolProvider();

        // Get the right serialization for each entry in the map. Undefined
        // outputs won't have this deserializer invoked.
        writer.openBlock("return Object.entries(output).reduce((acc: $T, [key, value]: [$T, any]) => {",
            "}, {});",
            symbolProvider.toSymbol(shape),
            symbolProvider.toSymbol(shape.getKey()),
            () -> {
                writer.openBlock("if (value === null) {", "}", () -> {
                    // Handle the sparse trait by short circuiting null values
                    // from deserialization, and not including them if encountered
                    // when not sparse.
                    if (shape.hasTrait(SparseTrait.ID)) {
                        writer.write("return { ...acc, [key]: null as any }");
                    } else {
                        writer.write("return acc;");
                    }
                });

                writer.openBlock("return {", "};", () -> {
                    writer.write("...acc,");
                    // Dispatch to the output value provider for any additional handling.
                    writer.write("[key]: $L$L", target.accept(getMemberVisitor(shape.getValue(), "value")),
                        usesExpect(target) ? " as any" : "");
                });
            }
        );
    }

    @Override
    protected void deserializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        // Prepare the document contents structure.
        // Use a TreeMap to sort the members.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());

        writer.openBlock("return {", "} as any;", () -> {
            members.forEach((memberName, memberShape) -> {
                String locationName = memberNameStrategy.apply(memberShape, memberName);
                Shape target = context.getModel().expectShape(memberShape.getTarget());
                String propertyAccess = getFrom("output", locationName);
                boolean isHeader = memberShape.hasTrait(EventHeaderTrait.class);

                if (isHeader) {
                    // we currently don't do anything with response headers in events?
                    throw new RuntimeException(
                        "no handling exists for response struct members with EventHeader trait."
                    );
                } else {
                    if (usesExpect(target)) {
                        // Booleans and numbers will call expectBoolean/expectNumber which will handle
                        // null/undefined properly.
                        writer.write("$L: $L,",
                            memberName,
                            target.accept(getMemberVisitor(memberShape, propertyAccess)));
                    } else {
                        writer.write(
                            "$1L: ($2L != null) ? $3L: undefined,",
                            memberName,
                            propertyAccess,
                            // Dispatch to the output value provider for any additional handling.
                            target.accept(getMemberVisitor(memberShape, propertyAccess))
                        );
                    }
                }
            });
        });
    }

    private boolean usesExpect(Shape shape) {
        if (shape.isStringShape()) {
            if (shape.hasTrait(MediaTypeTrait.class)) {
                return !CodegenUtils.isJsonMediaType(shape.expectTrait(MediaTypeTrait.class).getValue());
            }
            return true;
        }
        return shape.isBooleanShape() || shape instanceof NumberShape;
    }

    @Override
    protected void deserializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());

        String protocolName = context.getProtocolName();

        boolean isStreamingUnion = shape.hasTrait(StreamingTrait.class);
        boolean isRpc = protocolName.equals("aws.json-1.1") || protocolName.equals("aws.json-1.0");

        if (isStreamingUnion && isRpc) {
            writer.addImport("parseEventStream", "__parseEventStream", "@aws-sdk/smithy-client");
            writer.addImport("ParseEventStreamValidTargetTypes", "ParseEventStreamValidTargetTypes", "@aws-sdk/smithy-client");
            writer.openBlock("const targetTypes: Record<string, ParseEventStreamValidTargetTypes> = {", "};", () -> {
                members.forEach((memberName, memberShape) -> {
                    Shape memberTargetShape = model.expectShape(memberShape.getTarget());
                    if (memberTargetShape.isBlobShape() ||
                        memberTargetShape.isStructureShape() ||
                        memberTargetShape.isStringShape()) {
                        writer.write("$L: \"$L\",", memberName, memberTargetShape.getType().toString());
                    } else {
                        throw new CodegenException(
                            String.format(
                                "Unexpected shape type bound to event payload: `%s` `%s`",
                                memberName, memberTargetShape.getType().toString()
                            )
                        );
                    }
                });
            });
            writer.write("__parseEventStream(output, targetTypes);");
        }

        // Check for any known union members and return when we find one.
        members.forEach((memberName, memberShape) -> {
            Shape memberTarget = model.expectShape(memberShape.getTarget());
            String locationName = memberNameStrategy.apply(memberShape, memberName);

            String memberValue = memberTarget.accept(getMemberVisitor(
                memberShape,
                getFrom("output", locationName)
            ));

            if (usesExpect(memberTarget)) {
                // Booleans and numbers will call expectBoolean/expectNumber which will handle
                // null/undefined properly.
                writer.openBlock("if ($L !== undefined) {", "}", memberValue, () -> {
                    writer.write("return { $L: $L as any }", memberName, memberValue);
                });
            } else {
                writer.openBlock(
                    "if ($1L !== undefined && $1L !== null) {", "}",
                    getFrom("output", locationName),
                    () -> writer.openBlock(
                        "return {", "};",
                        () -> {
                            // Dispatch to the output value provider for any additional handling.
                            writer.write("$L: $L", memberName, memberValue);
                        }
                    )
                );
            }
        });
        // Or write to the unknown member the element in the output.
        writer.write("return { $$unknown: Object.entries(output)[0] };");
    }
}
