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

public class AddBuiltinPluginsTest {
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

        // Check the config resolution and middleware plugin
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("resolveRegionConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("resolveEndpointConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("resolveRetryConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("getRetryPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("getContentLengthPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("getHostHeaderPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("getLoggerPlugin"));
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

        // Check the config resolution and middleware plugin
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("resolveRegionConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("resolveEndpointConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("resolveRetryConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("getRetryPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("getContentLengthPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("getHostHeaderPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("getLoggerPlugin"));
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

        // Check the config resolution and middleware plugin
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("resolveRegionConfig")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), containsString("resolveEndpointConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), containsString("resolveRetryConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), containsString("getRetryPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), containsString("getContentLengthPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), containsString("getHostHeaderPlugin"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), containsString("getLoggerPlugin"));
    }
}
