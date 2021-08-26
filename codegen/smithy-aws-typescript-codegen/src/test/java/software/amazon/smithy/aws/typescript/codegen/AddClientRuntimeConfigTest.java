package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

import org.junit.jupiter.api.Test;
import software.amazon.smithy.build.MockManifest;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenPlugin;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;

public class AddClientRuntimeConfigTest {
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
                .settings(Node.objectNodeBuilder()
                                  .withMember("service", Node.from("smithy.example#OriginalName"))
                                  .withMember("package", Node.from("example"))
                                  .withMember("packageVersion", Node.from("1.0.0"))
                                  .build())
                .build();
        new TypeScriptCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                   containsString(AwsDependency.NODE_CONFIG_PROVIDER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.CONFIG_RESOLVER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.MIDDLEWARE_RETRY.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString("NotSameClient.ts").get(), containsString("maxAttempts?:"));
        assertThat(manifest.getFileString("NotSameClient.ts").get(), containsString("retryMode?:"));
        assertThat(manifest.getFileString("NotSameClient.ts").get(), containsString("logger?:"));

        // Check config files
        assertThat(manifest.getFileString("runtimeConfig.shared.ts").get(), containsString("logger:"));

        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("maxAttempts:"));
        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("retryMode:"));

        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("maxAttempts:"));
        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("retryMode:"));
    }

    @Test
    public void sigV4GenericClient() {
        Model model = Model.assembler()
                .addImport(getClass().getResource("SsdkExampleSigV4.smithy"))
                .discoverModels()
                .assemble()
                .unwrap();
        MockManifest manifest = new MockManifest();
        PluginContext context = PluginContext.builder()
                .pluginClassLoader(getClass().getClassLoader())
                .model(model)
                .fileManifest(manifest)
                .settings(Node.objectNodeBuilder()
                        .withMember("service", Node.from("smithy.example#SsdkExampleSigV4"))
                        .withMember("package", Node.from("example"))
                        .withMember("packageVersion", Node.from("1.0.0"))
                        .build())
                .build();
        new TypeScriptCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                containsString(AwsDependency.NODE_CONFIG_PROVIDER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.CONFIG_RESOLVER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.MIDDLEWARE_RETRY.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString("SsdkExampleSigV4Client.ts").get(), containsString("maxAttempts?:"));
        assertThat(manifest.getFileString("SsdkExampleSigV4Client.ts").get(), containsString("retryMode?:"));
        assertThat(manifest.getFileString("SsdkExampleSigV4Client.ts").get(), containsString("logger?:"));

        // Check config files
        assertThat(manifest.getFileString("runtimeConfig.shared.ts").get(), containsString("logger:"));

        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("maxAttempts:"));
        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("retryMode:"));

        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("maxAttempts:"));
        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("retryMode:"));
    }

    @Test
    public void notSigV4GenericClient() {
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
                .settings(Node.objectNodeBuilder()
                        .withMember("service", Node.from("smithy.example#SsdkExample"))
                        .withMember("package", Node.from("example"))
                        .withMember("packageVersion", Node.from("1.0.0"))
                        .build())
                .build();
        new TypeScriptCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                containsString(AwsDependency.NODE_CONFIG_PROVIDER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.CONFIG_RESOLVER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.MIDDLEWARE_RETRY.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString("SsdkExampleClient.ts").get(), containsString("maxAttempts?:"));
        assertThat(manifest.getFileString("SsdkExampleClient.ts").get(), containsString("retryMode?:"));
        assertThat(manifest.getFileString("SsdkExampleClient.ts").get(), containsString("logger?:"));

        // Check config files
        assertThat(manifest.getFileString("runtimeConfig.shared.ts").get(), containsString("logger:"));

        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("maxAttempts:"));
        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("retryMode:"));

        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("maxAttempts:"));
        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("retryMode:"));
    }
}
