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

import java.util.Set;
import software.amazon.smithy.aws.traits.protocols.Ec2QueryNameTrait;
import software.amazon.smithy.aws.traits.protocols.Ec2QueryTrait;
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.Trait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpRpcProtocolGenerator;
import software.amazon.smithy.typescript.codegen.schema.SchemaTraitExtension;
import software.amazon.smithy.typescript.codegen.util.StringStore;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Handles generating the aws.ec2 protocol for services. It handles reading and
 * writing from document bodies, including generating any functions needed for
 * performing serde.
 *
 * This builds on the foundations of the {@link HttpRpcProtocolGenerator} to handle
 * standard components of the HTTP requests and responses.
 *
 * @see Ec2ShapeSerVisitor
 * @see XmlShapeDeserVisitor
 * @see QueryMemberSerVisitor
 * @see XmlMemberDeserVisitor
 * @see AwsProtocolUtils
 * @see <a href="https://smithy.io/2.0/spec/protocol-traits.html#xml-bindings">Smithy XML traits.</a>
 * @see <a href="https://smithy.io/2.0/aws/protocols/aws-ec2-query-protocol.html#aws-protocols-ec2queryname-trait">Smithy EC2 Query Name trait.</a>
 */
@SmithyInternalApi
final class AwsEc2 extends HttpRpcProtocolGenerator {
    static {
        SchemaTraitExtension.INSTANCE.add(
            Ec2QueryNameTrait.ID,
            (Trait trait) -> {
                if (trait instanceof Ec2QueryNameTrait ec2QueryName) {
                    return """
                        `%s`
                        """.formatted(ec2QueryName.getValue());
                }
                return "";
            }
        );
    }

    AwsEc2() {
        super(true);
    }

    @Override
    protected String getOperationPath(GenerationContext context, OperationShape operationShape) {
        return "/";
    }

    @Override
    public ShapeId getProtocol() {
        return Ec2QueryTrait.ID;
    }

    @Override
    public String getName() {
        return "aws.ec2";
    }

    @Override
    protected String getDocumentContentType() {
        return "application/x-www-form-urlencoded";
    }

    @Override
    protected void generateDocumentBodyShapeSerializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new Ec2ShapeSerVisitor(context));
    }

    @Override
    protected void generateDocumentBodyShapeDeserializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new XmlShapeDeserVisitor(context));
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);
        AwsProtocolUtils.generateXmlParseBody(context);
        AwsProtocolUtils.generateXmlParseErrorBody(context);
        AwsProtocolUtils.generateBuildFormUrlencodedString(context);
        AwsProtocolUtils.addItempotencyAutofillImport(context);

        TypeScriptWriter writer = context.getWriter();

        // Generate a function that handles the complex rules around deserializing
        // an error code from an xml error body.
        SymbolReference responseType = getApplicationProtocol().getResponseType();
        writer.openBlock("const loadEc2ErrorCode = (\n"
                       + "  output: $T,\n"
                       + "  data: any\n"
                       + "): string | undefined => {", "};", responseType, () -> {
            // Attempt to fetch the error code from the specific location.
            String errorCodeCheckLocation = getErrorBodyLocation(context, "data") + "?.Code";
            String errorCodeAccessLocation = getErrorBodyLocation(context, "data") + ".Code";
            writer.openBlock("if ($L !== undefined) {", "}", errorCodeCheckLocation, () -> {
                writer.write("return $L;", errorCodeAccessLocation);
            });

            // Default a 404 status code to the NotFound code.
            writer.openBlock("if (output.statusCode == 404) {", "}", () -> writer.write("return 'NotFound';"));
        });
        writer.write("");
        writer.write(
            context.getStringStore().flushVariableDeclarationCode()
        );
    }

    @Override
    protected String getErrorBodyLocation(GenerationContext context, String outputLocation) {
        return outputLocation + ".Errors.Error";
    }

    @Override
    protected void writeRequestHeaders(GenerationContext context, OperationShape operation) {
        TypeScriptWriter writer = context.getWriter();
        if (AwsProtocolUtils.includeUnsignedPayloadSigV4Header(operation)) {
            writer.openBlock("const headers: __HeaderBag = { ", " }", () -> {
                AwsProtocolUtils.generateUnsignedPayloadSigV4Header(context, operation);
                writer.write("...SHARED_HEADERS");
            });
        } else {
            writer.write("const headers: __HeaderBag = SHARED_HEADERS;");
        }
    }

    @Override
    protected void serializeInputDocument(
            GenerationContext context,
            OperationShape operation,
            StructureShape inputStructure
    ) {
        TypeScriptWriter writer = context.getWriter();

        // Set the form encoded string.
        writer.openBlock("body = buildFormUrlencodedString({", "});", () -> {
            // Gather all the explicit input entries.
            writer.write("...$L,",
                    inputStructure.accept(new QueryMemberSerVisitor(context, "input", Format.DATE_TIME)));
            // Set the protocol required values.
            ServiceShape serviceShape = context.getService();
            StringStore stringStore = context.getStringStore();
            writer.write(
                "[" + stringStore.var("Action") + "]: $L,",
                stringStore.var(operation.getId().getName(serviceShape))
            );
            writer.write(
                "[" + stringStore.var("Version") + "]: $L,",
                stringStore.var(serviceShape.getVersion())
            );
        });
    }

    @Override
    protected boolean writeUndefinedInputBody(GenerationContext context, OperationShape operation) {
        return AwsProtocolUtils.generateUndefinedQueryInputBody(context, operation);
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        // Outsource error code parsing since it's complex for this protocol.
        writer.write("const errorCode = loadEc2ErrorCode(output, parsedOutput.body);");
    }

    @Override
    protected void deserializeOutputDocument(
            GenerationContext context,
            OperationShape operation,
            StructureShape outputStructure
    ) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("contents = $L;",
                outputStructure.accept(new XmlMemberDeserVisitor(context, "data", Format.DATE_TIME)));
    }

    @Override
    public void generateProtocolTests(GenerationContext context) {
        AwsProtocolUtils.generateProtocolTests(this, context);
    }
}
