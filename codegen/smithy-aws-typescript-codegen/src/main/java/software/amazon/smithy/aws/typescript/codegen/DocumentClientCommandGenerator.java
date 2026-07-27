/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
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
import software.amazon.smithy.typescript.codegen.SmithyCoreSubmodules;
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
        writer.write(
            "import { %s as %s } from \"%s\";".formatted(
                clientCommandClassName,
                clientCommandLocalName,
                AwsDependency.CLIENT_DYNAMODB_PEER.getPackageName()
            )
        );
        writer.write("");

        // Add required imports.
        writer.addRelativeTypeImport(configType, configType, servicePath);
        writer.addImport(
            "DynamoDBDocumentClientCommand",
            "DynamoDBDocumentClientCommand",
            "./baseCommand/DynamoDBDocumentClientCommand"
        );
        writer.addImportSubmodule("Command", "$Command", TypeScriptDependency.SMITHY_CORE, SmithyCoreSubmodules.CLIENT);

        writer.writeDocs("@public");
        writer.write("export { DynamoDBDocumentClientCommand, $$Command };");

        generateInputAndOutputTypes();

        String name = DocumentClientUtils.getModifiedName(symbol.getName());
        writer.writeDocs(
            DocumentClientUtils.getCommandDocs(symbol.getName())
                + "\n\n@public"
        );
        writer.openBlock(
            "export class $L extends DynamoDBDocumentClientCommand<\n"
                + "  " + inputTypeName + ",\n"
                + "  " + outputTypeName + ",\n"
                + "  __" + originalInputTypeName + ",\n"
                + "  __" + originalOutputTypeName + ",\n"
                + "  " + configType + "\n"
                + "> {",
            "}",
            name,
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
                    "public readonly middlewareStack: MiddlewareStack<any, any>;"
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
            writer.openBlock("import type {", "} from \"" + dep + "\";", () -> {
                symbols.forEach((externalName, localName) -> {
                    if (externalName.equals(localName)) {
                        writer.write("$L,", localName);
                    } else {
                        writer.write("$L as $L,", externalName, localName);
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
        writer.addRelativeTypeImport(serviceInputTypes, serviceInputTypes, servicePath);
        writer.addRelativeTypeImport(serviceOutputTypes, serviceOutputTypes, servicePath);
        writer.addTypeImport(handler, handler, TypeScriptDependency.SMITHY_TYPES);
        writer.addTypeImport(middlewareStack, middlewareStack, TypeScriptDependency.SMITHY_TYPES);

        writer.write("resolveMiddleware(")
            .indent()
            .write("clientStack: $L<$L, $L>,", middlewareStack, serviceInputTypes, serviceOutputTypes)
            .write("configuration: $L,", configType)
            .write("options?: $T", ApplicationProtocol.createDefaultHttpApplicationProtocol().getOptionsType())
            .dedent();
        writer.openBlock("): $L<$L, $L> {", "}", handler, inputTypeName, outputTypeName, () -> {

            String commandVarName = "this.clientCommand";

            // marshall middlewares
            writer.write("this.addMarshallingMiddleware(configuration);");

            writer.write("const stack = clientStack.concat(this.middlewareStack as typeof clientStack);");

            String handlerVarName = "handler";
            writer.write(
                "const $L = $L.resolveMiddleware(stack, configuration, options);",
                handlerVarName,
                commandVarName
            );
            writer.write("");

            writer.write("return async () => handler($L) as any;", commandVarName);
        });
    }

    private void writeKeyNodes(List<MemberShape> membersWithAttr) {
        for (MemberShape member : membersWithAttr) {
            writeKeyNodeEntry(member);
        }
    }

    private void writeKeyNodeEntry(MemberShape member) {
        String memberName = symbolProvider.toMemberName(member);
        Shape memberTarget = model.expectShape(member.getTarget());
        // For simple leaf nodes (map with AttributeValue, set/list of AttributeValue, SELF),
        // write them inline without openBlock to avoid extra indentation.
        if (memberTarget.isMapShape()) {
            MemberShape mapMember = ((MapShape) memberTarget).getValue();
            Shape mapMemberTarget = model.expectShape(mapMember.getTarget());
            if (
                mapMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(mapMemberTarget).getName().equals("AttributeValue")
            ) {
                writer.addImport("ALL_VALUES", null, "./commands/utils");
                writer.write("$L: ALL_VALUES, // map with AttributeValue", memberName);
                return;
            }
        } else if (memberTarget instanceof CollectionShape) {
            MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
            Shape collectionMemberTarget = model.expectShape(collectionMember.getTarget());
            if (
                collectionMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(collectionMemberTarget).getName().equals("AttributeValue")
            ) {
                writer.addImport("ALL_MEMBERS", null, "./commands/utils");
                writer.write("$L: ALL_MEMBERS, // set/list of AttributeValue", memberName);
                return;
            }
        } else if (memberTarget.isUnionShape()) {
            if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
                writer.addImport("SELF", null, "./commands/utils");
                writer.write("$L: SELF,", memberName);
                return;
            }
        }
        // For complex/nested nodes, use block formatting
        writer.writeInline("$L: ", memberName);
        writeKeyNodeValue(member, true);
    }

    private void writeKeyNodeValue(MemberShape member, boolean trailingComma) {
        String closeBrace = trailingComma ? "}," : "}";
        Shape memberTarget = model.expectShape(member.getTarget());
        if (memberTarget instanceof CollectionShape) {
            MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
            Shape collectionMemberTarget = model.expectShape(collectionMember.getTarget());
            if (
                collectionMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(collectionMemberTarget).getName().equals("AttributeValue")
            ) {
                writer.addImport("ALL_MEMBERS", null, "./commands/utils");
                writer.write("ALL_MEMBERS, // set/list of AttributeValue");
                return;
            }
            writer.openBlock("{", closeBrace, () -> {
                writer.writeInline("\"*\": ");
                writeKeyNodeValue(collectionMember, true);
            });
        } else if (memberTarget.isUnionShape()) {
            if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
                writer.addImport("SELF", null, "./commands/utils");
                writer.write("SELF,");
                return;
            } else {
                // An AttributeValue inside Union is not present as of Q1 2021, and is less
                // likely to appear in future. Writing Omit for it is not straightforward, skipping.
                throw new CodegenException(
                    String.format(
                        "AttributeValue inside Union is not supported, attempted for %s",
                        memberTarget.getType()
                    )
                );
            }
        } else if (memberTarget.isMapShape()) {
            MemberShape mapMember = ((MapShape) memberTarget).getValue();
            Shape mapMemberTarget = model.expectShape(mapMember.getTarget());
            if (
                mapMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(mapMemberTarget).getName().equals("AttributeValue")
            ) {
                writer.addImport("ALL_VALUES", null, "./commands/utils");
                writer.write("ALL_VALUES, // map with AttributeValue");
                return;
            } else {
                writer.openBlock("{", closeBrace, () -> {
                    writer.writeInline("\"*\": ");
                    writeKeyNodeValue(mapMember, true);
                });
            }
        } else if (memberTarget.isStructureShape()) {
            writeStructureKeyNode((StructureShape) memberTarget, trailingComma);
        }
    }

    private void writeStructureKeyNode(StructureShape structureTarget, boolean trailingComma) {
        String closeBrace = trailingComma ? "}," : "}";
        List<MemberShape> membersWithAttr = getStructureMembersWithAttr(Optional.of(structureTarget));
        writer.openBlock("{", closeBrace, () -> {
            for (MemberShape member : membersWithAttr) {
                writeKeyNodeEntry(member);
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
                    .map(member -> "\"" + symbolProvider.toMemberName(member) + "\"")
                    .collect(Collectors.joining(" | "));
                writer.openBlock(
                    "export type $L = Omit<__$L, $L> & {",
                    "};",
                    typeName,
                    originalTypeName,
                    memberUnionToOmit,
                    () -> {
                        for (MemberShape member : membersWithAttr) {
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

    private void writeStructureOmitType(StructureShape structureTarget, String suffix) {
        List<MemberShape> membersWithAttr = getStructureMembersWithAttr(Optional.of(structureTarget));
        String memberUnionToOmit = membersWithAttr.stream()
            .map(memberWithAttr -> "\"" + symbolProvider.toMemberName(memberWithAttr) + "\"")
            .collect(Collectors.joining(" | "));
        String typeNameToOmit = symbolProvider.toSymbol(structureTarget).getName();
        registerTypeImport(
            typeNameToOmit,
            typeNameToOmit,
            AwsDependency.CLIENT_DYNAMODB_PEER.getPackageName()
        );
        String closeBlock = "}" + suffix;
        writer.openBlock(
            "Omit<$L, $L> & {",
            closeBlock,
            typeNameToOmit,
            memberUnionToOmit,
            () -> {
                for (MemberShape memberWithAttr : membersWithAttr) {
                    writeStructureMemberOmitType(memberWithAttr);
                }
            }
        );
    }

    private void writeStructureMemberOmitType(MemberShape member) {
        String optionalSuffix = isRequiredMember(member) ? "" : "?";
        String memberName = symbolProvider.toMemberName(member);
        writer.writeInline("$L$L: ", memberName, optionalSuffix);
        writeMemberOmitType(member, true, ";");
    }

    private void writeMemberOmitType(MemberShape member, boolean allowUndefined) {
        writeMemberOmitType(member, allowUndefined, "");
    }

    private void writeMemberOmitType(MemberShape member, boolean allowUndefined, String terminator) {
        Shape memberTarget = model.expectShape(member.getTarget());
        String undefinedSuffix = allowUndefined ? " | undefined" : "";
        String suffix = undefinedSuffix + terminator;
        if (memberTarget.isStructureShape()) {
            writeStructureOmitType((StructureShape) memberTarget, suffix);
        } else if (memberTarget.isUnionShape()) {
            if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
                registerNativeAttributeValueImport();
                writeTypeLeaf("JsAttributeValue" + suffix, terminator);
            } else {
                // An AttributeValue inside Union is not present as of Q1 2021, and is less
                // likely to appear in future. Writing Omit for it is not straightforward, skipping.
                throw new CodegenException(
                    String.format(
                        "AttributeValue inside Union is not supported, attempted for %s",
                        memberTarget.getType()
                    )
                );
            }
        } else if (memberTarget.isMapShape()) {
            MemberShape mapMember = ((MapShape) memberTarget).getValue();
            Shape mapMemberTarget = model.expectShape(mapMember.getTarget());
            if (
                mapMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(mapMemberTarget).getName().equals("AttributeValue")
            ) {
                registerNativeAttributeValueImport();
                writeTypeLeaf("Record<string, JsAttributeValue>" + suffix, terminator);
            } else {
                String closeRecord = ">" + suffix;
                writer.openBlock("Record<", closeRecord, () -> {
                    writer.writeInline("string,");
                    writer.write("");
                    writeMemberOmitType(mapMember, false);
                });
            }
        } else if (memberTarget instanceof CollectionShape) {
            MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
            Shape collectionMemberTarget = model.expectShape(collectionMember.getTarget());
            if (
                collectionMemberTarget.isUnionShape()
                    && symbolProvider.toSymbol(collectionMemberTarget).getName().equals("AttributeValue")
            ) {
                registerNativeAttributeValueImport();
                writeTypeLeaf("JsAttributeValue[]" + suffix, terminator);
            } else if (
                collectionMemberTarget.isMapShape()
                    && isSimpleNativeAttributeValueMap(collectionMemberTarget)
            ) {
                // Simple case: Record<string, JsAttributeValue>[]
                registerNativeAttributeValueImport();
                writeTypeLeaf("Record<string, JsAttributeValue>[]" + suffix, terminator);
            } else {
                String closeArray = ")[]" + suffix;
                writer.openBlock("(", closeArray, () -> {
                    writeMemberOmitType(collectionMember, false);
                });
            }
        }
    }

    /**
     * Writes a leaf type with a trailing newline.
     */
    private void writeTypeLeaf(String text, String terminator) {
        writer.write(text);
    }

    private void registerNativeAttributeValueImport() {
        String nativeAttributeValue = "JsAttributeValue";
        registerTypeImport(
            nativeAttributeValue,
            nativeAttributeValue,
            AwsDependency.UTIL_DYNAMODB.getPackageName()
        );
    }

    private boolean isSimpleNativeAttributeValueMap(Shape mapShape) {
        if (!mapShape.isMapShape()) {
            return false;
        }
        MemberShape mapValue = ((MapShape) mapShape).getValue();
        Shape mapValueTarget = model.expectShape(mapValue.getTarget());
        return mapValueTarget.isUnionShape()
            && symbolProvider.toSymbol(mapValueTarget).getName().equals("AttributeValue");
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
                externalName,
                localName
            );
    }
}
