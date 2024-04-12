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

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;
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
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
final class DocumentClientCommandGenerator implements Runnable {
    static final String COMMAND_PROPERTIES_SECTION = "command_properties";
    static final String COMMAND_BODY_EXTRA_SECTION = "command_body_extra";
    static final String COMMAND_CONSTRUCTOR_SECTION = "command_constructor";

    static final String COMMAND_INPUT_KEYNODES = "inputKeyNodes";
    static final String COMMAND_OUTPUT_KEYNODES = "outputKeyNodes";

    private final Model model;
    private final OperationShape operation;
    private final SymbolProvider symbolProvider;
    private final TypeScriptWriter writer;
    private final Symbol symbol;
    private final OperationIndex operationIndex;
    private final String originalInputTypeName;
    private final String inputTypeName;
    private final List<MemberShape> inputMembersWithAttr;
    private final String originalOutputTypeName;
    private final String outputTypeName;
    private final List<MemberShape> outputMembersWithAttr;
    private final String clientCommandClassName;
    private final String clientCommandLocalName;
    /**
     * Map of package name to external:local name entries.
     */
    private final Map<String, Map<String, String>> orderedUncheckedImports = new TreeMap<>();

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
        String inputType = symbol.expectProperty("inputType", Symbol.class).getName();
        originalInputTypeName = inputType;
        inputTypeName = DocumentClientUtils.getModifiedName(
            inputType
        );
        inputMembersWithAttr = getStructureMembersWithAttr(operationIndex.getInput(operation));
        String outputType = symbol.expectProperty("outputType", Symbol.class).getName();
        originalOutputTypeName = outputType;
        outputTypeName = DocumentClientUtils.getModifiedName(
            outputType
        );
        outputMembersWithAttr = getStructureMembersWithAttr(operationIndex.getOutput(operation));

