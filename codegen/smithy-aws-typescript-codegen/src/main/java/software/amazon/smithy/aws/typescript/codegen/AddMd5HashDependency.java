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

import java.util.Set;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SetUtils;

/**
 * Adds Md5Hash if needed.
 */
public class AddMd5HashDependency implements TypeScriptIntegration {
    private static final Set<String> SERVICE_IDS = SetUtils.of("S3", "SQS");

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        if (!needsMd5Dep(settings.getService(model))) {
            return;
        }

        writer.addImport("HashConstructor", "__HashConstructor", "@aws-sdk/types");
        writer.writeDocs("A constructor for a class implementing the @aws-sdk/types.Hash interface \n"
                + "that computes MD5 hashes");
        writer.write("md5?: __HashConstructor;\n");
    }

    @Override
    public void addRuntimeConfigValues(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer,
            LanguageTarget target
    ) {
        if (!needsMd5Dep(settings.getService(model))) {
            return;
        }

        switch (target) {
            case NODE:
                writer.addImport("HashConstructor", "__HashConstructor", "@aws-sdk/types");
                writer.write("md5: Hash.bind(null, \"md5\"),");
                break;
            case BROWSER:
                writer.addDependency(AwsDependency.MD5_BROWSER);
                writer.addImport("Md5", "Md5", AwsDependency.MD5_BROWSER.packageName);
                writer.write("md5: Md5,");
                break;
            default:
                // do nothing
        }
    }

    private static boolean needsMd5Dep(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return SERVICE_IDS.contains(serviceId);
    }
}
