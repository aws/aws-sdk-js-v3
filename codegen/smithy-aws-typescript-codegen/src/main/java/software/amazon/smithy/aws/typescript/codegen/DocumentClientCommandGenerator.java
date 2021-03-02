/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.traits.IdempotencyTokenTrait;
import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;

final class DocumentClientCommandGenerator implements Runnable {
    static final String COMMAND_PROPERTIES_SECTION = "command_properties";
    static final String COMMAND_BODY_EXTRA_SECTION = "command_body_extra";
    static final String COMMAND_CONSTRUCTOR_SECTION = "command_constructor";

    private final Model model;
    private final OperationShape operation;
    private final SymbolProvider symbolProvider;
    private final TypeScriptWriter writer;
    private final Symbol symbol;
    private final OperationIndex operationIndex;
    private final String inputTypeName;
    private final List<MemberShape> inputMembersWithAttr;
    private final String outputTypeName;
    private final List<MemberShape> outputMembersWithAttr;

    DocumentClientCommandGenerator(
            TypeScriptSettings settings,
            Model model,
            OperationShape operation,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        this.model = model;
        settings.getService(model);
        this.operation = operation;
        this.symbolProvider = symbolProvider;
        this.writer = writer;

        symbol = symbolProvider.toSymbol(operation);
        operationIndex = OperationIndex.of(model);
        inputTypeName = DocumentClientUtils.getModifiedName(
            symbol.expectProperty("inputType", Symbol.class).getName()
        );
        inputMembersWithAttr = getStructureMembersWithAttr(operationIndex.getInput(operation));
        outputTypeName = DocumentClientUtils.getModifiedName(
            symbol.expectProperty("outputType", Symbol.class).getName()
        );
        outputMembersWithAttr = getStructureMembersWithAttr(operationIndex.getOutput(operation));
    }

    @Override
    public void run() {
        String serviceName = "DynamoDBDocumentClient";
        String configType = serviceName + "ResolvedConfig";

        // Add required imports.
        writer.addImport(configType, configType, "./" + serviceName);
        writer.addImport("ServiceInputTypes", "ServiceInputTypes", "@aws-sdk/client-dynamodb");
        writer.addImport("ServiceOutputTypes", "ServiceOutputTypes", "@aws-sdk/client-dynamodb");
        writer.addImport("Command", "$Command", "@aws-sdk/smithy-client");
        writer.addImport("Handler", "Handler", "@aws-sdk/types");
        writer.addImport("MiddlewareStack", "MiddlewareStack", "@aws-sdk/types");

        generateInputAndOutputTypes();

        String name = DocumentClientUtils.getModifiedName(symbol.getName());
        // writer.writeShapeDocs(operation);
        writer.openBlock("export class $L extends $$Command<$L, $L, $L> {", "}",
                name, inputTypeName, outputTypeName, configType, () -> {

            // Section for adding custom command properties.
            writer.write("// Start section: $L", COMMAND_PROPERTIES_SECTION);
            writer.pushState(COMMAND_PROPERTIES_SECTION).popState();
            writer.write("// End section: $L", COMMAND_PROPERTIES_SECTION);
            writer.write("");

            generateCommandConstructor();
            writer.write("");
            generateCommandMiddlewareResolver(configType);

            // Hook for adding more methods to the command.
            writer.write("// Start section: $L", COMMAND_BODY_EXTRA_SECTION)
                    .pushState(COMMAND_BODY_EXTRA_SECTION)
                    .popState()
                    .write("// End section: $L", COMMAND_BODY_EXTRA_SECTION);
        });
    }

    private void generateCommandConstructor() {
        writer.openBlock("constructor(readonly input: $L) {", "}", inputTypeName, () -> {
            // The constructor can be intercepted and changed.
            writer.write("// Start section: $L", COMMAND_CONSTRUCTOR_SECTION)
                    .pushState(COMMAND_CONSTRUCTOR_SECTION)
                    .write("super();")
                    .popState()
                    .write("// End section: $L", COMMAND_CONSTRUCTOR_SECTION);
        });
    }

