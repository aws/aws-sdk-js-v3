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
import java.util.function.Supplier;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * Visitor to generate deserialization functions for shapes in XML-document
 * based document bodies.
 *
 * No standard visitation methods are overridden; function body generation for all
 * expected deserializers is handled by this class.
 *
 * Timestamps are deserialized from {@link Format}.DATE_TIME by default.
 *
 * @see <a href="https://awslabs.github.io/smithy/spec/xml.html">Smithy XML traits.</a>
 */
final class XmlShapeDeserVisitor extends DocumentShapeDeserVisitor {

    XmlShapeDeserVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberDeserVisitor getMemberVisitor(String dataSource) {
        return new XmlMemberDeserVisitor(getContext(), dataSource, Format.DATE_TIME);
    }

    @Override
    protected void deserializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());

        // Dispatch to the output value provider for any additional handling.
        writer.openBlock("return (output || []).map((entry: any) =>", ");", () -> {
            writer.write(target.accept(getMemberVisitor("entry")));
        });
    }

    @Override
    protected void deserializeDocument(GenerationContext context, DocumentShape shape) {
        throw new CodegenException(String.format("Cannot deserialize Document types on AWS XML protocols, shape: %s.",
                shape.getId()));
    }

    @Override
    protected void deserializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getValue().getTarget());

        // Get the right serialization for each entry in the map. Undefined
        // outputs won't have this deserializer invoked.
        writer.write("let mapParams: any = {};");
        writer.openBlock("Object.keys(output).forEach(key => {", "});", () -> {
            // Dispatch to the output value provider for any additional handling.
            writer.write("mapParams[key] = $L;", target.accept(getMemberVisitor("output[key]")));
        });
        writer.write("return mapParams;");
    }

    @Override
    protected void deserializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        // Prepare the document contents structure.
        Map<String, MemberShape> members = shape.getAllMembers();
        writer.openBlock("let contents: any = {", "};", () -> {
            writer.write("__type: $S,", shape.getId().getName());
            // Set all the members to undefined to meet type constraints.
            members.forEach((memberName, memberShape) -> writer.write("$L: undefined,", memberName));
        });

        members.forEach((memberName, memberShape) ->
                deserializeNamedStructureMember(context, memberName, memberShape, () -> "output"));

        writer.write("return contents;");
    }

    void deserializeNamedStructureMember(
            GenerationContext context,
            String memberName,
            MemberShape memberShape,
            Supplier<String> inputLocation
    ) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        // Use the @xmlName trait if present on the member, otherwise use the member name.
        String locationName = memberShape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(memberName);
        // Grab the target shape so we can use a member deserializer on it.
        Shape target = context.getModel().expectShape(memberShape.getTarget());
        // Handle @xmlFlattened for collections and maps.
        boolean isFlattened = memberShape.hasTrait(XmlFlattenedTrait.class);

        // Build a string based on the traits that represents the location.
        // Note we don't need to handle @xmlAttribute here because the parser flattens
        // attributes in to the main structure.
        StringBuilder sourceBuilder = new StringBuilder(inputLocation.get())
                .append("['").append(locationName).append("']");

        // Go in to a specialized element for unflattened aggregates
        if (deserializationReturnsArray(target) && !isFlattened) {
            String targetLocation = getUnnamedAggregateTargetLocation(model, target);
            sourceBuilder.append("['").append(targetLocation).append("']");
        }

        // Handle the response property.
        String source = sourceBuilder.toString();
        writer.openBlock("if ($L !== undefined) {", "}", source, () -> {
            if (isFlattened) {
                writer.write("const wrappedItem = ($1L instanceof Array) ? $1L : [$1L];", source);
            }
            writer.write("contents.$L = $L;", memberName,
                    // Dispatch to the output value provider for any additional handling.
                    target.accept(getMemberVisitor(isFlattened ? "wrappedItem" : source)));
        });
    }

    private boolean deserializationReturnsArray(Shape shape) {
        return (shape instanceof CollectionShape) || (shape instanceof MapShape);
    }

    private String getUnnamedAggregateTargetLocation(Model model, Shape shape) {
        if (shape.isMapShape()) {
            return "entry";
        }

        // Any other aggregate shape is an instance of a CollectionShape.
        return ((CollectionShape) shape).getMember().getMemberTrait(model, XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse("member");
    }

    @Override
    protected void deserializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        // Check for any known union members and return when we find one.
        Map<String, MemberShape> members = shape.getAllMembers();
        members.forEach((memberName, memberShape) -> {
            // Use the @xmlName trait if present on the member, otherwise use the member name.
            String locationName = memberShape.getTrait(XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse(memberName);
            // Grab the target shape so we can use a member deserializer on it.
            Shape target = context.getModel()
                                   .expectShape(memberShape.getTarget());
            // Handle @xmlFlattened for collections and maps.
            boolean isFlattened = memberShape.hasTrait(XmlFlattenedTrait.class);

            // Build a string based on the traits that represents the location.
            // Note we don't need to handle @xmlAttribute here because the parser flattens
            // attributes in to the main structure.
            StringBuilder sourceBuilder = new StringBuilder("output['").append(locationName).append("']");

            // Go in to a specialized element for unflattened aggregates
            if (deserializationReturnsArray(target) && !isFlattened) {
                String targetLocation = getUnnamedAggregateTargetLocation(model, target);
                sourceBuilder.append("['").append(targetLocation).append("']");
            }

            // Handle the response property.
            String source = sourceBuilder.toString();
            writer.openBlock("if ($L !== undefined) {", "}", source, () -> {
                writer.openBlock("return {", "};", () -> {
                    // Dispatch to the output value provider for any additional handling.
                    writer.write("$L: $L", memberName, target.accept(getMemberVisitor(source)));
                });
            });
        });

        // Or write output element to the unknown member.
        writer.write("const key = Object.keys(output)[0];");
        writer.write("return { $$unknown: [key, output[key]] };");
    }
}
