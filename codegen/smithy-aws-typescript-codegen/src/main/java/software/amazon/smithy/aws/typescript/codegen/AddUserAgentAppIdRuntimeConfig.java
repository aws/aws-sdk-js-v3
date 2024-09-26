
/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

 package software.amazon.smithy.aws.typescript.codegen;

 import java.util.HashMap;
 import java.util.Map;
 import java.util.function.Consumer;
 import software.amazon.smithy.codegen.core.SymbolProvider;
 import software.amazon.smithy.model.Model;
 import software.amazon.smithy.model.shapes.ServiceShape;
 import software.amazon.smithy.typescript.codegen.LanguageTarget;
 import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
 import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
 import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
 import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
 import software.amazon.smithy.utils.SmithyInternalApi;

 @SmithyInternalApi
 public final class AddUserAgentAppIdRuntimeConfig implements TypeScriptIntegration {

     @Override
     public void addConfigInterfaceFields(
         TypeScriptSettings settings,
         Model model,
         SymbolProvider symbolProvider,
         TypeScriptWriter writer
     ) {
         writer.writeDocs("The application ID used to identify the SDK client.");
         writer.write("userAgentAppId?: string;\n");
     }

     @Override
     public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
         TypeScriptSettings settings,
         Model model,
         SymbolProvider symbolProvider,
         LanguageTarget target
     ) {
         ServiceShape service = settings.getService(model);
         Map<String, Consumer<TypeScriptWriter>> runtimeConfigs = new HashMap<>();

         switch (target) {
             // browser case not required since appId defaults to undefined
             case NODE:
                 runtimeConfigs.put("userAgentAppId", writer -> {
                     writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                     writer.addImport("loadConfig", "loadNodeConfig", TypeScriptDependency.NODE_CONFIG_PROVIDER);
                     writer.addDependency(AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE);
                     writer.addImport("NODE_APP_ID_CONFIG_OPTIONS", "NODE_APP_ID_CONFIG_OPTIONS",
                     AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE);
                     writer.write("loadNodeConfig(NODE_APP_ID_CONFIG_OPTIONS)");
                 });
                 break;
             default:
                 break;
         }

         return runtimeConfigs;
     }
 }
