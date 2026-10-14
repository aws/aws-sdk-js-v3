/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.not;

import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import org.junit.jupiter.api.Test;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.protocols.RestJson1Trait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;

/**
 * JS-7140: verifies the per-service socket-timeout tier decision, keyed by
 * {@code sdkId}, and the requestHandler expressions both writers emit.
 * Enforcement (the timeout firing) is covered by the smithy-typescript handler tests.
 */
public class AddSocketTimeoutCustomizationsTest {

    private static ServiceShape serviceWithSdkId(String sdkId) {
        return serviceBuilder(sdkId).build();
    }

    private static ServiceShape http2ServiceWithSdkId(String sdkId) {
        return serviceBuilder(sdkId)
            .addTrait(RestJson1Trait.builder().http(List.of("h2", "http/1.1")).eventStreamHttp(List.of("h2")).build())
            .build();
    }

    private static ServiceShape.Builder serviceBuilder(String sdkId) {
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
            );
    }

    private static Model modelWith(ServiceShape service) {
        return Model.assembler()
            .discoverModels(AddSocketTimeoutCustomizationsTest.class.getClassLoader())
            .addShape(service)
            .assemble()
            .unwrap();
    }

    private static boolean emits(LanguageTarget target, ServiceShape service) {
        return new AddSocketTimeoutCustomizations().emitsFor(target, modelWith(service), service);
    }

    private static String render(Consumer<TypeScriptWriter> consumer) {
        TypeScriptWriter writer = new TypeScriptWriter("runtimeConfig");
        consumer.accept(writer);
        return writer.toString();
    }

    /** Renders AddHttp2Dependency's Node requestHandler for a service. */
    private static String renderHttp2(ServiceShape service) {
        Model model = modelWith(service);
        TypeScriptSettings settings = TypeScriptSettings.from(
            model,
            Node.objectNodeBuilder()
                .withMember("service", Node.from(service.getId().toString()))
                .withMember("package", Node.from("example"))
                .withMember("packageVersion", Node.from("1.0.0"))
                .build()
        );
        Map<String, Consumer<TypeScriptWriter>> writers = new AddHttp2Dependency()
            .getRuntimeConfigWriters(settings, model, null, LanguageTarget.NODE);
        return render(writers.get("requestHandler"));
    }

    @Test
    public void fullyExemptServiceReturnsSentinel() {
        // S3 is fully exempt (-1) in the shared artifact: streaming blob input.
        assertThat(
            AddSocketTimeoutCustomizations.resolveTimeoutMs(serviceWithSdkId("S3")),
            equalTo(AddSocketTimeoutCustomizations.FULLY_EXEMPT)
        );
    }

    @Test
    public void partialTierServiceReturns15Minutes() {
        // SQS is partial (900000): long-poll ReceiveMessage.
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
    public void emitsForNodeAndBrowserOnNonExemptService() {
        ServiceShape sqs = serviceWithSdkId("SQS");
        assertThat(emits(LanguageTarget.NODE, sqs), equalTo(true));
        assertThat(emits(LanguageTarget.BROWSER, sqs), equalTo(true));
    }

    @Test
    public void doesNotEmitForExemptReactNativeOrSharedTargets() {
        assertThat(emits(LanguageTarget.NODE, serviceWithSdkId("S3")), equalTo(false));
        assertThat(emits(LanguageTarget.BROWSER, serviceWithSdkId("S3")), equalTo(false));
        assertThat(emits(LanguageTarget.REACT_NATIVE, serviceWithSdkId("SQS")), equalTo(false));
        assertThat(emits(LanguageTarget.SHARED, serviceWithSdkId("SQS")), equalTo(false));
    }

    @Test
    public void leavesNodeHttp2ServicesToAddHttp2Dependency() {
        // Kinesis is h2 on Node: AddHttp2Dependency owns its requestHandler.
        ServiceShape kinesis = http2ServiceWithSdkId("Kinesis");
        assertThat(emits(LanguageTarget.NODE, kinesis), equalTo(false));
        assertThat(emits(LanguageTarget.BROWSER, kinesis), equalTo(true));
    }

    @Test
    public void leavesBrowserWebsocketServicesToAddWebsocketPlugin() {
        ServiceShape rekognition = serviceWithSdkId("RekognitionStreaming");
        assertThat(emits(LanguageTarget.BROWSER, rekognition), equalTo(false));
        assertThat(emits(LanguageTarget.NODE, rekognition), equalTo(true));
    }

    @Test
    public void nodeWriterWrapsInputWithGatedHelper() {
        String output = render(AddSocketTimeoutCustomizations.requestHandlerWriter(LanguageTarget.NODE, 900_000));
        assertThat(output, containsString("NodeHttpHandler as RequestHandler"));
        assertThat(output, containsString("withDefaultSocketTimeout } from \"@aws-sdk/core/client\""));
        assertThat(
            output,
            containsString(
                "RequestHandler.create(withDefaultSocketTimeout(config?.requestHandler ?? defaultConfigProvider, 900000, \"defaultSocketTimeout\"))"
            )
        );
    }

    @Test
    public void browserWriterUsesFetchHandler() {
        String output = render(AddSocketTimeoutCustomizations.requestHandlerWriter(LanguageTarget.BROWSER, 300_000));
        assertThat(output, containsString("FetchHttpHandler as RequestHandler"));
        assertThat(
            output,
            containsString(
                "RequestHandler.create(withDefaultSocketTimeout(config?.requestHandler ?? defaultConfigProvider, 300000))"
            )
        );
    }

    @Test
    public void http2WriterAppliesTierThroughSeparateIdleOption() {
        String output = renderHttp2(http2ServiceWithSdkId("Kinesis"));
        assertThat(output, containsString("NodeHttp2Handler as RequestHandler"));
        assertThat(output, containsString("disableConcurrentStreams: true"));
        assertThat(
            output,
            containsString("RequestHandler.create(withDefaultSocketTimeout(config?.requestHandler ?? (async () => ({")
        );
        assertThat(output, containsString("})), 900000, \"defaultSocketTimeout\"))"));
    }

    @Test
    public void http2WriterIsUnchangedForExemptService() {
        String output = renderHttp2(http2ServiceWithSdkId("Transcribe Streaming"));
        assertThat(output, containsString("RequestHandler.create(config?.requestHandler ?? (async () => ({"));
        assertThat(output, not(containsString("withDefaultSocketTimeout")));
    }

    @Test
    public void http2WriterRunsAfterSmithyHttp2Integration() {
        assertThat(
            new AddHttp2Dependency().runAfter(),
            hasItem("software.amazon.smithy.typescript.codegen.integration.AddHttp2Dependency")
        );
    }
}
