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
import java.util.Map;
import java.util.TreeMap;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.knowledge.HttpBinding.Location;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.ShapeIndex;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;

public class AwsRestJson1_1 extends HttpBindingProtocolGenerator {

    @Override
    public String getName() {
        return "aws.rest-json-1.1";
    }

    @Override
    protected String getDocumentContentType() {
        return "application/x-amz-json-1.1";
    }

    @Override
    protected Format getDocumentTimestampFormat() {
        return Format.EPOCH_SECONDS;
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);

        TypeScriptWriter writer = context.getWriter();

        writer.addImport("SerdeContext", "SerdeContext", "@aws-sdk/types");
        writer.openBlock("const parseBody = (streamBody: any, context: SerdeContext): any => {", "};",
                () -> {
                    writer.openBlock("return context.streamCollector(streamBody).then((body: any) => {", "});", () -> {
                        writer.write("return JSON.parse(context.utf8Encoder(body));");
                    });
                });

        writer.write("");
    }

    @Override
    protected void serializeDocument(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();

        writer.write("let bodyParams: any = {};");
        for (HttpBinding binding : documentBindings) {
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(binding.getMember());
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = binding.getMember().getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElseGet(binding::getLocationName);
            writeDocumentStructureMemberSerialization(context, memberName, locationName, binding.getMember());
        }

        writer.write("body = JSON.stringify(bodyParams);");
    }

    @Override
    protected void serializeDocumentStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("let bodyParams: any = {};");
        // Use a TreeMap to sort the members.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = memberShape.getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElse(memberName);
            writeDocumentStructureMemberSerialization(context, memberName, locationName, memberShape);
        });
        writer.write("return bodyParams;");
    }

    private void writeDocumentStructureMemberSerialization(
            GenerationContext context,
            String memberName,
            String locationName,
            MemberShape member
    ) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(member.getTarget()).get();

        // Generate an if statement to set the bodyParam if the member is set.
        writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
            writer.write("bodyParams['$L'] = $L;", locationName,
                    // Dispatch to the input value provider for any additional handling.
                    getInputValue(context, Location.DOCUMENT, "input." + memberName, member, target));
        });
    }

    @Override
    protected void serializeDocumentCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getMember().getTarget()).get();

        // Dispatch to the input value provider for any additional handling.
        writer.openBlock("return (input || []).map(entry =>", ");", () -> {
            writer.write(getInputValue(context, Location.DOCUMENT, "entry", shape.getMember(), target));
        });
    }

    @Override
    protected void serializeDocumentMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getValue().getTarget()).get();

        // Get the right serialization for each entry in the map. Undefined
        // inputs won't have this serializer invoked.
        writer.write("let mapParams: any = {};");
        writer.openBlock("Object.keys(input).forEach(key => {", "});", () -> {
            writer.write("mapParams[key] = $L;",
                    // Dispatch to the input value provider for any additional handling.
                    getInputValue(context, Location.DOCUMENT, "input[key]", shape.getValue(), target));
        });
        writer.write("return mapParams;");
    }

    @Override
    protected void serializeDocumentUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        ShapeIndex index = context.getModel().getShapeIndex();

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("return $L.visit(input, {", "});", shape.getId().getName(), () -> {
            // Use a TreeMap to sort the members.
            Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
            members.forEach((memberName, memberShape) -> {
                    Shape target = index.getShape(memberShape.getTarget()).get();
                    // Dispatch to the input value provider for any additional handling.
                    writer.write("$L: value => $L,", memberName,
                            getInputValue(context, Location.DOCUMENT, "value", memberShape, target));
                });
            writer.write("_: value => value");
        });
    }

    @Override
    protected void deserializeDocument(
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
                        // Dispatch to the output value provider for any additional handling.
                        getOutputValue(context, Location.DOCUMENT, "data." + locationName,
                                binding.getMember(), target));
            });
        }
    }

    @Override
    protected void writeErrorDeserializationDispatcher(
            GenerationContext context,
            List<ShapeId> errors,
            String unknownErrorNamespace
    ) {
        TypeScriptWriter writer = context.getWriter();
        SymbolProvider symbolProvider = context.getSymbolProvider();

        writer.write("let errorCode: String = output.headers[\"x-amzn-errortype\"].split(':')[0];");
        writer.openBlock("switch (errorCode) {", "}", () -> {
            // Generate the case statement for each error, invoking the specific deserializer.
            errors.forEach(errorId -> {
                Shape error = context.getModel().getShapeIndex().getShape(errorId).get();
                Symbol symbol = symbolProvider.toSymbol(error);
                String methodName = ProtocolGenerator.getDeserFunctionName(symbol, getName());
                writer.openBlock("case $S:\ncase $S:", "  break;", errorId.getName(), errorId.toString(), () -> {
                    // Dispatch to the error deserialization function.
                    writer.write("response = $L(data, context);", methodName);
                });
            });

            // Build a generic error the best we can for ones we don't know about.
            writer.openBlock("default:", "", () -> {
                writer.write("errorCode = errorCode || \"UnknownError\";");
                writer.openBlock("response = {", "};", () -> {
                    writer.write("__type: `$L#$${errorCode}`,", unknownErrorNamespace);
                    writer.write("$$name: errorCode,");
                    writer.write("$$fault: \"client\",");
                });
            });
        });
    }

    @Override
    protected void deserializeError(GenerationContext context, StructureShape shape) {
        // Use a TreeMap to sort the members.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = memberShape.getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElse(memberName);
            writeDocumentStructureMemberDeserialization(context, memberName, locationName, memberShape);
        });
    }

    @Override
    protected void deserializeDocumentStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        // Prepare the document contents structure.
        writer.openBlock("let contents: any = {", "};", () -> {
            writer.write("$$namespace: $S,", shape.getId().getNamespace());
            writer.write("$$name: $S", shape.getId().getName());
        });
        // Use a TreeMap to sort the members.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = memberShape.getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElse(memberName);
            writeDocumentStructureMemberDeserialization(context, memberName, locationName, memberShape);
        });

        writer.write("return contents;");
    }

    private void writeDocumentStructureMemberDeserialization(
            GenerationContext context,
            String memberName,
            String locationName,
            MemberShape member
    ) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(member.getTarget()).get();

        // Generate an if statement to set the bodyParam if the member is set.
        writer.openBlock("if (output.$L !== undefined) {", "}", locationName, () -> {
            writer.write("contents.$L = $L;", memberName,
                    // Dispatch to the output value provider for any additional handling.
                    getOutputValue(context, Location.DOCUMENT, "output." + locationName, member, target));
        });
    }

    @Override
    protected void deserializeDocumentCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getMember().getTarget()).get();

        // Dispatch to the output value provider for any additional handling.
        writer.openBlock("return (output || []).map((entry: any) =>", ");", () -> {
            writer.write(getOutputValue(context, Location.DOCUMENT, "entry", shape.getMember(), target));
        });
    }

    @Override
    protected void deserializeDocumentMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getValue().getTarget()).get();

        // Get the right serialization for each entry in the map. Undefined
        // outputs won't have this deserializer invoked.
        writer.write("let mapParams: any = {};");
        writer.openBlock("Object.keys(output).forEach(key => {", "});", () -> {
            writer.write("mapParams[key] = $L;",
                    // Dispatch to the output value provider for any additional handling.
                    getOutputValue(context, Location.DOCUMENT, "output[key]", shape.getValue(), target));
        });
        writer.write("return mapParams;");
    }

    @Override
    protected void deserializeDocumentUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        ShapeIndex index = context.getModel().getShapeIndex();

        // Check for any known union members and return when we find one.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            Shape target = index.getShape(memberShape.getTarget()).get();
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = memberShape.getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElse(memberName);
            writer.openBlock("if (output.$L !== undefined) {", "}", locationName, () -> {
                writer.openBlock("return {", "};", () -> {
                    // Dispatch to the output value provider for any additional handling.
                    writer.write("$L: $L", memberName, getOutputValue(context, Location.DOCUMENT,
                            "output." + locationName, memberShape, target));
                });
            });
        });
        // Or write to the unknown member the element in the output.
        writer.write("return { $$unknown: output[Object.keys(output)[0]] };");
    }
}
