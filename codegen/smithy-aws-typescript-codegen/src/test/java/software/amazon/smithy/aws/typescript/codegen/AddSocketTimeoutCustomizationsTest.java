/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;

import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import org.junit.jupiter.api.Test;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;

public class AddSocketTimeoutCustomizationsTest {

    private static ServiceShape serviceWithSdkId(String sdkId) {
        return ServiceShape.builder()
            .id(ShapeId.from("smithy.example#Service"))
            .version("2026-01-01")
            .addTrait(
                ServiceTrait.builder()
                    .sdkId(sdkId)
                    .arnNamespace("example")
                    .cloudFormationName("Example")
                    .cloudTrailEventSource("example.amazonaws.com")
                    .endpointPrefix("example")
                    .build()
            )
            .build();
    }

    private static Model modelWith(ServiceShape service) {
        return Model.assembler()
            .discoverModels(AddSocketTimeoutCustomizationsTest.class.getClassLoader())
            .addShape(service)
            .assemble()
            .unwrap();
    }

    private static TypeScriptSettings settingsFor(Model model, ServiceShape service) {
        return TypeScriptSettings.from(
            model,
            Node.objectNodeBuilder()
                .withMember("service", Node.from(service.getId().toString()))
                .withMember("package", Node.from("example"))
                .withMember("packageVersion", Node.from("1.0.0"))
                .build()
        );
    }

    private static Map<String, Consumer<TypeScriptWriter>> writers(LanguageTarget target, ServiceShape service) {
        Model model = modelWith(service);
        return new AddSocketTimeoutCustomizations()
            .getRuntimeConfigWriters(settingsFor(model, service), model, null, target);
    }

    private static boolean emits(LanguageTarget target, ServiceShape service) {
        return !writers(target, service).isEmpty();
    }

    private static String render(Consumer<TypeScriptWriter> consumer) {
        TypeScriptWriter writer = new TypeScriptWriter("runtimeConfig");
        consumer.accept(writer);
        return writer.toString();
    }

    @Test
    public void fullyExemptServiceReturnsSentinel() {
        assertThat(
            AddSocketTimeoutCustomizations.resolveTimeoutMs(serviceWithSdkId("S3")),
            equalTo(AddSocketTimeoutCustomizations.FULLY_EXEMPT)
        );
    }

    @Test
    public void partialTierServiceReturns15Minutes() {
        assertThat(AddSocketTimeoutCustomizations.resolveTimeoutMs(serviceWithSdkId("SQS")), equalTo(900_000));
    }

    @Test
    public void unlistedServiceReturnsGeneralDefault() {
        assertThat(
            AddSocketTimeoutCustomizations.resolveTimeoutMs(serviceWithSdkId("CloudTrail")),
            equalTo(AddSocketTimeoutCustomizations.DEFAULT_SOCKET_TIMEOUT_MS)
        );
        assertThat(AddSocketTimeoutCustomizations.DEFAULT_SOCKET_TIMEOUT_MS, equalTo(300_000));
    }

    @Test
    public void serviceWithoutSdkIdFallsBackToGeneralDefault() {
        ServiceShape noTrait = ServiceShape.builder()
            .id(ShapeId.from("smithy.example#NoTrait"))
            .version("2026-01-01")
            .build();
        assertThat(
            AddSocketTimeoutCustomizations.resolveTimeoutMs(noTrait),
            equalTo(AddSocketTimeoutCustomizations.DEFAULT_SOCKET_TIMEOUT_MS)
        );
    }

    @Test
    public void emitsForNodeOnNonExemptService() {
        assertThat(emits(LanguageTarget.NODE, serviceWithSdkId("SQS")), equalTo(true));
    }

    @Test
    public void doesNotEmitForExemptServiceOrNonNodeTargets() {
        assertThat(emits(LanguageTarget.NODE, serviceWithSdkId("S3")), equalTo(false));
        assertThat(emits(LanguageTarget.BROWSER, serviceWithSdkId("SQS")), equalTo(false));
        assertThat(emits(LanguageTarget.REACT_NATIVE, serviceWithSdkId("SQS")), equalTo(false));
        assertThat(emits(LanguageTarget.SHARED, serviceWithSdkId("SQS")), equalTo(false));
    }

    @Test
    public void writesOnlyDefaultSocketTimeout() {
        assertThat(
            writers(LanguageTarget.NODE, serviceWithSdkId("SQS")).keySet(),
            equalTo(Set.of("defaultSocketTimeout"))
        );
    }

    @Test
    public void nodeWriterPassesInputToGatedHelper() {
        String output = render(AddSocketTimeoutCustomizations.defaultSocketTimeoutWriter(900_000));
        assertThat(output, containsString("getDefaultSocketTimeout } from \"@aws-sdk/core/client\""));
        assertThat(output, containsString("getDefaultSocketTimeout(config?.requestHandler, 900_000)"));
    }

    @Test
    public void formatsTimeoutWithNumericSeparators() {
        assertThat(AddSocketTimeoutCustomizations.withNumericSeparators(300_000), equalTo("300_000"));
        assertThat(AddSocketTimeoutCustomizations.withNumericSeparators(1_800_000), equalTo("1_800_000"));
        assertThat(AddSocketTimeoutCustomizations.withNumericSeparators(500), equalTo("500"));
    }
}
