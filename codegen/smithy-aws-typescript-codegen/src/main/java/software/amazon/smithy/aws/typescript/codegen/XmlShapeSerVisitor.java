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
import software.amazon.smithy.model.traits.XmlAttributeTrait;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * Visitor to generate serialization functions for shapes in XML-document
 * based document bodies.
 *
 * This class handles function body generation for all types expected by the {@code
 * DocumentShapeSerVisitor}. No other shape type serialization is overridden.
 *
 * Timestamps are serialized to {@link Format}.DATE_TIME by default.
 *
 * @see <a href="https://awslabs.github.io/smithy/spec/xml.html">Smithy XML traits.</a>
 */
final class XmlShapeSerVisitor extends DocumentShapeSerVisitor {

    XmlShapeSerVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberSerVisitor getMemberVisitor(String dataSource) {
        return new XmlMemberSerVisitor(getContext(), dataSource, Format.DATE_TIME);
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

        // Set up a location to store all of the child node(s).
        writer.write("const collectedNodes: any = [];");
        writer.openBlock("for (let entry of input) {", "}", () -> {
            // Dispatch to the input value provider for any additional handling.
            writer.write("const node = $L;", target.accept(getMemberVisitor("entry")));
            writer.write("collectedNodes.push(node.withName($S));", locationName);
        });

        writer.write("return collectedNodes;");
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

        // Set up a location to store all of the child node(s).
        writer.write("const collectedNodes: any = [];");
        // Use the keys as an iteration point to dispatch to the input value providers.
        writer.openBlock("Object.keys(input).forEach(key => {", "});", () -> {
            // Prepare a containing node for each entry's k/v pair.
            writer.write("const entryNode = new __XmlNode(\"entry\");");

            // Prepare the key's node.
            // Use the @xmlName trait if present on the member, otherwise use "key".
            MemberShape keyMember = shape.getKey();
            Shape keyTarget = model.expectShape(keyMember.getTarget());
            String keyName = keyMember.getTrait(XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse("key");
            writer.write("const keyNode = new __XmlNode($S);", keyName);
            writer.write("keyNode.addChildNode($L)", keyTarget.accept(getMemberVisitor("key")));
            writer.write("entryNode.addChildNode(keyNode);");

            // Prepare the value's node.
            // Use the @xmlName trait if present on the member, otherwise use "value".
            MemberShape valueMember = shape.getValue();
            Shape valueTarget = model.expectShape(valueMember.getTarget());
            String valueName = valueMember.getTrait(XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse("value");
            writer.write("const valueNode = new __XmlNode($S);", valueName);
            writer.write("valueNode.addChildNode($L)", valueTarget.accept(getMemberVisitor("input[key]")));
            writer.write("entryNode.addChildNode(valueNode);");

            // Add the entry to the collection.
            writer.write("collectedNodes.push(entryNode);");
        });

        writer.write("return collectedNodes;");
    }

    @Override
    protected void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();
        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        // Handle the @xmlName trait for the structure itself.
        String nodeName = shape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(shape.getId().getName());

        // Create the structure's node.
        writer.write("const bodyNode = new __XmlNode($S);", nodeName);

        // Add @xmlNamespace value of the structure to the node.
        AwsProtocolUtils.writeXmlNamespace(context, shape, "bodyNode");

        // Serialize every member of the structure if present.
        Map<String, MemberShape> members = shape.getAllMembers();
        members.forEach((memberName, memberShape) -> {
            String inputLocation = "input." + memberName;

            // Handle if the member is an idempotency token that should be auto-filled.
            AwsProtocolUtils.writeIdempotencyAutofill(context, memberShape, inputLocation);

            writer.openBlock("if ($L !== undefined) {", "}", inputLocation, () -> {
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
            DocumentMemberSerVisitor inputVisitor = getMemberVisitor(inputLocation.get());

            // Collected members must be handled with flattening and renaming.
            if (serializationReturnsArray(target)) {
                serializeNamedMemberFromArray(context, locationName, memberShape, target, inputVisitor);
            } else {
                // Standard members are added as children after updating their names.
                writer.write("const memberNode = $L;", target.accept(inputVisitor));
                writer.write("bodyNode.addChildNode(memberNode.withName($S));", locationName);
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
        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");
        writer.addImport("XmlText", "__XmlText", "@aws-sdk/xml-builder");

        // Handle the @xmlName trait for the union itself.
        String nodeName = shape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(shape.getId().getName());

        // Create the union's node.
        writer.write("const bodyNode = new __XmlNode($S);", nodeName);

        // Add @xmlNamespace value of the structure to the node.
        AwsProtocolUtils.writeXmlNamespace(context, shape, "bodyNode");

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("$L.visit(input, {", "});", shape.getId().getName(), () -> {
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
                writer.write("bodyNode.addChildNode(new __XmlNode(value).addChildNode(value));");
            });
        });

        writer.write("return bodyNode;");
    }
}
