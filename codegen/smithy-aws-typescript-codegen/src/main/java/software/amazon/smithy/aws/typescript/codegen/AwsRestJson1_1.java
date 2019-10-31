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
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.knowledge.HttpBinding.Location;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeIndex;
import software.amazon.smithy.model.shapes.SimpleShape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;

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
            writeDocumentStructureMemberSerialization(context, operation,
                    memberName, locationName, binding.getMember());
        }

        writer.write("body = JSON.stringify(bodyParams);");
    }

    @Override
    protected void serializeDocumentStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("let bodyParams: any = {};");
        shape.getAllMembers().forEach((memberName, memberShape) -> {
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = memberShape.getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElse(memberName);
            writeDocumentStructureMemberSerialization(context, shape, memberName, locationName, memberShape);
        });
        writer.write("return bodyParams;");
    }

    private void writeDocumentStructureMemberSerialization(
            GenerationContext context,
            Shape container,
            String memberName,
            String locationName,
            MemberShape member
    ) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(member.getTarget()).get();

        // Generate an if statement to set the bodyParam if the member is set.
        writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
            writer.write("bodyParams['$L'] = $L;", locationName,
                    getInputValue(context, Location.DOCUMENT, container, member, target));
        });
    }

    @Override
    protected void serializeDocumentCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getMember().getTarget()).get();

        // Validate we have input, then get the right serialization for the member target.
        writer.write("input &&");
        writer.openBlock("input.map(entry =>", ");", () -> {
            writer.write(getInputValue(context, Location.DOCUMENT, shape, shape.getMember(), target));
        });
    }

    @Override
    protected void serializeDocumentMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().getShapeIndex().getShape(shape.getValue().getTarget()).get();

        // Validate we have input, then get the right serialization for the map value.
        writer.write("input.name &&");
        writer.openBlock("input.value && {", "};", () -> {
            writer.write("name: input.name,");
            writer.write("value: $L", getInputValue(context, Location.DOCUMENT, shape, shape.getValue(), target));
        });
    }

    // TODO Collection cleanup point
    // This, and the location it is invoked, can be cleaned up if/when a
    // centralized way to check for and/or handle these differences is built.
    private boolean isSimpleCollection(ShapeIndex index, Shape shape) {
        if (shape instanceof CollectionShape) {
            Shape target = index.getShape(((CollectionShape) shape).getMember().getTarget()).get();
            if (target instanceof CollectionShape) {
                return isSimpleCollection(index, target);
            }
            return target instanceof SimpleShape;
        }
        return false;
    }

    @Override
    protected void serializeDocumentUnion(GenerationContext context, UnionShape shape) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();
        ShapeIndex index = context.getModel().getShapeIndex();

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("$L.visit(input, {", "});", shape.getId().getName(), () -> {
            shape.getAllMembers().forEach((name, member) -> {
                    writer.openBlock("$L: value => {", "},", symbolProvider.toMemberName(member), () -> {
                        Shape target = index.getShape(member.getTarget()).get();
                        // TODO See collection cleanup note
                        // Make sure we invoke the other serialization of union members that need it.
                        if (!(target instanceof SimpleShape) && !isSimpleCollection(index, target)) {
                            writer.write("$L;", getInputValue(context, Location.DOCUMENT, shape, member, target));
                        } else {
                            writer.write("value;");
                        }
                    });
            });
            writer.openBlock("_: value => {", "}", () -> writer.write("value;"));
        });
    }
}
