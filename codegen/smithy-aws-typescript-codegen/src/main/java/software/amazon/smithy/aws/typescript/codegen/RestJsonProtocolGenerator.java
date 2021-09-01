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
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.IdempotencyTokenTrait;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.StreamingTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Handles general components across the AWS JSON protocols that have HTTP bindings.
 * It handles reading and writing from document bodies, including generating any
 * functions needed for performing serde.
 *
 * This builds on the foundations of the {@link HttpBindingProtocolGenerator} to handle
 * components of binding to HTTP requests and responses.
 *
 * @see JsonShapeSerVisitor
 * @see JsonShapeDeserVisitor
 * @see JsonMemberSerVisitor
 * @see JsonMemberDeserVisitor
 * @see AwsProtocolUtils
 * @see <a href="https://awslabs.github.io/smithy/spec/http.html">Smithy HTTP protocol bindings.</a>
 */
@SmithyInternalApi
abstract class RestJsonProtocolGenerator extends HttpBindingProtocolGenerator {
    /**
     * Creates a AWS JSON RPC protocol generator.
     */
    RestJsonProtocolGenerator() {
        super(true);
    }

    @Override
    protected TimestampFormatTrait.Format getDocumentTimestampFormat() {
        return TimestampFormatTrait.Format.EPOCH_SECONDS;
    }