        clientCommandClassName = symbol.getName();
        clientCommandLocalName = "__" + clientCommandClassName;
    }

    @Override
    public void run() {
        Path servicePath = Paths.get(".", DocumentClientUtils.CLIENT_NAME);
        String configType = DocumentClientUtils.CLIENT_CONFIG_NAME;

        // Note: using addImport would register these dependencies on the dynamodb client, which must be avoided.
        writer.write("""
           import { %s as %s } from "%s";
           """.formatted(
                clientCommandClassName,
                clientCommandLocalName,
                AwsDependency.CLIENT_DYNAMODB_PEER.getPackageName()
            )
        );

        // Add required imports.
        writer.addRelativeImport(configType, configType, servicePath);
        writer.addImport(
            "DynamoDBDocumentClientCommand",
            "DynamoDBDocumentClientCommand",
            "./baseCommand/DynamoDBDocumentClientCommand"
        );
        writer.addImport("Command", "$Command", TypeScriptDependency.AWS_SMITHY_CLIENT);

        writer.writeDocs("@public");
        writer.write("export { DynamoDBDocumentClientCommand, $$Command };");

        generateInputAndOutputTypes();

        String ioTypes = String.join(", ", new String[]{
            inputTypeName,
            outputTypeName,
            "__" + originalInputTypeName,
            "__" + originalOutputTypeName
        });

        String name = DocumentClientUtils.getModifiedName(symbol.getName());
        writer.writeDocs(DocumentClientUtils.getCommandDocs(symbol.getName())
            + "\n\n@public"
        );
        writer.openBlock(
            "export class $L extends DynamoDBDocumentClientCommand<" + ioTypes + ", $L> {",
            "}",
            name,
            configType,
            () -> {
                // Section for adding custom command properties.
                writer.pushState(COMMAND_PROPERTIES_SECTION);
                writer.openBlock("protected readonly $L = {", "};", COMMAND_INPUT_KEYNODES, () -> {
                    writeKeyNodes(inputMembersWithAttr);
                });
                writer.openBlock("protected readonly $L = {", "};", COMMAND_OUTPUT_KEYNODES, () -> {
                    writeKeyNodes(outputMembersWithAttr);
                });
                writer.popState();
                writer.write("");

                writer.write("protected readonly clientCommand: $L;", clientCommandLocalName);
                writer.write(
                    "public readonly middlewareStack: MiddlewareStack<$L>;",
                    inputTypeName + " | __" + originalInputTypeName
                        + ", \n" + outputTypeName + " | __" + originalOutputTypeName
                );
                writer.write("");

                generateCommandConstructor();
                writer.write("");
                generateCommandMiddlewareResolver(configType);

                // Hook for adding more methods to the command.
                writer.pushState(COMMAND_BODY_EXTRA_SECTION).popState();
            }
        );

        // Note: using addImport would register these dependencies on the dynamodb client, which must be avoided.
        writer.write("");
        orderedUncheckedImports.forEach((dep, symbols) -> {
            writer.openBlock("import type {", """
                } from "%s";
                """.formatted(dep), () -> {
                symbols.forEach((externalName, localName) -> {
                    if (externalName.equals(localName)) {
                        writer.writeInline(localName).write(",");
                    } else {
                        writer.write("""
                            %s as %s,
                            """.formatted(externalName, localName));
                    }
                });
            });
        });
    }

    private void generateCommandConstructor() {
        writer.openBlock("constructor(readonly input: $L) {", "}", inputTypeName, () -> {
            // The constructor can be intercepted and changed.
            writer.pushState(COMMAND_CONSTRUCTOR_SECTION)
                    .write("super();")
                    .write("this.clientCommand = new $L(this.input as any);", clientCommandLocalName)
                    .write("this.middlewareStack = this.clientCommand.middlewareStack;")
                    .popState();
        });
    }

    private void generateCommandMiddlewareResolver(String configType) {
        writer.writeDocs("@internal");

        String serviceInputTypes = "ServiceInputTypes";
        String serviceOutputTypes = "ServiceOutputTypes";
        String handler = "Handler";
        String middlewareStack = "MiddlewareStack";

        Path servicePath = Paths.get(".", DocumentClientUtils.CLIENT_NAME);
        writer.addRelativeImport(serviceInputTypes, serviceInputTypes, servicePath);
        writer.addRelativeImport(serviceOutputTypes, serviceOutputTypes, servicePath);
        writer.addImport(handler, handler, TypeScriptDependency.SMITHY_TYPES);
        writer.addImport(middlewareStack, middlewareStack, TypeScriptDependency.SMITHY_TYPES);

        writer.write("resolveMiddleware(")
                .indent()
                .write("clientStack: $L<$L, $L>,", middlewareStack, serviceInputTypes, serviceOutputTypes)
                .write("configuration: $L,", configType)
                .write("options?: $T", ApplicationProtocol.createDefaultHttpApplicationProtocol().getOptionsType())
                .dedent();
        writer.openBlock("): $L<$L, $L> {", "}", handler, inputTypeName, outputTypeName, () -> {

            String commandVarName = "this.clientCommand";

            // marshall middlewares
            writer.openBlock("this.addMarshallingMiddleware(", ");", () -> {
                writer.write("configuration");
            });

            writer.write("const stack = clientStack.concat(this.middlewareStack as typeof clientStack);");

            String handlerVarName = "handler";
            writer.write("const $L = $L.resolveMiddleware(stack, configuration, options);",
                handlerVarName, commandVarName);
            writer.write("");

            if (outputMembersWithAttr.isEmpty()) {
                writer.write("return $L;", handlerVarName);
            } else {
                writer.write("return async () => handler($L)", commandVarName);
            }
        });
    }

    private void writeKeyNodes(List<MemberShape> membersWithAttr) {
        for (MemberShape member: membersWithAttr) {
            writer.openBlock("'$L': ", ",", symbolProvider.toMemberName(member), () -> {
                writeKeyNode(member);
            });
        }
    }

    private void writeKeyNode(MemberShape member) {
        Shape memberTarget = model.expectShape(member.getTarget());
        if (memberTarget instanceof CollectionShape) {
            MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
            Shape collectionMemberTarget = model.expectShape(collectionMember.getTarget());
            if (collectionMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(collectionMemberTarget).getName().equals("AttributeValue")) {
                writer.addImport("ALL_MEMBERS", null, "./commands/utils");
                writer.write("ALL_MEMBERS // set/list of AttributeValue");
                return;
            }
            writer.openBlock("{", "}", () -> {
                writer.write("'*':");
                writeKeyNode(collectionMember);
            });
        } else if (memberTarget.isUnionShape()) {
            if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
                writer.addImport("SELF", null, "./commands/utils");
                writer.write("SELF");
                return;
            } else {
                // An AttributeValue inside Union is not present as of Q1 2021, and is less
                // likely to appear in future. Writing Omit for it is not straightforward, skipping.
                throw new CodegenException(String.format(
                    "AttributeValue inside Union is not supported, attempted for %s", memberTarget.getType()
                ));
            }
        } else if (memberTarget.isMapShape()) {
            MemberShape mapMember = ((MapShape) memberTarget).getValue();
            Shape mapMemberTarget = model.expectShape(mapMember.getTarget());
            if (mapMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(mapMemberTarget).getName().equals("AttributeValue")) {
                writer.addImport("ALL_VALUES", null, "./commands/utils");
                writer.write("ALL_VALUES // map with AttributeValue");
                return;
            } else {
                writer.openBlock("{", "}", () -> {
                    writer.write("'*':");
                    writeKeyNode(mapMember);
                });
            }
        } else if (memberTarget.isStructureShape()) {
            writeStructureKeyNode((StructureShape) memberTarget);
        }
    }

    private void writeStructureKeyNode(StructureShape structureTarget) {
        List<MemberShape> membersWithAttr = getStructureMembersWithAttr(Optional.of(structureTarget));
        writer.openBlock("{", "}", () -> {
            for (MemberShape member: membersWithAttr) {
                writer.openBlock("'$L': ", ",", symbolProvider.toMemberName(member), () -> {
                    writeKeyNode(member);
                });
            }
        });
    }

    private void generateInputAndOutputTypes() {
        writer.write("");
        writeType(inputTypeName, originalInputTypeName, operationIndex.getInput(operation), inputMembersWithAttr);
        writer.write("");
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
        writer.writeDocs("@public");
        if (optionalShape.isPresent()) {
            registerTypeImport(
                originalTypeName,
                "__" + originalTypeName,
                AwsDependency.CLIENT_DYNAMODB_PEER.getPackageName()
            );
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
        registerTypeImport(
            typeNameToOmit,
            typeNameToOmit,
            AwsDependency.CLIENT_DYNAMODB_PEER.getPackageName()
        );
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
            writer.openBlock("Record<string, ", ">", () -> {
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
        String nativeAttributeValue = "NativeAttributeValue";
        registerTypeImport(
            nativeAttributeValue,
            nativeAttributeValue,
            AwsDependency.UTIL_DYNAMODB.getPackageName()
        );
        writer.write(nativeAttributeValue);
    }

    /**
     * Identifies if a member should be required on the generated interface.
     *
     * @param member The member being generated for.
     * @return If the interface member should be treated as required.
     *
     * @see <a href="https://smithy.io/2.0/spec/behavior-traits.html#smithy-api-idempotencytoken-trait">Smithy idempotencyToken trait.</a>
     */
    private boolean isRequiredMember(MemberShape member) {
        return member.isRequired() && !member.hasTrait(IdempotencyTokenTrait.class);
    }

    private void registerTypeImport(String externalName, String localName, String packageName) {
        orderedUncheckedImports.putIfAbsent(packageName, new TreeMap<>());
        orderedUncheckedImports.get(packageName)
            .put(
                externalName, localName
            );
    }
}
