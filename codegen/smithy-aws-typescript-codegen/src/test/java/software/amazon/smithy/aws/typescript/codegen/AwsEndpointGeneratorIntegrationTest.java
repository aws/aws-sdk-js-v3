/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import software.amazon.smithy.build.MockManifest;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptClientCodegenPlugin;
import software.amazon.smithy.typescript.codegen.TypeScriptServerCodegenPlugin;

@Disabled
public class AwsEndpointGeneratorIntegrationTest {
    @Test
    public void awsClient() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("NotSame.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        MockManifest manifest = new MockManifest();
        PluginContext context = PluginContext.builder()
            .pluginClassLoader(getClass().getClassLoader())
            .model(model)
            .fileManifest(manifest)
            .settings(
                Node.objectNodeBuilder()
                    .withMember("service", Node.from("smithy.example#OriginalName"))
                    .withMember("package", Node.from("example"))
                    .withMember("packageVersion", Node.from("1.0.0"))
                    .build()
            )
            .build();
        new TypeScriptClientCodegenPlugin().execute(context);

        assertTrue(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/endpoints.ts").isPresent());
    }

    @Test
    public void genericClient() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("NonAwsService.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        MockManifest manifest = new MockManifest();
        PluginContext context = PluginContext.builder()
            .pluginClassLoader(getClass().getClassLoader())
            .model(model)
            .fileManifest(manifest)
            .settings(
                Node.objectNodeBuilder()
                    .withMember("service", Node.from("smithy.example#ExampleService"))
                    .withMember("package", Node.from("example"))
                    .withMember("packageVersion", Node.from("1.0.0"))
                    .build()
            )
            .build();
        new TypeScriptClientCodegenPlugin().execute(context);

        assertFalse(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/endpoints.ts").isPresent());
    }

    @Test
    public void serverSdk() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("SsdkExample.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        MockManifest manifest = new MockManifest();
        PluginContext context = PluginContext.builder()
            .pluginClassLoader(getClass().getClassLoader())
            .model(model)
            .fileManifest(manifest)
            .settings(
                Node.objectNodeBuilder()
                    .withMember("service", Node.from("smithy.example#SsdkExample"))
                    .withMember("package", Node.from("example"))
                    .withMember("packageVersion", Node.from("1.0.0"))
                    .withMember("disableDefaultValidation", Node.from(true))
                    .build()
            )
            .build();
        new TypeScriptServerCodegenPlugin().execute(context);

        assertFalse(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/endpoints.ts").isPresent());
    }
}
