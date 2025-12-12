/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.jupiter.api.Test;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;

public class AwsServiceIdIntegrationTest {
    @Test
    public void testSomeLibraryMethod() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("NotSame.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        Shape service = model.expectShape((ShapeId.from("smithy.example#OriginalName")));
        AwsServiceIdIntegration integration = new AwsServiceIdIntegration();
        TypeScriptSettings settings = new TypeScriptSettings();
        settings.setService(ShapeId.from("smithy.example#OriginalName"));
        SymbolProvider provider = TypeScriptSettings.ArtifactType.CLIENT.createSymbolProvider(model, settings);
        SymbolProvider decorated = integration.decorateSymbolProvider(model, settings, provider);
        Symbol symbol = decorated.toSymbol(service);

        assertThat(symbol.getName(), equalTo("NotSameClient"));
        assertThat(symbol.getNamespace(), equalTo("./" + CodegenUtils.SOURCE_FOLDER + "/NotSameClient"));
        assertThat(symbol.getDefinitionFile(), equalTo("./" + CodegenUtils.SOURCE_FOLDER + "/NotSameClient.ts"));
    }

    @Test
    public void testFirstNotCapitalizedServiceId() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("firstNotCapitalized.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        Shape service = model.expectShape((ShapeId.from("smithy.example#OriginalName")));
        AwsServiceIdIntegration integration = new AwsServiceIdIntegration();
        TypeScriptSettings settings = new TypeScriptSettings();
        settings.setService(ShapeId.from("smithy#Placeholder"));
        SymbolProvider provider = TypeScriptSettings.ArtifactType.CLIENT.createSymbolProvider(model, settings);
        SymbolProvider decorated = integration.decorateSymbolProvider(model, settings, provider);
        Symbol symbol = decorated.toSymbol(service);

        assertThat(symbol.getName(), equalTo("FirstNotCapitalizedClient"));
        assertThat(symbol.getNamespace(), equalTo("./" + CodegenUtils.SOURCE_FOLDER + "/FirstNotCapitalizedClient"));
        assertThat(
            symbol.getDefinitionFile(),
            equalTo("./" + CodegenUtils.SOURCE_FOLDER + "/FirstNotCapitalizedClient.ts")
        );
    }

    @Test
    public void testRestNotCapitalizedServiceId() {
        Model model = Model.assembler()
            .addImport(getClass().getResource("Restnotcapitalized.smithy"))
            .discoverModels()
            .assemble()
            .unwrap();
        Shape service = model.expectShape((ShapeId.from("smithy.example#OriginalName")));
        AwsServiceIdIntegration integration = new AwsServiceIdIntegration();
        TypeScriptSettings settings = new TypeScriptSettings();
        settings.setService(ShapeId.from("smithy#Placeholder"));
        SymbolProvider provider = TypeScriptSettings.ArtifactType.CLIENT.createSymbolProvider(model, settings);
        SymbolProvider decorated = integration.decorateSymbolProvider(model, settings, provider);
        Symbol symbol = decorated.toSymbol(service);

        assertThat(symbol.getName(), equalTo("RestNotCapitalizedClient"));
        assertThat(symbol.getNamespace(), equalTo("./" + CodegenUtils.SOURCE_FOLDER + "/RestNotCapitalizedClient"));
        assertThat(
            symbol.getDefinitionFile(),
            equalTo("./" + CodegenUtils.SOURCE_FOLDER + "/RestNotCapitalizedClient.ts")
        );
    }
}
