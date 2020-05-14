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
        writer.write(IoUtils.readUtf8Resource(getClass(), "load-rest-json-error-code-stub.ts"));
    }

    @Override
    protected void writeDefaultHeaders(GenerationContext context, OperationShape operation) {
        super.writeDefaultHeaders(context, operation);
        AwsProtocolUtils.generateUnsignedPayloadSigV4Header(context, operation);
    }

    @Override
    public void serializeInputDocument(
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
                    writer.write("...($L !== undefined && { '$L': $L }),", inputLocation, locationName, valueProvider);
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
        // We want the standard serialization, but need to alter it to JSON.
        super.serializeInputPayload(context, operation, payloadBinding);

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
        }
    }

    private DocumentMemberSerVisitor getMemberSerVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberSerVisitor(context, dataSource, getDocumentTimestampFormat());
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        // Outsource error code parsing since it's complex for this protocol.
        writer.write("errorCode = loadRestJsonErrorCode(output, parsedOutput.body);");
    }

    @Override
    public void deserializeOutputDocument(
            GenerationContext context,
            Shape operationOrError,
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
                        target.accept(getMemberDeserVisitor(context, "data." + locationName)));
            });
        }
    }

    private DocumentMemberDeserVisitor getMemberDeserVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberDeserVisitor(context, dataSource, getDocumentTimestampFormat());
    }
}
