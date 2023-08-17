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
import software.amazon.smithy.aws.traits.protocols.AwsQueryCompatibleTrait;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.HttpRpcProtocolGenerator;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Handles general components across the AWS JSON protocols that have do not have
 * HTTP bindings. It handles reading and writing from document bodies, including
 * generating any functions needed for performing serde.
 *
 * This builds on the foundations of the {@link HttpRpcProtocolGenerator} to handle
 * standard components of the HTTP requests and responses.
 *
 * @see JsonShapeSerVisitor
 * @see JsonShapeDeserVisitor
 * @see JsonMemberSerVisitor
 * @see JsonMemberDeserVisitor
 * @see AwsProtocolUtils
 */
@SmithyInternalApi
abstract class JsonRpcProtocolGenerator extends HttpRpcProtocolGenerator {

    /**
     * Creates a AWS JSON RPC protocol generator.
     */
    JsonRpcProtocolGenerator() {
        // AWS JSON RPC protocols will attempt to parse error codes from response bodies.
        super(true);
    }

    @Override
    protected String getOperationPath(GenerationContext context, OperationShape operationShape) {
        return "/";
    }

    protected Format getDocumentTimestampFormat() {
        return Format.EPOCH_SECONDS;
    }

    @Override
    protected void generateDocumentBodyShapeSerializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes,
                // AWS JSON does not support jsonName
                new JsonShapeSerVisitor(context, (shape, name) -> name, enableSerdeElision()));
    }

    @Override
    protected void generateDocumentBodyShapeDeserializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes,
                // AWS JSON does not support jsonName
                new JsonShapeDeserVisitor(context, (shape, name) -> name, enableSerdeElision()));
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);
        AwsProtocolUtils.generateJsonParseBody(context);
        AwsProtocolUtils.generateJsonParseErrorBody(context);
        AwsProtocolUtils.addItempotencyAutofillImport(context);

        TypeScriptWriter writer = context.getWriter();
        writer.addUseImports(getApplicationProtocol().getResponseType());
        writer.write(IoUtils.readUtf8Resource(getClass(), "load-json-error-code-stub.ts"));

        if (context.getService().hasTrait(AwsQueryCompatibleTrait.class)) {
            AwsProtocolUtils.generateJsonParseBodyWithQueryHeader(context);
        }
    }

    @Override
    protected void writeRequestHeaders(GenerationContext context, OperationShape operation) {
        TypeScriptWriter writer = context.getWriter();
        ServiceShape serviceShape = context.getService();
        String operationName = operation.getId().getName(serviceShape);
        if (AwsProtocolUtils.includeUnsignedPayloadSigV4Header(operation)) {
            writer.openBlock("const headers: __HeaderBag = { ", " }", () -> {
                AwsProtocolUtils.generateUnsignedPayloadSigV4Header(context, operation);
                writer.write("...sharedHeaders($S)", operationName);
            });
        } else {
            writer.write("const headers: __HeaderBag = sharedHeaders($S)", operationName);
        }
    }

    @Override
    protected void writeSharedRequestHeaders(GenerationContext context) {
        ServiceShape serviceShape = context.getService();
        TypeScriptWriter writer = context.getWriter();
        writer.addImport("HeaderBag", "__HeaderBag", TypeScriptDependency.SMITHY_TYPES);
        String targetHeader = serviceShape.getId().getName(serviceShape) + ".${operation}";
        writer.openBlock("function sharedHeaders(operation: string): __HeaderBag { return {", "}};",
                () -> {
                    writer.write("'content-type': $S,", getDocumentContentType());
                    // AWS JSON RPC protocols use a combination of the service and operation shape names,
                    // separated by a '.' character, for the target header.
                    writer.write("'x-amz-target': `$L`,", targetHeader);
                }
        );
    }

    @Override
    protected void serializeInputDocument(
            GenerationContext context,
            OperationShape operation,
            StructureShape inputStructure
    ) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("body = JSON.stringify($L);", inputStructure.accept(getMemberSerVisitor(context, "input")));
    }

    private DocumentMemberSerVisitor getMemberSerVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberSerVisitor(context, dataSource, getDocumentTimestampFormat());
    }

    @Override
    protected boolean writeUndefinedInputBody(GenerationContext context, OperationShape operation) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("const body = '{}';");
        return true;
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        if (context.getService().hasTrait(AwsQueryCompatibleTrait.class)) {
            // Populate parsedOutput.body with 'Code' and 'Type' fields
            // "x-amzn-query-error" header is available when AwsQueryCompatibleTrait is applied to a service
            // The header value contains query error Code and Type joined by ';'
            // E.g. "MalformedInput;Sender" or "InternalFailure;Receiver"
            writer.write("populateBodyWithQueryCompatibility(parsedOutput, output.headers);");
        }

        // Outsource error code parsing since it's complex for this protocol.
        writer.write("const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);");
    }

    @Override
    protected void deserializeOutputDocument(
            GenerationContext context,
            OperationShape operation,
            StructureShape outputStructure
    ) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("contents = $L;", outputStructure.accept(getMemberDeserVisitor(context, "data")));
    }

    private DocumentMemberDeserVisitor getMemberDeserVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberDeserVisitor(context, dataSource, getDocumentTimestampFormat());
    }

    @Override
    public void generateProtocolTests(GenerationContext context) {
        AwsProtocolUtils.generateProtocolTests(this, context);
    }

    @Override
    protected boolean enableSerdeElision() {
        return true;
    }
}
