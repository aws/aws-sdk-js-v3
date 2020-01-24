/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.Set;
import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;

import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SetUtils;

/**
 * Adds createReadStream dependency if needed.
 */
public class AddCreateReadStreamDependency implements TypeScriptIntegration {
    private static final Set<String> SERVICE_IDS = SetUtils.of("Glacier");

    private static final Logger LOGGER = Logger.getLogger(AddCreateReadStreamDependency.class.getName());

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        if (!needsCreateReadStreamDep(settings.getService(model))) {
            return;
        }

        writer.writeDocs("Node only - createReadStream.").write("createReadStream?: any;\n");
    }

    @Override
    public void addRuntimeConfigValues(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer,
            LanguageTarget target
    ) {
        if (!needsCreateReadStreamDep(settings.getService(model))) {
            return;
        }

        switch (target) {
            case NODE:
                writeNodeConfig(writer);
                break;
            case BROWSER:
                writeBrowserConfig(writer);
                break;
            default:
                LOGGER.info("Unknown JavaScript target: " + target);
        }
    }

    private void writeNodeConfig(TypeScriptWriter writer) {
        writer.addImport("createReadStream", "createReadStream", "fs");
        writer.write("createReadStream,");
    }

    private void writeBrowserConfig(TypeScriptWriter writer) {
        writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
        writer.addImport("invalidFunction", "invalidFunction", TypeScriptDependency.INVALID_DEPENDENCY.packageName);
        writer.write("createReadStream: invalidFunction(\"createReadStream not available in browser\") as any,");
    }

    private static boolean needsCreateReadStreamDep(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return SERVICE_IDS.contains(serviceId);
    }
}
