/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add client plugins and configs to support injecting user agent.
 */
@SmithyInternalApi
public class AddUserAgentDependency implements TypeScriptIntegration {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.MIDDLEWARE_USER_AGENT.dependency, "UserAgent")
                .build()
        );
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        writer.addImport("Provider", "Provider", TypeScriptDependency.SMITHY_TYPES);
        writer.addImport("UserAgent", "__UserAgent", TypeScriptDependency.SMITHY_TYPES);
        writer.writeDocs(
            "The provider populating default tracking information to be sent with `user-agent`, "
                + "`x-amz-user-agent` header\n@internal"
        );
        writer.write("defaultUserAgentProvider?: Provider<__UserAgent>;\n");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        switch (target) {
            case NODE:
                return MapUtils.of(
                    "defaultUserAgentProvider",
                    writer -> {
                        writer.addDependency(AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE.dependency);
                        writer.addImport(
                            "createDefaultUserAgentProvider",
                            "createDefaultUserAgentProvider",
                            AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE
                        );
                        writer.addIgnoredDefaultImport(
                            "packageInfo",
                            "./package.json",
                            "package.json will be imported from dist folders"
                        );
                        writeDefaultUserAgentProvider(writer, settings, model);
                    },
                    "userAgentAppId",
                    writer -> {
                        writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                        writer.addImport(
                            "loadConfig",
                            "loadNodeConfig",
                            TypeScriptDependency.NODE_CONFIG_PROVIDER
                        );
                        writer.addDependency(AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE);
                        writer.addImport(
                            "NODE_APP_ID_CONFIG_OPTIONS",
                            "NODE_APP_ID_CONFIG_OPTIONS",
                            AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE
                        );
                        writer.write(
                            "loadNodeConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)"
                        );
                    }
                );
            case BROWSER:
                return MapUtils.of(
                    "defaultUserAgentProvider",
                    writer -> {
                        writer.addDependency(AwsDependency.AWS_SDK_UTIL_USER_AGENT_BROWSER.dependency);
                        writer.addImport(
                            "createDefaultUserAgentProvider",
                            "createDefaultUserAgentProvider",
                            AwsDependency.AWS_SDK_UTIL_USER_AGENT_BROWSER
                        );
                        writer.addIgnoredDefaultImport(
                            "packageInfo",
                            "./package.json",
                            "package.json will be imported from dist folders"
                        );
                        writeDefaultUserAgentProvider(writer, settings, model);
                    }
                );
            default:
                return Collections.emptyMap();
        }
    }

    private void writeDefaultUserAgentProvider(TypeScriptWriter writer, TypeScriptSettings settings, Model model) {
        writer.write(
            "createDefaultUserAgentProvider({"
                // serviceId is optional in defaultUserAgent. serviceId exists only for AWS services
                + (isAwsService(settings, model) ? "serviceId: clientSharedValues.serviceId, " : "")
                + "clientVersion: packageInfo.version})"
        );
    }
}