    private void generateCommandMiddlewareResolver(String configType) {
        writer.writeDocs("@internal");
        writer.write("resolveMiddleware(")
                .indent()
                .write("clientStack: MiddlewareStack<$L, $L>,", "ServiceInputTypes", "ServiceOutputTypes")
                .write("configuration: $L,", configType)
                .write("options?: $T", ApplicationProtocol.createDefaultHttpApplicationProtocol().getOptionsType())
                .dedent();
        writer.openBlock("): Handler<$L, $L> {", "}", inputTypeName, outputTypeName, () -> {
            writer.write("const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};");

            if (!inputMembersWithAttr.isEmpty()) {
                writer.openBlock("const inputKeyNodes = [", "];", () -> {
                    writeKeyNodes(inputMembersWithAttr);
                });
            }
            if (!outputMembersWithAttr.isEmpty()) {
                writer.openBlock("const outputKeyNodes = [", "];", () -> {
                    writeKeyNodes(outputMembersWithAttr);
                });
            }
            writer.write("");

            writer.addImport(symbol.getName(), "__" + symbol.getName(), "@aws-sdk/client-dynamodb");

            String marshallInput = "marshallInput";
            String unmarshallOutput = "unmarshallOutput";
            writer.addImport(marshallInput, marshallInput, "./commands/utils");
            writer.addImport(unmarshallOutput, unmarshallOutput, "./commands/utils");

            writer.openBlock("const command = new $L(", ");", "__" + symbol.getName(),
                () -> {
                    if (inputMembersWithAttr.isEmpty()) {
                        writer.write("this.input,");
                    } else {
                        writer.openBlock("$L(", ")", marshallInput, () -> {
                            writer.write("this.input,");
                            writer.write("inputKeyNodes,");
                            writer.write("marshallOptions,");
                        });
                    }
                });
            writer.write("const handler = command.resolveMiddleware(clientStack, configuration, options);");
            writer.write("");

            if (outputMembersWithAttr.isEmpty()) {
                writer.write("return handler;");
            } else {
                writer.openBlock("return async () => {", "};", () -> {
                    writer.write("const data = await handler(command);");
                    writer.openBlock("return {", "};", () -> {
                        writer.write("...data,");
                        writer.write("output: $L(data.output, outputKeyNodes, unmarshallOptions),", unmarshallOutput);
                    });
                });
            }
        });
    }

    private void writeKeyNodes(List<MemberShape> membersWithAttr) {
        for (MemberShape member: membersWithAttr) {
            writer.openBlock("{key: '$L', ", "},", symbolProvider.toMemberName(member), () -> {
                writeKeyNode(member);
            });
        }
    }

