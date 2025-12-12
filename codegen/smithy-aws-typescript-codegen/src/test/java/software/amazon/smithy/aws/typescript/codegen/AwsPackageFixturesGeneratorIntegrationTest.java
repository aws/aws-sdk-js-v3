/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import software.amazon.smithy.build.MockManifest;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.typescript.codegen.TypeScriptClientCodegenPlugin;
import software.amazon.smithy.typescript.codegen.TypeScriptServerCodegenPlugin;

public class AwsPackageFixturesGeneratorIntegrationTest {
    @Test
    public void awsClient() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("NotSame.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        MockManifest manifest = new MockManifest();
        PluginContext context = PluginContext.builder()
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

        assertTrue(manifest.hasFile("LICENSE"));
        assertTrue(manifest.hasFile("README.md"));

        String readme = manifest.getFileString("README.md").get();
        assertThat(readme, containsString("AWS SDK for JavaScript NotSame Client")); // Description
        assertThat(readme, containsString("`NotSameClient`")); // Modular Client name
        assertThat(readme, containsString("`GetFooCommand`")); // Command name
        assertThat(readme, containsString("AWS.NotSame")); // v2 compatible client name
        assertThat(readme, containsString("client.getFoo")); // v2 compatible operation name                        
    }

    @Test
    public void genericClient() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("SsdkExample.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        MockManifest manifest = new MockManifest();
        PluginContext context = PluginContext.builder()
            .model(model)
            .fileManifest(manifest)
            .settings(
                Node.objectNodeBuilder()
                    .withMember("service", Node.from("smithy.example#SsdkExample"))
                    .withMember("package", Node.from("example"))
                    .withMember("packageVersion", Node.from("1.0.0"))
                    .build()
            )
            .build();

        new TypeScriptClientCodegenPlugin().execute(context);

        assertTrue(manifest.hasFile("LICENSE"));
        assertTrue(manifest.hasFile(".gitignore"));
        assertFalse(manifest.hasFile("README.md"));
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

        assertTrue(manifest.hasFile("LICENSE"));
        assertTrue(manifest.hasFile(".gitignore"));
        assertFalse(manifest.hasFile("README.md"));
    }
}
