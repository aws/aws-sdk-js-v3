/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.Map;
import java.util.Objects;
import java.util.function.Consumer;
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
        SchemaGenerationAllowlist.allow("aws.protocoltests.restxml#RestXml");
        SchemaGenerationAllowlist.allow("com.amazonaws.s3#AmazonS3");
        // SchemaGenerationAllowlist.allow("aws.protocoltests.restjson#RestJson");
        // SchemaGenerationAllowlist.allow("aws.protocoltests.json#JsonProtocol");
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
        if (!SchemaGenerationAllowlist.contains(settings.getService())) {
            return Collections.emptyMap();
        }
        switch (target) {
            case SHARED:
                if (Objects.equals(settings.getProtocol(), RestXmlTrait.ID)) {
                    return MapUtils.of(
                        "protocol", writer -> {
                            writer.addImportSubmodule(
                                "AwsRestXmlProtocol", null,
                                AwsDependency.AWS_SDK_CORE, "/protocols");
                            writer.write("new AwsRestXmlProtocol($S, $S)",
                                settings.getService(model)
                                    .getTrait(XmlNamespaceTrait.class)
                                    .map(XmlNamespaceTrait::getUri)
                                    .orElse(""),
                                settings.getService(model)
                                    .getId().getNamespace()
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
