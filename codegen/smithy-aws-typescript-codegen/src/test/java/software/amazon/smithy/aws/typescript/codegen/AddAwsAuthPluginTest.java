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

public class AddAwsAuthPluginTest {
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
                        .withMember("useLegacyAuth", Node.from(true))
                        .build())
                .build();
        new TypeScriptClientCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                containsString(AwsDependency.CREDENTIAL_PROVIDER_NODE.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("credentialDefaultProvider?"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), not(containsString("signingName")));

        // Check config files
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), containsString("Credential is missing"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.shared.ts").get(), not(containsString("signingName:")));

        // Check the config resolution and middleware plugin
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("resolveAwsAuthConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts").get(), containsString("getAwsAuthPlugin"));
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
                        .withMember("useLegacyAuth", Node.from(true))
                        .build())
                .build();
        new TypeScriptClientCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                containsString(AwsDependency.CREDENTIAL_PROVIDER_NODE.packageName));

        // Check config interface fields
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("credentialDefaultProvider?"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("signingName?"));

        // Check config files
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), containsString("Credential is missing"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.shared.ts").get(), containsString("signingName:"));

        // Check the config resolution and middleware plugin
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("resolveSigV4AuthConfig"));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleSigV4Client.ts").get(), containsString("getSigV4AuthPlugin"));
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
                        .withMember("useLegacyAuth", Node.from(true))
                        .build())
                .build();
        new TypeScriptClientCodegenPlugin().execute(context);

        // Check dependencies
        assertThat(manifest.getFileString("package.json").get(),
                not(containsString(AwsDependency.CREDENTIAL_PROVIDER_NODE.packageName)));

        // Check config interface fields
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("credentialDefaultProvider?")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("signingName?")));

        // Check config files
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.ts").get(),
                not(containsString("decorateDefaultCredentialProvider")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.browser.ts").get(), not(containsString("Credential is missing")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/runtimeConfig.shared.ts").get(), not(containsString("signingName:")));

        // Check the config resolution and middleware plugin
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("resolveSigV4AuthConfig")));
        assertThat(manifest.getFileString(CodegenUtils.SOURCE_FOLDER + "/SsdkExampleClient.ts").get(), not(containsString("resolveAwsV4AuthConfig")));
    }
}
