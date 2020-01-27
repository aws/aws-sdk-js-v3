/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;

/**
 * Adds StreamHasher if needed.
 */
public class AddStreamHasherDependency implements TypeScriptIntegration {

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        if (!needsStreamHasher(settings.getService(model))) {
            return;
        }

        writer.addImport("Readable", "Readable", "stream");
        writer.addImport("StreamHasher", "__StreamHasher", "@aws-sdk/types");
        writer.writeDocs("A function that, given a hash constructor and a stream, calculates the \n"
                + "hash of the streamed value");
        writer.write("streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;\n");
    }

    @Override
    public void addRuntimeConfigValues(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer,
            LanguageTarget target
    ) {
        if (!needsStreamHasher(settings.getService(model))) {
            return;
        }

        switch (target) {
            case NODE:
                writer.addDependency(AwsDependency.STREAM_HASHER_NODE);
                writer.addImport("fileStreamHasher", "streamHasher", AwsDependency.STREAM_HASHER_NODE.packageName);
                writer.write("streamHasher,");
                break;
            case BROWSER:
                writer.addDependency(AwsDependency.STREAM_HASHER_BROWSER);
                writer.addImport("blobHasher", "streamHasher", AwsDependency.STREAM_HASHER_BROWSER.packageName);
                writer.write("streamHasher,");
                break;
            default:
                // do nothing
        }
    }

    private static boolean needsStreamHasher(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        if (serviceId.equals("S3")) {
            return true;
        }

        return false;
    }
}
