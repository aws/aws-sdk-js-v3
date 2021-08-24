package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.not;

import org.junit.jupiter.api.Test;
import software.amazon.smithy.build.MockManifest;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenPlugin;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;

public class AddAwsRuntimeConfigTest {
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

        // Check config interface fields
        assertThat(manifest.getFileString("NotSameClient.ts").get(), containsString("serviceId?:"));
        assertThat(manifest.getFileString("NotSameClient.ts").get(), containsString("region?:"));

        // Check config files
        assertThat(manifest.getFileString("runtimeConfig.shared.ts").get(), containsString("serviceId: config?.serviceId ?? \"Not Same\""));
        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("region: config?.region ?? invalidProvider"));
        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("region: config?.region ?? loadNodeConfig"));
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

        // Check config interface fields
        assertThat(manifest.getFileString("SsdkExampleSigV4Client.ts").get(), not(containsString("serviceId?:")));
        assertThat(manifest.getFileString("SsdkExampleSigV4Client.ts").get(), containsString("region?:"));

        // Check config files
        assertThat(manifest.getFileString("runtimeConfig.shared.ts").get(), not(containsString("serviceId:")));
        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("region: config?.region ?? invalidProvider"));
        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("region: config?.region ?? loadNodeConfig"));
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

        // Check config interface fields
        assertThat(manifest.getFileString("SsdkExampleClient.ts").get(), not(containsString("serviceId?:")));
        assertThat(manifest.getFileString("SsdkExampleClient.ts").get(), not(containsString("region?:")));

        // Check config files
        assertThat(manifest.getFileString("runtimeConfig.shared.ts").get(), not(containsString("serviceId:")));
        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), not(containsString("region:")));
        assertThat(manifest.getFileString("runtimeConfig.ts").get(), not(containsString("region:")));
    }
}
