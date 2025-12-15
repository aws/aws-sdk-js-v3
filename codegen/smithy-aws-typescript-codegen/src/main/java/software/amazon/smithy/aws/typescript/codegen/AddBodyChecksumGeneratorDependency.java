/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SetUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds blobReader dependency if needed.
 */
@SmithyInternalApi
public class AddBodyChecksumGeneratorDependency implements TypeScriptIntegration {
    private static final Set<String> SERVICE_IDS = SetUtils.of("Glacier");

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        if (!needsBodyChecksumGeneratorDep(settings.getService(model))) {
            return;
        }
        writer.addImport("HttpRequest", "__HttpRequest", TypeScriptDependency.SMITHY_TYPES);
        writer.writeDocs(
            "Function that returns body checksums.\n"
                + "@internal"
        );
        writer.write(
            "bodyChecksumGenerator?: (request: __HttpRequest, "
                + "options: { sha256: __ChecksumConstructor | __HashConstructor; "
                + "utf8Decoder: __Decoder }) => Promise<[string, string]>;\n"
        );
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        if (!needsBodyChecksumGeneratorDep(settings.getService(model))) {
            return Collections.emptyMap();
        }

        switch (target) {
            case NODE:
                return MapUtils.of("bodyChecksumGenerator", writer -> {
                    writer.addDependency(AwsDependency.BODY_CHECKSUM_GENERATOR_NODE);
                    writer.addImport(
                        "bodyChecksumGenerator",
                        "bodyChecksumGenerator",
                        AwsDependency.BODY_CHECKSUM_GENERATOR_NODE
                    );
                    writer.write("bodyChecksumGenerator");
                });
            case BROWSER:
                return MapUtils.of("bodyChecksumGenerator", writer -> {
                    writer.addDependency(AwsDependency.BODY_CHECKSUM_GENERATOR_BROWSER);
                    writer.addImport(
                        "bodyChecksumGenerator",
                        "bodyChecksumGenerator",
                        AwsDependency.BODY_CHECKSUM_GENERATOR_BROWSER
                    );
                    writer.write("bodyChecksumGenerator");
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean needsBodyChecksumGeneratorDep(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return SERVICE_IDS.contains(serviceId);
    }
}
