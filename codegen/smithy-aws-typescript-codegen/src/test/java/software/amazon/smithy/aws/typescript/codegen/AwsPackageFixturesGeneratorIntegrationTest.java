package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import software.amazon.smithy.build.MockManifest;
import software.amazon.smithy.build.PluginContext;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenPlugin;

public class AwsPackageFixturesGeneratorIntegrationTest {
    @Test
    public void expandsPackageFixtureFiles() {
        Model model = Model.assembler()
                .addImport(getClass().getResource("NotSame.smithy"))
                .discoverModels()
                .assemble()
                .unwrap();
        MockManifest manifest = new MockManifest();
        PluginContext context = PluginContext.builder()
                .model(model)
                .fileManifest(manifest)
                .settings(Node.objectNodeBuilder()
                        .withMember("service", Node.from("smithy.example#OriginalName"))
                        .withMember("package", Node.from("example"))
                        .withMember("packageVersion", Node.from("1.0.0"))
                        .build())
                .build();

        new TypeScriptCodegenPlugin().execute(context);

        Assertions.assertTrue(manifest.hasFile("LICENSE"));
        Assertions.assertTrue(manifest.hasFile(".gitignore"));
        Assertions.assertTrue(manifest.hasFile(".npmignore"));
        Assertions.assertTrue(manifest.hasFile("README.md"));

        String readme = manifest.getFileString("README.md").get();
        assertThat(readme, containsString("AWS SDK for JavaScript NotSame Client"));    // Description
        assertThat(readme, containsString("`NotSameClient`"));  // Modular Client name
        assertThat(readme, containsString("`GetFooCommand`"));  // Command name
        assertThat(readme, containsString("AWS.NotSame"));      // v2 compatible client name
        assertThat(readme, containsString("client.getFoo"));    // v2 compatible operation name                        
    }
}
