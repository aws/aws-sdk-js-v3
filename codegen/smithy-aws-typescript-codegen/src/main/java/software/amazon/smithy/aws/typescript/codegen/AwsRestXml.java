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

import java.util.List;
import java.util.Set;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.knowledge.HttpBinding.Location;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlNamespaceTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;

/**
 * Handles generating the aws.rest-xml protocol for services. It handles reading and
 * writing from document bodies, including generating any functions needed for
 * performing serde.
 *
 * This builds on the foundations of the {@link HttpBindingProtocolGenerator} to handle
 * components of binding to HTTP requests and responses.
 *
 * A service-specific customization exists for Amazon S3, which doesn't wrap the Error
 * object in the response.
 *
 * TODO: Build an XmlIndex to handle pre-computing resolved values for names, namespaces, and more.
 *
 * @see XmlShapeSerVisitor
 * @see XmlShapeDeserVisitor
 * @see XmlMemberSerVisitor
 * @see XmlMemberDeserVisitor
 * @see AwsProtocolUtils
 * @see <a href="https://awslabs.github.io/smithy/spec/http.html">Smithy HTTP protocol bindings.</a>
 * @see <a href="https://awslabs.github.io/smithy/spec/xml.html">Smithy XML traits.</a>
 */
final class AwsRestXml extends HttpBindingProtocolGenerator {

    AwsRestXml() {
        super(true);
    }

    @Override
    protected String getDocumentContentType() {
        return "application/xml";
    }

    @Override
    protected Format getDocumentTimestampFormat() {
        return Format.DATE_TIME;
    }

    @Override
    public String getName() {
        return "aws.rest-xml";
    }

    @Override
    protected void generateDocumentBodyShapeSerializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new XmlShapeSerVisitor(context));
    }

    @Override
    protected void generateDocumentBodyShapeDeserializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new XmlShapeDeserVisitor(context));
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);

        TypeScriptWriter writer = context.getWriter();
        writer.addDependency(AwsDependency.XML_BUILDER);

        // Include an XML body parser used to deserialize documents from HTTP responses.
        writer.addImport("SerdeContext", "__SerdeContext", "@aws-sdk/types");
        writer.addDependency(AwsDependency.XML_PARSER);
        writer.addDependency(AwsDependency.XML_PARSER_TYPES);
        writer.addImport("parse", "pixlParse", "pixl-xml");
        writer.openBlock("const parseBody = (streamBody: any, context: __SerdeContext): any => {", "};", () -> {
            writer.openBlock("return collectBodyString(streamBody, context).then(encoded => {", "});", () -> {
                writer.openBlock("if (encoded.length) {", "}", () -> {
                    writer.write("return pixlParse(encoded);");
                });
                writer.write("return {};");
            });
        });

        writer.write("");

        // Generate a function that handles the complex rules around deserializing
        // an error code from a rest-xml error.
        SymbolReference responseType = getApplicationProtocol().getResponseType();
        writer.openBlock("const loadRestXmlErrorCode = (\n"
                       + "  output: $T,\n"
                       + "  data: any\n"
                       + "): string => {", "};", responseType, () -> {
            // Start building the location that contains the error code.
            StringBuilder locationBuilder = new StringBuilder("data.");
            // Some services, S3 for example, don't wrap the Error object in the response.
            if (usesWrappedErrorResponse(context)) {
                locationBuilder.append("Error.");
            }
            locationBuilder.append("Code");

            // Attempt to fetch the error code from the specific location.
            String errorCodeLocation = locationBuilder.toString();
            writer.openBlock("if ($L !== undefined) {", "}", errorCodeLocation, () -> {
                writer.write("return $L;", errorCodeLocation);
            });

            // Default a 404 status code to the NotFound code.
            writer.openBlock("if (output.statusCode == 404) {", "}", () -> writer.write("return 'NotFound';"));

            // Default to an UnknownError code.
            writer.write("return 'UnknownError';");
        });
        writer.write("");
    }

    private boolean usesWrappedErrorResponse(GenerationContext context) {
        return context.getService().getTrait(ServiceTrait.class)
                .map(trait -> !trait.getSdkId().equals("S3"))
                .orElse(true);
    }

    @Override
    protected void writeDefaultHeaders(GenerationContext context, OperationShape operation) {
        super.writeDefaultHeaders(context, operation);
        AwsProtocolUtils.generateUnsignedPayloadSigV4Header(context, operation);
    }

    @Override
    protected void serializeInputDocument(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();

        // Start with the XML declaration.
        writer.write("body = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\";");

        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");
        writer.write("const bodyNode = new __XmlNode($S);", operation.getId().getName());

        // Always add @xmlNamespace value of the service to the root node, since we're
        // creating a wrapper node not based on a structure.
        AwsProtocolUtils.writeXmlNamespace(context, context.getService(), "bodyNode");

        XmlShapeSerVisitor shapeSerVisitor = new XmlShapeSerVisitor(context);

        for (HttpBinding binding : documentBindings) {
            MemberShape memberShape = binding.getMember();
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(memberShape);

            String inputLocation = "input." + memberName;
            writer.openBlock("if ($L !== undefined) {", "}", inputLocation, () -> {
                shapeSerVisitor.serializeNamedMember(context, memberName, memberShape, () -> inputLocation);
            });
        }

        // Append the generated XML to the body.
        writer.write("body += bodyNode.toString();");
    }

    @Override
    protected void serializeInputPayload(
            GenerationContext context,
            OperationShape operation,
            HttpBinding payloadBinding
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();

        MemberShape member = payloadBinding.getMember();
        String memberName = symbolProvider.toMemberName(member);

        writer.write("let contents: any;");

        // Generate an if statement to set the body node if the member is set.
        writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
            Shape target = context.getModel().expectShape(member.getTarget());
            writer.write("contents = $L;",
                    getInputValue(context, Location.PAYLOAD, "input." + memberName, member, target));

            // Structure and Union payloads will serialize as XML documents via XmlNode.
            if (target instanceof StructureShape || target instanceof UnionShape) {
                // Start with the XML declaration.
                writer.write("body = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\";");

                // Add @xmlNamespace value of the service to the root structure if one doesn't
                // exist on the target we're serializing.
                if (!target.hasTrait(XmlNamespaceTrait.class)) {
                    AwsProtocolUtils.writeXmlNamespace(context, context.getService(), "contents");
                }

                // Append the generated XML to the body.
                writer.write("body += contents.toString();");
            } else {
                // Strings and blobs (streaming or not) will not need any modification.
                writer.write("body = contents;");
            }
        });
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        // Outsource error code parsing since it's complex for this protocol.
        writer.write("errorCode = loadRestXmlErrorCode(output, parsedOutput.body);");
    }

    @Override
    protected void deserializeOutputDocument(
            GenerationContext context,
            Shape operationOrError,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        XmlShapeDeserVisitor shapeDeserVisitor = new XmlShapeDeserVisitor(context);

        for (HttpBinding binding : documentBindings) {
            MemberShape memberShape = binding.getMember();
            // The name of the member to get from the output shape.
            String memberName = symbolProvider.toMemberName(memberShape);

            shapeDeserVisitor.deserializeNamedStructureMember(context, memberName, memberShape, () -> "data");
        }
    }
}
