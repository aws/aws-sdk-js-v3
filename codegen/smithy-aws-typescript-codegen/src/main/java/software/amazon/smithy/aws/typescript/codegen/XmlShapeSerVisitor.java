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
import java.util.Optional;
import java.util.function.Supplier;
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
import software.amazon.smithy.model.traits.XmlAttributeTrait;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Visitor to generate serialization functions for shapes in XML-document
 * based document bodies.
 *
 * This class handles function body generation for all types expected by the {@code
 * DocumentShapeSerVisitor}. No other shape type serialization is overridden.
 *
 * Timestamps are serialized to {@link Format}.DATE_TIME by default.
 *
 * @see <a href="https://smithy.io/2.0/spec/protocol-traits.html#xml-bindings">Smithy XML traits.</a>
 */
@SmithyInternalApi
final class XmlShapeSerVisitor extends DocumentShapeSerVisitor {
    private static final Format TIMESTAMP_FORMAT = Format.DATE_TIME;

    XmlShapeSerVisitor(GenerationContext context) {
        super(context);
    }

    private XmlMemberSerVisitor getMemberVisitor(String dataSource) {
        return new XmlMemberSerVisitor(getContext(), dataSource, TIMESTAMP_FORMAT);
    }

    @Override
    protected void serializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        MemberShape memberShape = shape.getMember();
        Shape target = context.getModel().expectShape(memberShape.getTarget());
        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        // Use the @xmlName trait if present on the member, otherwise use "member".
        String locationName = memberShape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse("member");

        // Filter out null entries if we don't have the sparse trait.
        String potentialFilter = "";
        boolean hasSparseTrait = shape.hasTrait(SparseTrait.ID);
        if (!hasSparseTrait) {
            potentialFilter = ".filter((e: any) => e != null)";
        }

