package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.not;

import org.junit.jupiter.api.Test;
import software.amazon.smithy.build.MockManifest;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptClientCodegenPlugin;
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
        new TypeScriptClientCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                   containsString(TypeScriptDependency.NODE_CONFIG_PROVIDER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.CONFIG_RESOLVER.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("serviceId?:"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("region?:"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("useDualstackEndpoint?:"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("useFipsEndpoint?:"));


        // Check config files
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.shared.ts").get(), containsString("serviceId: config?.serviceId ?? \"Not Same\""));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), containsString("region: config?.region ?? invalidProvider"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), containsString("region: config?.region ?? loadNodeConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), containsString(
                "useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT))"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), containsString(
                "useDualstackEndpoint: config?.useDualstackEndpoint ?? loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, profileConfig)"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), containsString(
                "useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), containsString(
                "useFipsEndpoint: config?.useFipsEndpoint ?? loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, profileConfig),"));
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
        new TypeScriptClientCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.NODE_CONFIG_PROVIDER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.CONFIG_RESOLVER.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), not(containsString("serviceId?:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("region?:"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), not(containsString("useDualstackEndpoint?:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), not(containsString("useFipsEndpoint?:")));

        // Check config files
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.shared.ts").get(), not(containsString("serviceId:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), containsString("region: config?.region ?? invalidProvider"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), containsString("region: config?.region ?? loadNodeConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), not(containsString("useDualstackEndpoint:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), not(containsString("useDualstackEndpoint:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), not(containsString("useFipsEndpoint:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), not(containsString("useFipsEndpoint:")));
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
        new TypeScriptClientCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.NODE_CONFIG_PROVIDER.packageName));
        assertThat(manifest.getFileString("package.json").get(),
                containsString(TypeScriptDependency.CONFIG_RESOLVER.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("serviceId?:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("region?:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("useDualstackEndpoint?:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("useFipsEndpoint?:")));

        // Check config files
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.shared.ts").get(), not(containsString("serviceId:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), not(containsString("region:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), not(containsString("region:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), not(containsString("useDualstackEndpoint:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), not(containsString("useDualstackEndpoint:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), not(containsString("useFipsEndpoint:")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(), not(containsString("useFipsEndpoint:")));
    }
}