    @Override
    protected void generateDocumentBodyShapeSerializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new JsonShapeSerVisitor(context));
    }

    @Override
    protected void generateDocumentBodyShapeDeserializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new JsonShapeDeserVisitor(context));
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);
        AwsProtocolUtils.generateJsonParseBody(context);
        AwsProtocolUtils.addItempotencyAutofillImport(context);

        TypeScriptWriter writer = context.getWriter();
        writer.addUseImports(getApplicationProtocol().getResponseType());
        writer.write(IoUtils.readUtf8Resource(getClass(), "load-json-error-code-stub.ts"));
    }

    @Override
    protected void writeDefaultInputHeaders(GenerationContext context, OperationShape operation) {
        AwsProtocolUtils.generateUnsignedPayloadSigV4Header(context, operation);
    }

    @Override
    protected void writeDefaultErrorHeaders(GenerationContext context, StructureShape error) {
        context.getWriter().write("'x-amzn-errortype': $S,", error.getId().getName());
    }

    @Override
    protected void serializeInputDocumentBody(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        // Short circuit when we have no bindings.
        TypeScriptWriter writer = context.getWriter();
        if (documentBindings.isEmpty()) {
            writer.write("body = \"\";");
            return;
        }
        serializeDocumentBody(context, documentBindings);
    }

    @Override
    protected void serializeOutputDocumentBody(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        // Short circuit when we have no bindings.
        TypeScriptWriter writer = context.getWriter();
        if (documentBindings.isEmpty()) {
            writer.write("body = \"{}\";");
            return;
        }
        serializeDocumentBody(context, documentBindings);
    }

    @Override
    protected void serializeErrorDocumentBody(
            GenerationContext context,
            StructureShape error,
            List<HttpBinding> documentBindings
    ) {
        // Short circuit when we have no bindings.
        TypeScriptWriter writer = context.getWriter();
        if (documentBindings.isEmpty()) {
            writer.write("body = \"{}\";");
            return;
        }
        serializeDocumentBody(context, documentBindings);
    }

    private void serializeDocumentBody(GenerationContext context, List<HttpBinding> documentBindings) {
        TypeScriptWriter writer = context.getWriter();
        SymbolProvider symbolProvider = context.getSymbolProvider();

        writer.openBlock("body = JSON.stringify({", "});", () -> {
            for (HttpBinding binding : documentBindings) {
                MemberShape memberShape = binding.getMember();
                // The name of the member to get from the input shape.
                String memberName = symbolProvider.toMemberName(memberShape);
                String inputLocation = "input." + memberName;
                // Use the jsonName trait value if present, otherwise use the member name.
                String locationName = memberShape.getTrait(JsonNameTrait.class)
                        .map(JsonNameTrait::getValue)
                        .orElseGet(binding::getLocationName);
                Shape target = context.getModel().expectShape(memberShape.getTarget());

                // Handle @timestampFormat on members not just the targeted shape.
                String valueProvider = memberShape.hasTrait(TimestampFormatTrait.class)
                        ? AwsProtocolUtils.getInputTimestampValueProvider(context, memberShape,
                                getDocumentTimestampFormat(), inputLocation)
                        : target.accept(getMemberSerVisitor(context, inputLocation));

                if (memberShape.hasTrait(IdempotencyTokenTrait.class)) {
                    writer.write("'$L': $L ?? generateIdempotencyToken(),", locationName, valueProvider);
                } else {
                    writer.write("...($1L !== undefined && $1L !== null &&{ $2S: $3L }),",
                            inputLocation, locationName, valueProvider);
                }
            }
        });
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
        TypeScriptWriter writer = context.getWriter();
        MemberShape payloadMember = payloadBinding.getMember();
        Shape target = context.getModel().expectShape(payloadMember.getTarget());

        // When payload target is a structure or union but payload is not a stream, default
        // to an empty JSON body instead of an undefined body and make sure any structure or union
        // content ends up as a JSON string.
        if (target instanceof StructureShape
                || (target instanceof UnionShape && !target.hasTrait(StreamingTrait.class))
        ) {
            writer.openBlock("if (body === undefined) {", "}", () -> writer.write("body = {};"));
            writer.write("body = JSON.stringify(body);");
        } else if (target instanceof DocumentShape) {
            // Contents of documents need to be JSON encoded as well.
            writer.write("body = JSON.stringify(body);");
        }
    }

    private DocumentMemberSerVisitor getMemberSerVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberSerVisitor(context, dataSource, getDocumentTimestampFormat());
    }

    protected boolean shouldWriteDefaultOutputBody(GenerationContext context, OperationShape operation) {
        // Operations that have any defined output shape should always send a default body.
        return operation.getOutput().isPresent();
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        // Outsource error code parsing since it's complex for this protocol.
        writer.write("errorCode = loadRestJsonErrorCode(output, parsedOutput.body);");
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
        TypeScriptWriter writer = context.getWriter();
        SymbolProvider symbolProvider = context.getSymbolProvider();

        for (HttpBinding binding : documentBindings) {
            Shape target = context.getModel().expectShape(binding.getMember().getTarget());
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(binding.getMember());
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = binding.getMember().getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElseGet(binding::getLocationName);
            writer.openBlock("if (data.$L !== undefined && data.$L !== null) {", "}", locationName, locationName,
                    () -> {
                writer.write("contents.$L = $L;", memberName,
                        target.accept(getMemberDeserVisitor(context, binding.getMember(), "data." + locationName)));
            });
        }
    }

    @Override
    protected HttpBinding deserializeInputPayload(
            GenerationContext context,
            OperationShape operation,
            HttpBinding payloadBinding
    ) {
        HttpBinding returnedBinding = super.deserializeInputPayload(context, operation, payloadBinding);
        readPayload(context, payloadBinding);
        return returnedBinding;
    }

    @Override
    protected HttpBinding deserializeOutputPayload(
            GenerationContext context,
            OperationShape operation,
            HttpBinding payloadBinding
    ) {
        HttpBinding returnedBinding = super.deserializeOutputPayload(context, operation, payloadBinding);
        readPayload(context, payloadBinding);
        return returnedBinding;
    }

    @Override
    protected HttpBinding deserializeErrorPayload(
            GenerationContext context,
            StructureShape error,
            HttpBinding payloadBinding
    ) {
        HttpBinding returnedBinding = super.deserializeErrorPayload(context, error, payloadBinding);
        readPayload(context, payloadBinding);
        return returnedBinding;
    }

    protected void readPayload(
            GenerationContext context,
            HttpBinding payloadBinding
    ) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(payloadBinding.getMember().getTarget());

        // Decode the body from a JSON string.
        if (target instanceof DocumentShape) {
            writer.write("contents.$L = JSON.parse(data);", payloadBinding.getMemberName());
        }
    }

    private DocumentMemberDeserVisitor getMemberDeserVisitor(GenerationContext context,
                                                             MemberShape memberShape,
                                                             String dataSource) {
        return new JsonMemberDeserVisitor(context, memberShape, dataSource, getDocumentTimestampFormat());
    }

    @Override
    public void generateProtocolTests(GenerationContext context) {
        AwsProtocolUtils.generateProtocolTests(this, context);
    }

    @Override
    protected boolean requiresNumericEpochSecondsInPayload() {
        return true;
    }
}