    private void writeKeyNode(MemberShape member) {
        Shape memberTarget = model.expectShape(member.getTarget());
        if (memberTarget instanceof CollectionShape) {
            MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
            writeKeyNode(collectionMember);
        } else if (memberTarget.isUnionShape()) {
            if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
                return;
            } else {
                // An AttributeValue inside Union is not present as of Q1 2021, and is less
                // likely to appear in future. Writing Omit for it is not straightforward, skipping.
                throw new CodegenException(String.format(
                    "AttributeValue inside Union is not supported, attempted for %s", memberTarget.getType()
                ));
            }
        } else {
            if (memberTarget.isMapShape()) {
                MemberShape mapMember = ((MapShape) memberTarget).getValue();
                Shape mapMemberTarget = model.expectShape(mapMember.getTarget());
                if (mapMemberTarget.isUnionShape()
                        && symbolProvider.toSymbol(mapMemberTarget).getName().equals("AttributeValue")) {
                    return;
                } else {
                    writer.openBlock("children: {", "},", () -> {
                        writeKeyNode(mapMember);
                    });
                }
            } else if (memberTarget.isStructureShape()) {
                writeStructureKeyNode((StructureShape) memberTarget);
            }
        }
    }

    private void writeStructureKeyNode(StructureShape structureTarget) {
        List<MemberShape> membersWithAttr = getStructureMembersWithAttr(Optional.of(structureTarget));
        writer.openBlock("children: [", "],", () -> {
            for (MemberShape member: membersWithAttr) {
                writer.openBlock("{key: '$L', ", "},", symbolProvider.toMemberName(member), () -> {
                    writeKeyNode(member);
                });
            }
        });
    }

    private void generateInputAndOutputTypes() {
        writer.write("");
        String originalInputTypeName = symbol.expectProperty("inputType", Symbol.class).getName();
        writeType(inputTypeName, originalInputTypeName, operationIndex.getInput(operation), inputMembersWithAttr);
        writer.write("");
        String originalOutputTypeName = symbol.expectProperty("outputType", Symbol.class).getName();
        writeType(outputTypeName, originalOutputTypeName, operationIndex.getOutput(operation), outputMembersWithAttr);
        writer.write("");
    }

    private List<MemberShape> getStructureMembersWithAttr(Optional<StructureShape> optionalShape) {
        List<MemberShape> membersWithAttr = new ArrayList<>();
        if (DocumentClientUtils.containsAttributeValue(model, symbolProvider, optionalShape)) {
            StructureShape shape = optionalShape.get();
            for (MemberShape member : shape.getAllMembers().values()) {
                if (DocumentClientUtils.containsAttributeValue(model, symbolProvider, member, new HashSet<String>())) {
                    membersWithAttr.add(member);
                }
            }
        }
        return membersWithAttr;
    }

    private void writeType(
            String typeName,
            String originalTypeName,
            Optional<StructureShape> optionalShape,
            List<MemberShape> membersWithAttr
    ) {
        if (optionalShape.isPresent()) {
            writer.addImport(originalTypeName, "__" + originalTypeName, "@aws-sdk/client-dynamodb");
            if (membersWithAttr.isEmpty()) {
                writer.write("export type $L = __$L;", typeName, originalTypeName);
            } else {
                String memberUnionToOmit = membersWithAttr.stream()
                    .map(member -> "'" + symbolProvider.toMemberName(member) + "'")
                    .collect(Collectors.joining(" | "));
                writer.openBlock("export type $L = Omit<__$L, $L> & {", "};", typeName,
                    originalTypeName, memberUnionToOmit, () -> {
                        for (MemberShape member: membersWithAttr) {
                            writeStructureMemberOmitType(member);
                        }
                    }
                );
            }
        } else {
            // If the input is non-existent, then use an empty object.
            writer.write("export type $L = {}", typeName);
        }
    }

    private void writeStructureOmitType(StructureShape structureTarget) {
        List<MemberShape> membersWithAttr = getStructureMembersWithAttr(Optional.of(structureTarget));
        String memberUnionToOmit = membersWithAttr.stream()
            .map(memberWithAttr -> "'" + symbolProvider.toMemberName(memberWithAttr) + "'")
            .collect(Collectors.joining(" | "));
        String typeNameToOmit = symbolProvider.toSymbol(structureTarget).getName();
        writer.addImport(typeNameToOmit, typeNameToOmit, "@aws-sdk/client-dynamodb");
        writer.openBlock("Omit<$L, $L> & {", "}", typeNameToOmit,
            memberUnionToOmit, () -> {
                for (MemberShape memberWithAttr: membersWithAttr) {
                    writeStructureMemberOmitType(memberWithAttr);
                }
            });
    }

    private void writeStructureMemberOmitType(MemberShape member) {
        String optionalSuffix = isRequiredMember(member) ? "" : "?";
        writer.openBlock("${L}${L}: ", ";", symbolProvider.toMemberName(member),
            optionalSuffix, () -> {
                writeMemberOmitType(member);
            });
    }

    private void writeMemberOmitType(MemberShape member) {
        Shape memberTarget = model.expectShape(member.getTarget());
        if (memberTarget.isStructureShape()) {
            writeStructureOmitType((StructureShape) memberTarget);
        } else if (memberTarget.isUnionShape()) {
            if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
                writeNativeAttributeValue();
            } else {
                // An AttributeValue inside Union is not present as of Q1 2021, and is less
                // likely to appear in future. Writing Omit for it is not straightforward, skipping.
                throw new CodegenException(String.format(
                    "AttributeValue inside Union is not supported, attempted for %s", memberTarget.getType()
                ));
            }
        } else if (memberTarget.isMapShape()) {
            MemberShape mapMember = ((MapShape) memberTarget).getValue();
            writer.openBlock("{ [key: string]: ", "}", () -> {
                writeMemberOmitType(mapMember);
            });
        } else if (memberTarget instanceof CollectionShape) {
            MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
            writer.openBlock("(", ")[]", () -> {
                writeMemberOmitType(collectionMember);
            });
        }
        String typeSuffix = isRequiredMember(member) ? " | undefined" : "";
        writer.write("${L}", typeSuffix);
    }

    private void writeNativeAttributeValue() {
        writer.addImport("NativeAttributeValue", "NativeAttributeValue", "@aws-sdk/util-dynamodb");
        writer.write("NativeAttributeValue");
    }

    /**
     * Identifies if a member should be required on the generated interface.
     *
     * @param member The member being generated for.
     * @return If the interface member should be treated as required.
     *
     * @see <a href="https://awslabs.github.io/smithy/spec/core.html#idempotencytoken-trait">Smithy idempotencyToken trait.</a>
     */
    private boolean isRequiredMember(MemberShape member) {
        return member.isRequired() && !member.hasTrait(IdempotencyTokenTrait.class);
    }
}
