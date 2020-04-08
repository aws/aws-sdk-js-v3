package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;

import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.EventStreamIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;

public class AddEventStreamSigningDependency implements TypeScriptIntegration {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_EVENTSTREAM_SIGNING.dependency,
                                "EventStream")
                        .servicePredicate(AddEventStreamSigningDependency::hasEventStreamInput)
                        .build()
        );
    }

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        if (hasEventStreamInput(model, settings.getService(model))) {
            writer.addImport("EventStreamSignerProvider", "__EventStreamSignerProvider",
                    TypeScriptDependency.AWS_SDK_TYPES.packageName);
            writer.writeDocs("The function that provides necessary utilities for singing event stream");
            writer.write("eventStreamSignerProvider?: __EventStreamSignerProvider;\n");
        }
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        if (!hasEventStreamInput(model, service)) {
            return Collections.emptyMap();
        }

        switch (target) {
            case NODE:
                return MapUtils.of("eventStreamSignerProvider", writer -> {
                    writer.addDependency(AwsDependency.AWS_SDK_EVENTSTREAM_SIGNER_NODE);
                    writer.addImport("eventStreamSignerProvider", "eventStreamSignerProvider",
                            AwsDependency.AWS_SDK_EVENTSTREAM_SIGNER_NODE.packageName);
                    writer.write("eventStreamSignerProvider,");
                });
            case BROWSER:
                /**
                 * Browser doesn't support streaming requests as of March 2020.
                 * Here we don't supply invalidFunction. Each service client needs to support eventstream request
                 * in browsers has to implement a customization providing its own eventStreamSignerProvider
                 * TODO: update this when WebSocket event stream support lands
                 */
                return MapUtils.of("eventStreamSignerProvider", writer -> {
                    writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                    writer.addImport("invalidFunction", "invalidFunction",
                            TypeScriptDependency.INVALID_DEPENDENCY.packageName);
                    writer.openBlock("eventStreamSignerProvider: () => ({", "}),", () -> {
                        writer.write("sign: invalidFunction(\"event stream request is not supported in browser.\"),");
                    });
                });
            case REACT_NATIVE:
                /**
                 * ReactNative doesn't support streaming requests as of March 2020.
                 * Here we don't supply invalidFunction. Each service client needs to support eventstream request
                 * in RN has to implement a customization providing its own eventStreamSignerProvider
                 */
                return MapUtils.of("eventStreamSignerProvider", writer -> {
                    writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                    writer.addImport("invalidFunction", "invalidFunction",
                            TypeScriptDependency.INVALID_DEPENDENCY.packageName);
                    writer.openBlock("eventStreamSignerProvider: () => ({", "}),", () -> {
                        writer.write("sign: invalidFunction(\"event stream request is not supported in ReactNative.\"),");
                    });
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean hasEventStreamInput(Model model, ServiceShape service) {
        TopDownIndex topDownIndex = model.getKnowledge(TopDownIndex.class);
        Set<OperationShape> operations = topDownIndex.getContainedOperations(service);
        EventStreamIndex eventStreamIndex = model.getKnowledge(EventStreamIndex.class);
        for (OperationShape operation : operations) {
            if (eventStreamIndex.getInputInfo(operation).isPresent()) {
                return true;
            }
        }
        return false;
    }
}
