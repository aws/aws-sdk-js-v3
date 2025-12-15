/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.protocols.AwsJson1_0Trait;
import software.amazon.smithy.aws.traits.protocols.AwsJson1_1Trait;
import software.amazon.smithy.aws.traits.protocols.AwsQueryCompatibleTrait;
import software.amazon.smithy.aws.traits.protocols.AwsQueryTrait;
import software.amazon.smithy.aws.traits.protocols.Ec2QueryTrait;
import software.amazon.smithy.aws.traits.protocols.RestJson1Trait;
import software.amazon.smithy.aws.traits.protocols.RestXmlTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.XmlNamespaceTrait;
import software.amazon.smithy.protocol.traits.Rpcv2CborTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.typescript.codegen.schema.SchemaGenerationAllowlist;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds a protocol implementation to the runtime config.
 */
@SmithyInternalApi
public final class AddProtocolConfig implements TypeScriptIntegration {
    static {
        init();
    }

    public static final Map<ShapeId, Consumer<TypeScriptWriter>> CUSTOMIZATIONS = MapUtils.of(
        ShapeId.from("com.amazonaws.dynamodb#DynamoDB_20120810"),
        writer -> {
            writer.addImport("DynamoDBJsonCodec", null, AwsDependency.DYNAMODB_CODEC);
            writer.write("jsonCodec: new DynamoDBJsonCodec(),");
        }
    );

    static void init() {
        List<ShapeId> allowed = List.of(
            AwsJson1_0Trait.ID,
            AwsJson1_1Trait.ID,
            RestJson1Trait.ID,
            Ec2QueryTrait.ID,
            AwsQueryTrait.ID,
            RestXmlTrait.ID
        );
        List<ShapeId> pending = List.of();
        for (ShapeId shapeId : allowed) {
            SchemaGenerationAllowlist.allowProtocol(shapeId);
            assert !pending.contains(shapeId);
        }

        // protocol tests
        SchemaGenerationAllowlist.allow("aws.protocoltests.json10#JsonRpc10");
        SchemaGenerationAllowlist.allow("aws.protocoltests.json#JsonProtocol");
        SchemaGenerationAllowlist.allow("com.amazonaws.machinelearning#AmazonML_20141212");
        SchemaGenerationAllowlist.allow("aws.protocoltests.restjson#RestJson");
        SchemaGenerationAllowlist.allow("com.amazonaws.glacier#Glacier");
        SchemaGenerationAllowlist.allow("com.amazonaws.apigateway#BackplaneControlService");
        SchemaGenerationAllowlist.allow("aws.protocoltests.restxml#RestXml");
        SchemaGenerationAllowlist.allow("aws.protocoltests.query#AwsQuery");
        SchemaGenerationAllowlist.allow("aws.protocoltests.ec2#AwsEc2");
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        // the {{ protocol?: Protocol }} type field is provided
        // by the smithy client config interface.
    }

