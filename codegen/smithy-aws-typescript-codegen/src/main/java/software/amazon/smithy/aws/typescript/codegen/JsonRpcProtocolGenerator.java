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
import java.util.TreeSet;
import software.amazon.smithy.model.knowledge.NeighborProviderIndex;
import software.amazon.smithy.model.neighbor.Walker;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeVisitor;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.HttpRpcProtocolGenerator;

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
 */
abstract class JsonRpcProtocolGenerator extends HttpRpcProtocolGenerator {

    protected Format getDocumentTimestampFormat() {
        return Format.EPOCH_SECONDS;
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
        JsonProtocolUtils.generateParseBody(context);
    }

    @Override
    protected void serializeInputDocument(
            GenerationContext context,
            OperationShape operation,
            StructureShape inputStructure
    ) {
        TypeScriptWriter writer = context.getWriter();

        // Input documents are wrapped in an input shape named wrapper, build that.
        writer.openBlock("const wrappedBody: any = {", "};", () -> {
            writer.write("$L: $L,", inputStructure.getId().getName(),
                    inputStructure.accept(getMemberSerVisitor(context, "input")));
        });
        writer.write("body = JSON.stringify(wrappedBody);");
    }

    private DocumentMemberSerVisitor getMemberSerVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberSerVisitor(context, dataSource, getDocumentTimestampFormat());
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("const errorTypeParts: String = data[\"__type\"].split('#');");
        writer.write("errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];");
    }

    @Override
    protected void deserializeOutputDocument(
            GenerationContext context,
            OperationShape operation,
            StructureShape outputStructure
    ) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("contents = $L;",
                outputStructure.accept(getMemberDeserVisitor(context, "data." + outputStructure.getId().getName())));
    }

    private DocumentMemberDeserVisitor getMemberDeserVisitor(GenerationContext context, String dataSource) {
        return new JsonMemberDeserVisitor(context, dataSource, getDocumentTimestampFormat());
    }
}
