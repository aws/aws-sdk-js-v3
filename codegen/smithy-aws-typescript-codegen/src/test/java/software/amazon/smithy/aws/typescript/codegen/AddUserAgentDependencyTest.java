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

public class AddUserAgentDependencyTest {

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

        // Check dependencies
        assertThat(
            manifest.getFileString("package.json").get(),
            containsString(AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE.packageName)
        );

        // Check config interface fields
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(),
            containsString("defaultUserAgentProvider?")
        );

        // Check config files
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(),
            containsString("defaultUserAgent")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(),
            containsString("packageInfo.version")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(),
            containsString("clientSharedValues.serviceId")
        );

        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(),
            containsString("defaultUserAgent")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(),
            containsString("packageInfo.version")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(),
            containsString("clientSharedValues.serviceId")
        );

        // Check the config resolution and middleware plugin
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(),
            containsString("resolveUserAgentConfig")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(),
            containsString("getUserAgentPlugin")
        );
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

        // Check dependencies
        assertThat(
            manifest.getFileString("package.json").get(),
            containsString(AwsDependency.AWS_SDK_UTIL_USER_AGENT_NODE.packageName)
        );

        // Check config interface fields
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/ExampleServiceClient.ts").get(),
            containsString("defaultUserAgentProvider?")
        );

        // Check config files
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(),
            containsString("defaultUserAgent")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(),
            containsString("packageInfo.version")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(),
            not(containsString("ClientSharedValues.serviceId"))
        );

        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(),
            containsString("defaultUserAgent")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(),
            containsString("packageInfo.version")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(),
            not(containsString("ClientSharedValues.serviceId"))
        );

        // Check the config resolution and middleware plugin
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/ExampleServiceClient.ts").get(),
            containsString("resolveUserAgentConfig")
        );
        assertThat(
            manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/ExampleServiceClient.ts").get(),
            containsString("getUserAgentPlugin")
        );
    }
}
