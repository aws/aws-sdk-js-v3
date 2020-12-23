package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

import org.junit.jupiter.api.Test;
import software.amazon.smithy.build.MockManifest;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenPlugin;

public class AddAwsRuntimeConfigTest {
    @Test
    public void addsAwsRuntimeConfigSettings() {
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

        // Check that one of the many dependencies was added.
        assertThat(manifest.getFileString("package.json").get(),
                   containsString(AwsDependency.CREDENTIAL_PROVIDER_NODE.packageName));

        // Check that both the config files were updated.
        assertThat(manifest.getFileString("runtimeConfig.ts").get(), containsString("credentialDefaultProvider"));
        assertThat(manifest.getFileString("runtimeConfig.browser.ts").get(), containsString("invalidProvider"));

        // Check that the dependency interface was updated.
        assertThat(manifest.getFileString("NotSameClient.ts").get(), containsString("credentialDefaultProvider?"));
    }
}
