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

/**
 * Add client plubins and configs to support injecting user agent.
 */
public class AddUserAgentDependency implements TypeScriptIntegration {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_USER_AGENT.dependency, "UserAgent").build());
    }

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        writer.addImport("Provider", "Provider", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.addImport("UserAgent", "__UserAgent", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.writeDocs("The provider populating default tracking information to be sent with `user-agent`, "
                + "`x-amz-user-agent` header\n@internal");
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
                        "defaultUserAgentProvider", writer -> {
                            writer.addDependency(AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE.dependency);
                            writer.addImport("defaultUserAgent", "defaultUserAgent",
                                    AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE.packageName);
                            writer.addDefaultImport("packageInfo", "./package.json");
                            writer.write("defaultUserAgentProvider: defaultUserAgent({serviceId: "
                                    + "ClientSharedValues.serviceId, clientVersion: packageInfo.version}),");
                        }
                );
            case BROWSER:
                return MapUtils.of(
                        "defaultUserAgentProvider", writer -> {
                            writer.addDependency(AwsDependency.AWS_SDK_UTIL_USER_AGENT_BROWSER.dependency);
                            writer.addImport("defaultUserAgent", "defaultUserAgent",
                                    AwsDependency.AWS_SDK_UTIL_USER_AGENT_BROWSER.packageName);
                            writer.addDefaultImport("packageInfo", "./package.json");
                            writer.write("defaultUserAgentProvider: defaultUserAgent({serviceId: "
                                    + "ClientSharedValues.serviceId, clientVersion: packageInfo.version}),");
                        }
                );
            default:
                return Collections.emptyMap();
        }
    }
}
