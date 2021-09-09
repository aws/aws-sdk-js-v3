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

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.stream.Collectors;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.MediaTypeTrait;
import software.amazon.smithy.model.traits.SparseTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;

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
@SmithyInternalApi
final class XmlShapeDeserVisitor extends DocumentShapeDeserVisitor {

    XmlShapeDeserVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberDeserVisitor getMemberVisitor(MemberShape memberShape, String dataSource) {
        return new XmlMemberDeserVisitor(getContext(), memberShape, dataSource, Format.DATE_TIME);
    }

    @Override
    protected void deserializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());

        // Filter out null entries if we don't have the sparse trait.
        String potentialFilter = "";
        if (!shape.hasTrait(SparseTrait.ID)) {
            potentialFilter = ".filter((e: any) => e != null)";
        }

        // Dispatch to the output value provider for any additional handling.
        writer.openBlock("return (output || [])$L.map((entry: any) => {", "});", potentialFilter, () -> {
            // Short circuit null values from deserialization.
            writer.write("if (entry === null) { return null as any; }");

            String dataSource = getUnnamedTargetWrapper(context, target, "entry");
            writer.write("return $L$L;", target.accept(getMemberVisitor(shape.getMember(), dataSource)),
                    usesExpect(target) ? " as any" : "");
        });
    }

    private String getUnnamedTargetWrapper(GenerationContext context, Shape target, String dataSource) {
        if (!deserializationReturnsArray(target)) {
            return dataSource;
        }

        TypeScriptWriter writer = context.getWriter();
        writer.addImport("getArrayIfSingleItem", "__getArrayIfSingleItem", "@aws-sdk/smithy-client");
        // The XML parser will set one K:V for a member that could
        // return multiple entries but only has one.
        // Update the target element if we target another level of collection.
        String targetLocation = getUnnamedAggregateTargetLocation(context.getModel(), target);
        return String.format("__getArrayIfSingleItem(%s[\"%s\"])", dataSource, targetLocation);
    }

    private boolean deserializationReturnsArray(Shape shape) {
        return (shape instanceof CollectionShape) || (shape instanceof MapShape);
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
        String keyLocation = shape.getKey().getTrait(XmlNameTrait.class).map(XmlNameTrait::getValue).orElse("key");
        String valueLocation = shape.getValue().getTrait(XmlNameTrait.class).map(XmlNameTrait::getValue)
                .orElse("value");

        // Get the right serialization for each entry in the map. Undefined
        // outputs won't have this deserializer invoked.
        writer.openBlock("return output.reduce((acc: any, pair: any) => {", "}, {});", () -> {
            String dataSource = getUnnamedTargetWrapper(context, target, "pair[\"" + valueLocation + "\"]");

            writer.openBlock("if ($L === null) {", "}", dataSource, () -> {
                // Handle the sparse trait by short circuiting null values
                // from deserialization, and not including them if encountered
                // when not sparse.
                if (shape.hasTrait(SparseTrait.ID)) {
                    writer.write("return { ...acc, [pair[$S]]: null as any }");
                } else {
                    writer.write("return acc;");
                }
            });

            writer.openBlock("return {", "};", () -> {
                writer.write("...acc,");
                // Dispatch to the output value provider for any additional handling.
                writer.write("[pair[$S]]: $L$L",
                        keyLocation,
                        target.accept(getMemberVisitor(shape.getValue(), dataSource)),
                        usesExpect(target) ? " as any" : "");
            });
        });
    }

    @Override
    protected void deserializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        // Prepare the document contents structure.
        Map<String, MemberShape> members = shape.getAllMembers();
        writer.openBlock("let contents: any = {", "};", () -> {
            // Set all the members to undefined to meet type constraints.
            members.forEach((memberName, memberShape) -> writer.write("$L: undefined,", memberName));
        });

        members.forEach((memberName, memberShape) -> {
            // Grab the target shape so we can use a member deserializer on it.
            Shape target = context.getModel().expectShape(memberShape.getTarget());
            deserializeNamedMember(context, memberName, memberShape, "output", (dataSource, visitor) -> {
                writer.write("contents.$L = $L;", memberName, target.accept(visitor));
            });
        });

        writer.write("return contents;");
    }

    /**
     * Generates an if statement for deserializing an output member, validating its
     * presence at the correct location, handling collections and flattening, and
     * dispatching to the supplied function to generate the body of the if statement.
     *
     * @param context The generation context.
     * @param memberName The name of the member being deserialized.
     * @param memberShape The shape of the member being deserialized.
     * @param inputLocation The parent input location of the member being deserialized.
     * @param statementBodyGenerator A function that generates the proper deserialization
     *   after member presence is validated.
     */
    void deserializeNamedMember(
            GenerationContext context,
            String memberName,
            MemberShape memberShape,
            String inputLocation,
            BiConsumer<String, DocumentMemberDeserVisitor> statementBodyGenerator
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
        // Handle targets that return multiple entities per member.
        boolean deserializationReturnsArray = deserializationReturnsArray(target);

        // Build a string based on the traits that represents the location.
        // Note we don't need to handle @xmlAttribute here because the parser flattens
        // attributes in to the main structure.
        StringBuilder sourceBuilder = new StringBuilder(inputLocation).append("['").append(locationName).append("']");
        // Track any locations we need to validate on our way to the final element.
        List<String> locationsToValidate = new ArrayList<>();

        // Go in to a specialized element for unflattened aggregates.
        if (deserializationReturnsArray && !isFlattened) {
            // Make sure we validate the wrapping element is set.
            locationsToValidate.add(sourceBuilder.toString());
            // Update the target element.
            String targetLocation = getUnnamedAggregateTargetLocation(model, target);
            sourceBuilder.append("['").append(targetLocation).append("']");
        }

        // Handle self-closed xml parsed as an empty string.
        if (deserializationReturnsArray) {
            writer.openBlock("if ($L.$L === \"\") {", "}", inputLocation, locationName, () -> {
                if (target instanceof MapShape) {
                    writer.write("contents.$L = {};", memberName);
                } else if (target instanceof CollectionShape) {
                    writer.write("contents.$L = [];", memberName);
                }
            });
        }

        // Handle the response property.
        String source = sourceBuilder.toString();
        // Validate the resulting target element is set.
        locationsToValidate.add(source);
        // Build a string of the elements to validate before deserializing.
        String validationStatement = locationsToValidate.stream()
                .map(location -> location + " !== undefined")
                .collect(Collectors.joining(" && "));
        writer.openBlock("if ($L) {", "}", validationStatement, () -> {
            String dataSource = getNamedTargetWrapper(context, target, source);
            statementBodyGenerator.accept(dataSource, getMemberVisitor(memberShape, dataSource));
        });
    }

    private String getNamedTargetWrapper(GenerationContext context, Shape target, String dataSource) {
        if (!deserializationReturnsArray(target)) {
            return dataSource;
        }

        TypeScriptWriter writer = context.getWriter();
        writer.addImport("getArrayIfSingleItem", "__getArrayIfSingleItem", "@aws-sdk/smithy-client");
        // The XML parser will set one K:V for a member that could
        // return multiple entries but only has one.
        return String.format("__getArrayIfSingleItem(%s)", dataSource);
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

        // Check for any known union members and return when we find one.
        Map<String, MemberShape> members = shape.getAllMembers();
        members.forEach((memberName, memberShape) -> {
            // Grab the target shape so we can use a member deserializer on it.
            Shape target = context.getModel().expectShape(memberShape.getTarget());
            deserializeNamedMember(context, memberName, memberShape, "output", (dataSource, visitor) -> {
                writer.openBlock("return {", "};", () -> {
                    // Dispatch to the output value provider for any additional handling.
                    writer.write("$L: $L$L", memberName, target.accept(visitor), usesExpect(target) ? " as any" : "");
                });
            });
        });

        // Or write output element to the unknown member.
        writer.write("return { $$unknown: Object.entries(output)[0] };");
    }

    private boolean usesExpect(Shape shape) {
        if (shape.isStringShape()) {
            if (shape.hasTrait(MediaTypeTrait.class)) {
                return !CodegenUtils.isJsonMediaType(shape.expectTrait(MediaTypeTrait.class).getValue());
            }
            return true;
        }
        return false;
    }
}