    @Override
    public List<String> runAfter() {
        return List.of(
            software.amazon.smithy.typescript.codegen.integration.AddProtocolConfig.class.getCanonicalName()
        );
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        if (!SchemaGenerationAllowlist.allows(settings.getService(), settings)) {
            return Collections.emptyMap();
        }
        String namespace = settings.getService().getNamespace();
        String rpcTarget = settings.getService().getName();
        String xmlns = settings.getService(model)
            .getTrait(XmlNamespaceTrait.class)
            .map(XmlNamespaceTrait::getUri)
            .orElse("");
        String awsQueryCompat = settings.getService(model).hasTrait(AwsQueryCompatibleTrait.class) ? "true" : "false";

        Consumer<TypeScriptWriter> typeScriptWriterConsumer = (TypeScriptWriter writer) -> {
            writer.openBlock(
                """
                {
                  defaultNamespace: $S,""",
                """
                }""",
                namespace,
                () -> {
                    if (!xmlns.isEmpty()) {
                        writer.write("xmlNamespace: $S,", xmlns);
                    }
                    String version = settings.getService(model).getVersion();
                    if (!version.isEmpty()) {
                        writer.write("version: $S,", version);
                    }
                    writer.write("serviceTarget: $S,", rpcTarget);
                    if (awsQueryCompat.equals("true")) {
                        writer.write("awsQueryCompatible: $L,", awsQueryCompat);
                    }

                    if (CUSTOMIZATIONS.containsKey(settings.getService())) {
                        CUSTOMIZATIONS.get(settings.getService()).accept(writer);
                    }
                }
            );
        };

        switch (target) {
            case SHARED:
                if (Objects.equals(settings.getProtocol(), RestXmlTrait.ID)) {
                    return MapUtils.of(
                        "protocol",
                        writer -> {
                            writer.addImportSubmodule(
                                "AwsRestXmlProtocol",
                                null,
                                AwsDependency.AWS_SDK_CORE,
                                "/protocols"
                            );
                            writer.write("AwsRestXmlProtocol");
                        },
                        "protocolSettings",
                        typeScriptWriterConsumer
                    );
                } else if (Objects.equals(settings.getProtocol(), AwsQueryTrait.ID)) {
                    return MapUtils.of(
                        "protocol",
                        writer -> {
                            writer.addImportSubmodule(
                                "AwsQueryProtocol",
                                null,
                                AwsDependency.AWS_SDK_CORE,
                                "/protocols"
                            );
                            writer.write("AwsQueryProtocol");
                        },
                        "protocolSettings",
                        typeScriptWriterConsumer
                    );
                } else if (Objects.equals(settings.getProtocol(), Ec2QueryTrait.ID)) {
                    return MapUtils.of(
                        "protocol",
                        writer -> {
                            writer.addImportSubmodule(
                                "AwsEc2QueryProtocol",
                                null,
                                AwsDependency.AWS_SDK_CORE,
                                "/protocols"
                            );
                            writer.write("AwsEc2QueryProtocol");
                        },
                        "protocolSettings",
                        typeScriptWriterConsumer
                    );
                } else if (Objects.equals(settings.getProtocol(), RestJson1Trait.ID)) {
                    return MapUtils.of(
                        "protocol",
                        writer -> {
                            writer.addImportSubmodule(
                                "AwsRestJsonProtocol",
                                null,
                                AwsDependency.AWS_SDK_CORE,
                                "/protocols"
                            );
                            writer.write("AwsRestJsonProtocol");
                        }
                    );
                } else if (Objects.equals(settings.getProtocol(), AwsJson1_0Trait.ID)) {
                    return MapUtils.of(
                        "protocol",
                        writer -> {
                            writer.addImportSubmodule(
                                "AwsJson1_0Protocol",
                                null,
                                AwsDependency.AWS_SDK_CORE,
                                "/protocols"
                            );
                            writer.write("AwsJson1_0Protocol");
                        },
                        "protocolSettings",
                        typeScriptWriterConsumer
                    );
                } else if (Objects.equals(settings.getProtocol(), AwsJson1_1Trait.ID)) {
                    return MapUtils.of(
                        "protocol",
                        writer -> {
                            writer.addImportSubmodule(
                                "AwsJson1_1Protocol",
                                null,
                                AwsDependency.AWS_SDK_CORE,
                                "/protocols"
                            );
                            writer.write("AwsJson1_1Protocol");
                        },
                        "protocolSettings",
                        typeScriptWriterConsumer
                    );
                } else if (Objects.equals(settings.getProtocol(), Rpcv2CborTrait.ID)) {
                    return MapUtils.of(
                        "protocol",
                        writer -> {
                            writer.addImportSubmodule(
                                "AwsSmithyRpcV2CborProtocol",
                                null,
                                AwsDependency.AWS_SDK_CORE,
                                "/protocols"
                            );
                            writer.write(
                                """
                                AwsSmithyRpcV2CborProtocol"""
                            );
                        },
                        "protocolSettings",
                        typeScriptWriterConsumer
                    );
                }
            case BROWSER:
            case NODE:
            default:
                return Collections.emptyMap();
        }
    }
}