        writer.openBlock("return input$L.map(entry => {", "});", potentialFilter, () -> {
            // Short circuit null values from serialization.
            if (hasSparseTrait) {
                writer.write("if (entry === null) { return null as any; }");
            }

            // Dispatch to the input value provider for any additional handling.
            writer.write("const node = $L;", target.accept(getMemberVisitor("entry")));
            // Handle proper unwrapping of target nodes.
            if (serializationReturnsArray(target)) {
                writer.openBlock("return node.reduce((acc: __XmlNode, workingNode: any) => {", "}", () -> {
                    // Add @xmlNamespace value of the target member.
                    AwsProtocolUtils.writeXmlNamespace(context, memberShape, "workingNode");
                    writer.write("return acc.addChildNode(workingNode);");
                });
                writer.write(", new __XmlNode($S));", locationName);
            } else {
                // Add @xmlNamespace value of the target member.
                AwsProtocolUtils.writeXmlNamespace(context, memberShape, "node");
                writer.write("return node.withName($S);", locationName);
            }
        });
    }

    @Override
    protected void serializeDocument(GenerationContext context, DocumentShape shape) {
        throw new CodegenException(String.format(
                "Cannot serialize Document types on AWS XML protocols, shape: %s.", shape.getId()));
    }

    @Override
    protected void serializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();
        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        String keyTypeName = "keyof typeof input";

        // Filter out null entries if we don't have the sparse trait.
        String potentialFilter = "";
        if (!shape.hasTrait(SparseTrait.ID)) {
            potentialFilter = ".filter((key) => input[key as " + keyTypeName + "] != null)";
        }

        // Use the keys as an iteration point to dispatch to the input value providers.
        writer.openBlock("return Object.keys(input)$L.map(key => {", "});", potentialFilter, () -> {
            // Prepare a containing node for each entry's k/v pair.
            writer.write("const entryNode = new __XmlNode(\"entry\");");

            // Prepare the key's node.
            // Use the @xmlName trait if present on the member, otherwise use "key".
            MemberShape keyMember = shape.getKey();
            Shape keyTarget = model.expectShape(keyMember.getTarget());
            String keyName = keyMember.getTrait(XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse("key");
            writer.write("const keyNode = $L.withName($S);", keyTarget.accept(getMemberVisitor("key")), keyName);
            // Add @xmlNamespace value of the key member.
            AwsProtocolUtils.writeXmlNamespace(context, keyMember, "keyNode");
            writer.write("entryNode.addChildNode(keyNode);");

            // Prepare the value's node.
            // Use the @xmlName trait if present on the member, otherwise use "value".
            MemberShape valueMember = shape.getValue();
            Shape valueTarget = model.expectShape(valueMember.getTarget());
            String valueName = valueMember.getTrait(XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse("value");

            // Handle the sparse trait by short circuiting null values
            // from serialization, and not including them if encountered
            // when not sparse.
            writer.write("var node;");
            if (shape.hasTrait(SparseTrait.ID)) {
                writer.openBlock("if (value === null) {", "} else {", () ->
                        writer.write("node = __XmlNode.of($S, null);", valueName));
                writer.indent();
            }

            // Dispatch to the input value provider for any additional handling.
            writer.write("node = $L;", valueTarget.accept(getMemberVisitor("input[key as " + keyTypeName + "]!")));

            if (shape.hasTrait(SparseTrait.ID)) {
                writer.dedent();
                writer.write("}");
            }

            // Handle proper unwrapping of target nodes.
            if (serializationReturnsArray(valueTarget)) {
                writer.openBlock("entryNode.addChildNode(", ");", () -> {
                    writer.openBlock("node.reduce((acc: __XmlNode, workingNode: any) => {", "}", () -> {
                        // Add @xmlNamespace value of the value member.
                        AwsProtocolUtils.writeXmlNamespace(context, valueMember, "workingNode");
                        writer.write("return acc.addChildNode(workingNode);");
                    });
                    writer.write(", new __XmlNode($S))", valueName);
                });
            } else {
                // Add @xmlNamespace value of the target member.
                AwsProtocolUtils.writeXmlNamespace(context, valueMember, "node");
                writer.write("entryNode.addChildNode(node.withName($S));", valueName);
            }

            writer.write("return entryNode;");
        });
    }

    @Override
    protected void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();
        ServiceShape serviceShape = context.getService();
        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        // Handle the @xmlName trait for the structure itself.
        String nodeName = shape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(shape.getId().getName(serviceShape));

        // Create the structure's node.
        writer.write("const bodyNode = new __XmlNode($S);", nodeName);

        // Serialize every member of the structure if present.
        Map<String, MemberShape> members = shape.getAllMembers();
        members.forEach((memberName, memberShape) -> {
            String inputLocation = "input." + memberName;

            // Handle if the member is an idempotency token that should be auto-filled.
            AwsProtocolUtils.writeIdempotencyAutofill(context, memberShape, inputLocation);

            writer.openBlock("if ($1L != null) {", "}", inputLocation, () -> {
                serializeNamedMember(context, memberName, memberShape, () -> inputLocation);
            });
        });

        writer.write("return bodyNode;");
    }

    void serializeNamedMember(
            GenerationContext context,
            String memberName,
            MemberShape memberShape,
            Supplier<String> inputLocation
    ) {
        TypeScriptWriter writer = context.getWriter();

        // Use the @xmlName trait if present on the member, otherwise use the member name.
        String locationName = memberShape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(memberName);

        // Handle @xmlAttribute simple members.
        if (memberShape.hasTrait(XmlAttributeTrait.class)) {
            writer.write("bodyNode.addAttribute($S, $L);", locationName, inputLocation.get());
        } else {
            // Grab the target shape so we can use a member serializer on it.
            Shape target = context.getModel().expectShape(memberShape.getTarget());
            XmlMemberSerVisitor inputVisitor = getMemberVisitor(inputLocation.get());
            // Collected members must be handled with flattening and renaming.
            if (serializationReturnsArray(target)) {
                serializeNamedMemberFromArray(context, locationName, memberShape, target, inputVisitor);
            } else {
                // Handle @timestampFormat on members not just the targeted shape.
                String valueProvider;
                if (memberShape.hasTrait(TimestampFormatTrait.class) || target.hasTrait(TimestampFormatTrait.class)) {
                    Optional<TimestampFormatTrait> timestampFormat = memberShape.getTrait(TimestampFormatTrait.class);
                    if (timestampFormat.isEmpty()) {
                        timestampFormat = target.getTrait(TimestampFormatTrait.class);
                    }
                    valueProvider = inputVisitor.getAsXmlText(target,
                            AwsProtocolUtils.getInputTimestampValueProvider(context, memberShape,
                                    timestampFormat.get().getFormat(), inputLocation.get()) + ".toString()");
                } else {
                    valueProvider = target.accept(inputVisitor);
                }

                // Standard members are added as children after updating their names.
                writer.write("const node = $L.withName($S);", valueProvider, locationName);
                // Add @xmlNamespace value of the target member.
                AwsProtocolUtils.writeXmlNamespace(context, memberShape, "node");
                writer.write("bodyNode.addChildNode(node);");
            }
        }
    }

    private void serializeNamedMemberFromArray(
            GenerationContext context,
            String locationName,
            MemberShape memberShape,
            Shape target,
            DocumentMemberSerVisitor inputVisitor
    ) {
        TypeScriptWriter writer = context.getWriter();

        // Handle @xmlFlattened for collections and maps.
        boolean isFlattened = memberShape.hasTrait(XmlFlattenedTrait.class);

        // Get all the nodes that are going to be serialized.
        writer.write("const nodes = $L;", target.accept(inputVisitor));

        // Prepare a containing node to hold the nodes if not flattened.
        if (!isFlattened) {
            writer.write("const containerNode = new __XmlNode($S);", locationName);
            // Add @xmlNamespace value of the target member.
            AwsProtocolUtils.writeXmlNamespace(context, memberShape, "containerNode");
        }

        // Add every node to the target node.
        writer.openBlock("nodes.map((node: any) => {", "});", () -> {
            // Adjust to add sub nodes to the right target based on flattening.
            String targetNode = isFlattened ? "bodyNode" : "containerNode";
            if (isFlattened) {
                writer.write("node = node.withName($S);", locationName);
            }
            writer.write("$L.addChildNode(node);", targetNode);
        });

        // For non-flattened collected nodes, we have to add the containing node.
        if (!isFlattened) {
            writer.write("bodyNode.addChildNode(containerNode);");
        }
    }

    private boolean serializationReturnsArray(Shape shape) {
        return (shape instanceof CollectionShape) || (shape instanceof MapShape);
    }

    @Override
    protected void serializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        ServiceShape serviceShape = context.getService();
        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");
        writer.addImport("XmlText", "__XmlText", "@aws-sdk/xml-builder");

        // Handle the @xmlName trait for the union itself.
        String nodeName = shape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(shape.getId().getName(serviceShape));

        // Create the union's node.
        writer.write("const bodyNode = new __XmlNode($S);", nodeName);

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("$L.visit(input, {", "});", shape.getId().getName(serviceShape), () -> {
            Map<String, MemberShape> members = shape.getAllMembers();
            members.forEach((memberName, memberShape) -> {
                writer.openBlock("$L: value => {", "},", memberName, () -> {
                    serializeNamedMember(context, memberName, memberShape, () -> "value");
                });
            });

            // Handle the unknown property.
            writer.openBlock("_: (name: string, value: any) => {", "}", () -> {
                // Throw an exception if we're trying to serialize something that we wouldn't know how to.
                writer.openBlock("if (!(value instanceof __XmlNode || value instanceof __XmlText)) {", "}", () -> {
                    writer.write("throw new Error(\"Unable to serialize unknown union members in XML.\");");
                });

                // Set the node explicitly for potentially correct cases.
                writer.write("bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));");
            });
        });

        writer.write("return bodyNode;");
    }
}
