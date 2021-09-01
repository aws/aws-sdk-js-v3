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
import software.amazon.smithy.aws.traits.protocols.RestXmlTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.knowledge.HttpBinding.Location;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.StreamingTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;
import software.amazon.smithy.utils.SmithyInternalApi;

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
@SmithyInternalApi
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
    public ShapeId getProtocol() {
        return RestXmlTrait.ID;
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
        AwsProtocolUtils.generateXmlParseBody(context);
        AwsProtocolUtils.addItempotencyAutofillImport(context);

        TypeScriptWriter writer = context.getWriter();
        writer.addDependency(AwsDependency.XML_BUILDER);

        // Generate a function that handles the complex rules around deserializing
        // an error code from a rest-xml error.
        SymbolReference responseType = getApplicationProtocol().getResponseType();
        writer.openBlock("const loadRestXmlErrorCode = (\n"
                       + "  output: $T,\n"
                       + "  data: any\n"
                       + "): string => {", "};", responseType, () -> {
            // Attempt to fetch the error code from the specific location.
            String errorCodeLocation = getErrorBodyLocation(context, "data") + ".Code";
            writer.openBlock("if ($L !== undefined) {", "}", errorCodeLocation, () -> {
                writer.write("return $L;", errorCodeLocation);
            });

            // Default a 404 status code to the NotFound code.
            writer.openBlock("if (output.statusCode == 404) {", "}", () -> writer.write("return 'NotFound';"));

            // Default to an empty error code so an unmodeled exception is built.
            writer.write("return '';");
        });
        writer.write("");
    }

    @Override
    protected String getErrorBodyLocation(GenerationContext context, String outputLocation) {
        // Some services, S3 for example, don't wrap the Error object in the response.
        if (usesWrappedErrorResponse(context)) {
            return outputLocation + ".Error";
        }
        return outputLocation;
    }

    private boolean usesWrappedErrorResponse(GenerationContext context) {
        return !context.getService().expectTrait(RestXmlTrait.class).isNoErrorWrapping();
    }

    @Override
    protected void writeDefaultInputHeaders(GenerationContext context, OperationShape operation) {
        AwsProtocolUtils.generateUnsignedPayloadSigV4Header(context, operation);
    }

    @Override
    protected void serializeInputDocumentBody(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        serializeDocumentBody(context, documentBindings);
    }

    @Override
    protected void serializeOutputDocumentBody(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        serializeDocumentBody(context, documentBindings);
    }

    @Override
    protected void serializeErrorDocumentBody(
            GenerationContext context,
            StructureShape error,
            List<HttpBinding> documentBindings
    ) {
        serializeDocumentBody(context, documentBindings);
    }

    private void serializeDocumentBody(
            GenerationContext context,
            List<HttpBinding> documentBindings
    ) {
        // Short circuit when we have no bindings.
        TypeScriptWriter writer = context.getWriter();
        if (documentBindings.isEmpty()) {
            writer.write("body = \"\";");
            return;
        }

        ServiceShape serviceShape = context.getService();
        SymbolProvider symbolProvider = context.getSymbolProvider();
        ShapeId inputShapeId = documentBindings.get(0).getMember().getContainer();

        // Start with the XML declaration.
        writer.write("body = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\";");

        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        // Handle the @xmlName trait for the input shape.
        StructureShape inputShape = context.getModel().expectShape(inputShapeId, StructureShape.class);
        String nodeName = inputShape.getTrait(XmlNameTrait.class)
                .map(XmlNameTrait::getValue)
                .orElse(inputShapeId.getName(serviceShape));
        writer.write("const bodyNode = new __XmlNode($S);", nodeName);

        // Add @xmlNamespace value of the service to the root node,
        // fall back to one from the input shape.
        boolean serviceXmlns = AwsProtocolUtils.writeXmlNamespace(context, serviceShape, "bodyNode");
        if (!serviceXmlns) {
            AwsProtocolUtils.writeXmlNamespace(context, inputShape, "bodyNode");
        }

        XmlShapeSerVisitor shapeSerVisitor = new XmlShapeSerVisitor(context);

        for (HttpBinding binding : documentBindings) {
            MemberShape memberShape = binding.getMember();
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(memberShape);
            String inputLocation = "input." + memberName;

            // Handle if the member is an idempotency token that should be auto-filled.
            AwsProtocolUtils.writeIdempotencyAutofill(context, memberShape, inputLocation);

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
        super.serializeInputPayload(context, operation, payloadBinding);
        serializePayload(context, payloadBinding);
    }

    @Override
    protected void serializeOutputPayload(
            GenerationContext context,
            OperationShape operation,
            HttpBinding payloadBinding
    ) {
        super.serializeOutputPayload(context, operation, payloadBinding);
        serializePayload(context, payloadBinding);
    }

    @Override
    protected void serializeErrorPayload(
            GenerationContext context,
            StructureShape error,
            HttpBinding payloadBinding
    ) {
        super.serializeErrorPayload(context, error, payloadBinding);
        serializePayload(context, payloadBinding);
    }

    private void serializePayload(
            GenerationContext context,
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

            // XmlNode will serialize Structure and non-streaming Union payloads as XML documents.
            if (target instanceof StructureShape
                    || (target instanceof UnionShape && !target.hasTrait(StreamingTrait.class))
            ) {
                // Start with the XML declaration.
                writer.write("body = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\";");

                // Add @xmlNamespace value of the service to the root node,
                // fall back to one from the payload target.
                boolean serviceXmlns = AwsProtocolUtils.writeXmlNamespace(context, context.getService(), "contents");
                if (!serviceXmlns) {
                    AwsProtocolUtils.writeXmlNamespace(context, target, "contents");
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
    protected void deserializeInputDocumentBody(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        deserializeDocumentBody(context, documentBindings);
    }

    @Override
    protected void deserializeOutputDocumentBody(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        deserializeDocumentBody(context, documentBindings);
    }

    @Override
    protected void deserializeErrorDocumentBody(
            GenerationContext context,
            StructureShape error,
            List<HttpBinding> documentBindings
    ) {
        deserializeDocumentBody(context, documentBindings);
    }

    private void deserializeDocumentBody(
            GenerationContext context,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        XmlShapeDeserVisitor shapeVisitor = new XmlShapeDeserVisitor(context);

        for (HttpBinding binding : documentBindings) {
            MemberShape memberShape = binding.getMember();
            // Grab the target shape so we can use a member deserializer on it.
            Shape target = context.getModel().expectShape(memberShape.getTarget());
            // The name of the member to get from the output shape.
            String memberName = symbolProvider.toMemberName(memberShape);

            shapeVisitor.deserializeNamedMember(context, memberName, memberShape, "data", (dataSource, visitor) -> {
                TypeScriptWriter writer = context.getWriter();
                writer.write("contents.$L = $L;", memberName, target.accept(visitor));
            });
        }
    }

    @Override
    public void generateProtocolTests(GenerationContext context) {
        AwsProtocolUtils.generateProtocolTests(this, context);
    }

    @Override
    protected boolean requiresNumericEpochSecondsInPayload() {
        return false;
    }
}
