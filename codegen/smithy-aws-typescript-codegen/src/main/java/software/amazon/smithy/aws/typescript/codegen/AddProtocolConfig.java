/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.Map;
import java.util.Objects;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.protocols.AwsJson1_0Trait;
import software.amazon.smithy.aws.traits.protocols.AwsJson1_1Trait;
import software.amazon.smithy.aws.traits.protocols.AwsQueryTrait;
import software.amazon.smithy.aws.traits.protocols.Ec2QueryTrait;
import software.amazon.smithy.aws.traits.protocols.RestJson1Trait;
import software.amazon.smithy.aws.traits.protocols.RestXmlTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.traits.XmlNamespaceTrait;
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

    public AddProtocolConfig() {
        SchemaGenerationAllowlist.allow("com.amazonaws.s3#AmazonS3");
        SchemaGenerationAllowlist.allow("com.amazonaws.dynamodb#DynamoDB_20120810");
        SchemaGenerationAllowlist.allow("com.amazonaws.lambda#AWSGirApiService");
        SchemaGenerationAllowlist.allow("com.amazonaws.cloudwatchlogs#Logs_20140328");
        SchemaGenerationAllowlist.allow("com.amazonaws.sts#AWSSecurityTokenServiceV20110615");

        // protocol tests
        SchemaGenerationAllowlist.allow("aws.protocoltests.json10#JsonRpc10");
        SchemaGenerationAllowlist.allow("aws.protocoltests.json#JsonProtocol");
        SchemaGenerationAllowlist.allow("aws.protocoltests.restjson#RestJson");
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

        switch (target) {
            case SHARED:
                if (Objects.equals(settings.getProtocol(), RestXmlTrait.ID)) {
                    return MapUtils.of(
                        "protocol", writer -> {
                            writer.addImportSubmodule(
                                "AwsRestXmlProtocol", null,
                                AwsDependency.AWS_SDK_CORE, "/protocols");
                            writer.write("""
                                new AwsRestXmlProtocol({
                                  defaultNamespace: $S, xmlNamespace: $S,
                                })""",
                                namespace,
                                xmlns
                            );
                        }
                    );
                } else if (Objects.equals(settings.getProtocol(), AwsQueryTrait.ID)) {
                    return MapUtils.of(
                        "protocol", writer -> {
                            writer.addImportSubmodule(
                                "AwsQueryProtocol", null,
                                AwsDependency.AWS_SDK_CORE, "/protocols");
                            writer.write(
                                """
                                new AwsQueryProtocol({
                                  defaultNamespace: $S,
                                  xmlNamespace: $S,
                                  version: $S
                                })""",
                                namespace,
                                xmlns,
                                settings.getService(model).getVersion()
                            );
                        }
                    );
                } else if (Objects.equals(settings.getProtocol(), Ec2QueryTrait.ID)) {
                    return MapUtils.of(
                        "protocol", writer -> {
                            writer.addImportSubmodule(
                                "AwsEc2QueryProtocol", null,
                                AwsDependency.AWS_SDK_CORE, "/protocols");
                            writer.write(
                                """
                                new AwsEc2QueryProtocol({
                                  defaultNamespace: $S,
                                  xmlNamespace: $S,
                                  version: $S
                                })""",
                                namespace,
                                xmlns,
                                settings.getService(model).getVersion()
                            );
                        }
                    );
                } else if (Objects.equals(settings.getProtocol(), RestJson1Trait.ID)) {
                    return MapUtils.of(
                        "protocol", writer -> {
                            writer.addImportSubmodule(
                                "AwsRestJsonProtocol", null,
                                AwsDependency.AWS_SDK_CORE, "/protocols");
                            writer.write("new AwsRestJsonProtocol({ defaultNamespace: $S })", namespace);
                        }
                    );
                } else if (Objects.equals(settings.getProtocol(), AwsJson1_0Trait.ID)) {
                    return MapUtils.of(
                        "protocol", writer -> {
                            writer.addImportSubmodule(
                                "AwsJson1_0Protocol", null,
                                AwsDependency.AWS_SDK_CORE, "/protocols");
                            writer.write(
                                "new AwsJson1_0Protocol({ defaultNamespace: $S, serviceTarget: $S })",
                                namespace,
                                rpcTarget
                            );
                        }
                    );
                } else if (Objects.equals(settings.getProtocol(), AwsJson1_1Trait.ID)) {
                    return MapUtils.of(
                        "protocol", writer -> {
                            writer.addImportSubmodule(
                                "AwsJson1_1Protocol", null,
                                AwsDependency.AWS_SDK_CORE, "/protocols");
                            writer.write(
                                "new AwsJson1_1Protocol({ defaultNamespace: $S, serviceTarget: $S })",
                                namespace,
                                rpcTarget
                            );
                        }
                    );
                }
            case BROWSER:
            case NODE:
            default:
                return Collections.emptyMap();
        }
    }
}
