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

import software.amazon.smithy.aws.typescript.codegen.propertyaccess.PropertyAccessor;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.SparseTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Visitor to generate serialization functions for shapes in form-urlencoded
 * based document bodies.
 *
 * This class handles function body generation for all types expected by the {@code
 * DocumentShapeSerVisitor}. No other shape type serialization is overridden.
 *
 * Timestamps are serialized to {@link Format}.DATE_TIME by default.
 */
@SmithyInternalApi
class QueryShapeSerVisitor extends DocumentShapeSerVisitor {
    private static final Format TIMESTAMP_FORMAT = Format.DATE_TIME;

    QueryShapeSerVisitor(GenerationContext context) {
        super(context);
    }

    private QueryMemberSerVisitor getMemberVisitor(String dataSource) {
        return new QueryMemberSerVisitor(getContext(), dataSource, TIMESTAMP_FORMAT);
    }

    @Override
    protected void serializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        MemberShape memberShape = shape.getMember();
        Shape target = context.getModel().expectShape(memberShape.getTarget());

        // Use the @xmlName trait if present on the member, otherwise use "member".
        String locationName = getMemberSerializedLocationName(memberShape, "member");

        // Set up a location to store all of the entry pairs.
        writer.write("const entries: any = {};");
        // Set up a counter to increment the member entries.
        writer.write("let counter = 1;");
        writer.openBlock("for (let entry of input) {", "}", () -> {
            writer.openBlock("if (entry === null) {", "}", () -> {
                // Handle the sparse trait by short circuiting null values
                // from serialization, and not including them if encountered
                // when not sparse.
                if (shape.hasTrait(SparseTrait.ID)) {
                    writer.write("entries[`$L.$${counter}`] = null as any }", locationName);
                }
                writer.write("continue;");
            });

            QueryMemberSerVisitor inputVisitor = getMemberVisitor("entry");
            if (inputVisitor.visitSuppliesEntryList(target)) {
                // Dispatch to the input value provider for any additional handling.
                serializeUnnamedMemberEntryList(context, target, "entry", locationName + ".${counter}");
            } else {
                writer.write("entries[`$L.$${counter}`] = $L;", locationName, target.accept(inputVisitor));
            }
            writer.write("counter++;");
        });

