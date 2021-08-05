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

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds SQS customization.
 */
@SmithyInternalApi
public class AddSqsDependency implements TypeScriptIntegration {

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "SendMessage",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName(s).equals("SendMessage")  && isSqs(s))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "SendMessageBatch",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName(s).equals("SendMessageBatch") && isSqs(s))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "ReceiveMessage",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName(s).equals("ReceiveMessage") && isSqs(s))
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
        if (!isSqs(settings.getService(model))) {
            return;
        }

        writer.addImport("Hash", "__Hash", "@aws-sdk/types");
        writer.addImport("HashConstructor", "__HashConstructor", "@aws-sdk/types");
        writer.writeDocs("A constructor for a class implementing the {@link __Hash} interface \n"
                + "that computes MD5 hashes.\n"
                + "@internal");
        writer.write("md5?: __HashConstructor;\n");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        if (!isSqs(settings.getService(model))) {
            return Collections.emptyMap();
        }

        switch (target) {
            case NODE:
                return MapUtils.of("md5", writer -> {
                    writer.addDependency(TypeScriptDependency.AWS_SDK_TYPES);
                    writer.addImport("HashConstructor", "__HashConstructor",
                            TypeScriptDependency.AWS_SDK_TYPES.packageName);
                    writer.write("Hash.bind(null, \"md5\")");
                });
            case BROWSER:
                return MapUtils.of("md5", writer -> {
                    writer.addDependency(TypeScriptDependency.MD5_BROWSER);
                    writer.addImport("Md5", "Md5", TypeScriptDependency.MD5_BROWSER.packageName);
                    writer.write("Md5");
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isSqs(ServiceShape service) {
        return service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals("SQS");
    }
}
