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
import java.util.TreeSet;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.knowledge.NeighborProviderIndex;
import software.amazon.smithy.model.neighbor.Walker;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeVisitor;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;

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
 * @see DocumentMemberDeserVisitor
 * @see <a href="https://awslabs.github.io/smithy/spec/http.html">Smithy HTTP protocol bindings.</a>
 */
abstract class RestJsonProtocolGenerator extends HttpBindingProtocolGenerator {

    @Override
    protected TimestampFormatTrait.Format getDocumentTimestampFormat() {
        return TimestampFormatTrait.Format.EPOCH_SECONDS;
    }

    @Override
    protected void generateDocumentShapeSerializers(GenerationContext context, Set<Shape> shapes) {
        generateDocumentShapeSerde(context, shapes, new JsonShapeSerVisitor(context));
    }

    @Override
    protected void generateDocumentShapeDeserializers(GenerationContext context, Set<Shape> shapes) {
        generateDocumentShapeSerde(context, shapes, new JsonShapeDeserVisitor(context));
    }

    private void generateDocumentShapeSerde(GenerationContext context, Set<Shape> shapes, ShapeVisitor<Void> visitor) {
        // Walk all the shapes within those in the document and generate for them as well.
        Walker shapeWalker = new Walker(context.getModel().getKnowledge(NeighborProviderIndex.class).getProvider());
        Set<Shape> shapesToDeserialize = new TreeSet<>(shapes);
        shapes.forEach(shape -> shapesToDeserialize.addAll(shapeWalker.walkShapes(shape)));
        shapesToDeserialize.forEach(shape -> shape.accept(visitor));
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);
        TypeScriptWriter writer = context.getWriter();

        // Include a JSON body parser used to deserialize documents from HTTP responses.
        writer.addImport("SerdeContext", "SerdeContext", "@aws-sdk/types");
        writer.openBlock("const parseBody = (streamBody: any, context: SerdeContext): any => {", "};", () -> {
            writer.openBlock("return context.streamCollector(streamBody).then((body: any) => {", "});", () -> {
                writer.write("const encoded = context.utf8Encoder(body);");
                writer.openBlock("if (encoded.length) {", "}", () -> {
                    writer.write("return JSON.parse(encoded);");
                });
                writer.write("return {};");
            });
        });

        writer.write("");
    }

    @Override
    public void serializeInputDocument(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();

        writer.write("let bodyParams: any = {};");
        for (HttpBinding binding : documentBindings) {
            MemberShape member = binding.getMember();
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(member);
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = binding.getMember().getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElseGet(binding::getLocationName);
            Shape target = context.getModel().getShapeIndex().getShape(member.getTarget()).get();

            // Generate an if statement to set the bodyParam if the member is set.
            writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
                writer.write("bodyParams['$L'] = $L;", locationName,
                        target.accept(getMemberSerVisitor(context, "input." + memberName)));
            });
        }

        writer.write("body = JSON.stringify(bodyParams);");
    }

    private DocumentMemberSerVisitor getMemberSerVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberSerVisitor(context, dataSource, getDocumentTimestampFormat());
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("errorCode = output.headers[\"x-amzn-errortype\"].split(':')[0];");
    }

    @Override
    public void deserializeOutputDocument(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        TypeScriptWriter writer = context.getWriter();
        SymbolProvider symbolProvider = context.getSymbolProvider();

        for (HttpBinding binding : documentBindings) {
            Shape target = context.getModel().getShapeIndex().getShape(binding.getMember().getTarget()).get();
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(binding.getMember());
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = binding.getMember().getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElseGet(binding::getLocationName);
            writer.openBlock("if (data.$L !== undefined) {", "}", locationName, () -> {
                writer.write("contents.$L = $L;", memberName,
                        target.accept(getMemberDeserVisitor(context, "data." + locationName)));
            });
        }
    }

    private DocumentMemberDeserVisitor getMemberDeserVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberDeserVisitor(context, dataSource, getDocumentTimestampFormat());
    }
}