        writer.write("return entries;");
    }

    @Override
    protected void serializeDocument(GenerationContext context, DocumentShape shape) {
        throw new CodegenException(String.format(
                "Cannot serialize Document types in the aws.query protocol, shape: %s.", shape.getId()));
    }

    @Override
    protected void serializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        String keyTypeName = "keyof typeof input";

        // Filter out null entries if we don't have the sparse trait.
        String potentialFilter = "";
        if (!shape.hasTrait(SparseTrait.ID)) {
            potentialFilter = ".filter((key) => input[key as " + keyTypeName + "] != null)";
        }

        // Set up a location to store all of the entry pairs.
        writer.write("const entries: any = {};");
        // Set up a counter to increment the member entries.
        writer.write("let counter = 1;");
        // Use the keys as an iteration point to dispatch to the input value providers.
        writer.openBlock("Object.keys(input)$L.forEach(key => {", "});", potentialFilter, () -> {
            // Prepare the key's entry.
            // Use the @xmlName trait if present on the member, otherwise use "key".
            MemberShape keyMember = shape.getKey();
            Shape keyTarget = model.expectShape(keyMember.getTarget());
            String keyName = getMemberSerializedLocationName(keyMember, "key");
            writer.write("entries[`entry.$${counter}.$L`] = $L;", keyName, keyTarget.accept(getMemberVisitor("key")));

            // Prepare the value's entry.
            // Use the @xmlName trait if present on the member, otherwise use "value".
            MemberShape valueMember = shape.getValue();
            Shape valueTarget = model.expectShape(valueMember.getTarget());
            String valueName = getMemberSerializedLocationName(valueMember, "value");

            QueryMemberSerVisitor inputVisitor = getMemberVisitor("input[key as " + keyTypeName + "]");
            String valueLocation = "entry.${counter}." + valueName;
            if (inputVisitor.visitSuppliesEntryList(valueTarget)) {
                serializeUnnamedMemberEntryList(
                    context,
                    valueTarget,
                    "input[key as " + keyTypeName + "]",
                    valueLocation
                );
            } else {
                writer.write("entries[`$L`] = $L;", valueLocation, valueTarget.accept(inputVisitor));
            }
            writer.write("counter++;");
        });

        writer.write("return entries;");
    }

    private void serializeUnnamedMemberEntryList(
            GenerationContext context,
            Shape target,
            String inputLocation,
            String entryWrapper
    ) {
        TypeScriptWriter writer = context.getWriter();

        QueryMemberSerVisitor inputVisitor = getMemberVisitor(inputLocation);
        // Map entries that supply entry lists need to have them joined properly.
        writer.write("const memberEntries = $L;", target.accept(inputVisitor));
        writer.openBlock("Object.entries(memberEntries).forEach(([key, value]) => {", "});",
                () -> writer.write("entries[`$L.$${key}`] = value;", entryWrapper));
    }

    @Override
    protected void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        // Set up a location to store all of the entry pairs.
        writer.write("const entries: any = {};");

        // Serialize every member of the structure if present.
        shape.getAllMembers().forEach((memberName, memberShape) -> {
            String inputLocation = "input." + memberName;

            // Handle if the member is an idempotency token that should be auto-filled.
            AwsProtocolUtils.writeIdempotencyAutofill(context, memberShape, inputLocation);

            writer.openBlock(
                "if ($1L != null) {",
                "}",
                inputLocation,
                () -> {
                    serializeNamedMember(context, memberName, memberShape, inputLocation);
                }
            );
        });

        writer.write("return entries");
    }

    private void serializeNamedMember(
            GenerationContext context,
            String memberName,
            MemberShape memberShape,
            String inputLocation
    ) {
        // Grab the target shape so we can use a member serializer on it.
        Shape target = context.getModel().expectShape(memberShape.getTarget());

        String locationName = getMemberSerializedLocationName(memberShape, memberName);

        QueryMemberSerVisitor inputVisitor = getMemberVisitor(inputLocation);
        if (inputVisitor.visitSuppliesEntryList(target)) {
            serializeNamedMemberEntryList(context, locationName, memberShape, target, inputVisitor, inputLocation);
        } else {
            serializeNamedMemberValue(context, locationName, "input." + memberName, memberShape, target);
        }
    }

    private void serializeNamedMemberValue(
            GenerationContext context,
            String locationName,
            String dataSource,
            MemberShape memberShape,
            Shape target
    ) {
        TypeScriptWriter writer = context.getWriter();

        // Handle @timestampFormat on members not just the targeted shape.
        String valueProvider = memberShape.hasTrait(TimestampFormatTrait.class)
                ? AwsProtocolUtils.getInputTimestampValueProvider(context, memberShape,
                        TIMESTAMP_FORMAT, dataSource)
                : target.accept(getMemberVisitor(dataSource));

        writer.write("entries[$S] = $L;", locationName, valueProvider);
    }

    /**
     * Retrieves the correct serialization location based on the member's
     * xmlName trait or uses the default value.
     *
     * @param memberShape The member being serialized.
     * @param defaultValue A default value for the location.
     * @return The location where the member will be serialized.
     */
    protected String getMemberSerializedLocationName(MemberShape memberShape, String defaultValue) {
        // Use the @xmlName trait if present on the member, otherwise use the member name.
        return memberShape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(defaultValue);
    }

    private void serializeNamedMemberEntryList(
            GenerationContext context,
            String locationName,
            MemberShape memberShape,
            Shape target,
            DocumentMemberSerVisitor inputVisitor,
            String inputLocation
    ) {
        TypeScriptWriter writer = context.getWriter();

        // Handle flattening for collections and maps.
        boolean isFlattened = isFlattenedMember(context, memberShape);

        // Set up a location to store all of the entry pairs.
        writer.write("const memberEntries = $L;", target.accept(inputVisitor));

        Shape targetShape = context.getModel().expectShape(memberShape.getTarget());

        if (targetShape.isListShape() || targetShape.isSetShape()) {
            writer.openBlock(
                "if ($L?.length === 0) {",
                "}",
                inputLocation,
                () -> {
                    writer.write("$L = []", PropertyAccessor.getFrom("entries", locationName));
                }
            );
        }

        // Consolidate every entry in the list.
        writer.openBlock("Object.entries(memberEntries).forEach(([key, value]) => {", "});", () -> {
            // Remove the last segment for any flattened entities.
            if (isFlattened) {
                writer.write("const loc = `$L.$${key.substring(key.indexOf('.') + 1)}`;", locationName);
            } else {
                writer.write("const loc = `$L.$${key}`;", locationName);
            }

            writer.write("entries[loc] = value;");
        });
    }

    /**
     * Tells whether the contents of the member should be flattened
     * when serialized.
     *
     * @param context The generation context.
     * @param memberShape The member being serialized.
     * @return If the member's contents should be flattened when serialized.
     */
    protected boolean isFlattenedMember(GenerationContext context, MemberShape memberShape) {
        // The @xmlFlattened trait determines the flattening of members in aws.query.
        return memberShape.hasTrait(XmlFlattenedTrait.class);
    }

    @Override
    protected void serializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        ServiceShape serviceShape = context.getService();

        // Set up a location to store the entry pair.
        writer.write("const entries: any = {};");

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("$L.visit(input, {", "});", shape.getId().getName(serviceShape), () -> {
            shape.getAllMembers().forEach((memberName, memberShape) -> {
                writer.openBlock("$L: value => {", "},", memberName, () -> {
                    serializeNamedMember(context, memberName, memberShape, "value");
                });
            });

            // Handle the unknown property.
            writer.openBlock("_: (name: string, value: any) => {", "}", () -> {
                writer.write("entries[name] = value;");
            });
        });

        writer.write("return entries;");
    }
}
