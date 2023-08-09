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

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.protocols.AwsProtocolTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddHttp2Dependency implements TypeScriptIntegration {
    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target) {
        if (!isHttp2Applicable(settings.getService(model))) {
            return Collections.emptyMap();
        }
        switch (target) {
            case NODE:
                return MapUtils.of("requestHandler", writer -> {
                    writer.addDependency(TypeScriptDependency.AWS_SDK_NODE_HTTP_HANDLER);
                    writer.addImport("NodeHttp2Handler", "RequestHandler",
                            TypeScriptDependency.AWS_SDK_NODE_HTTP_HANDLER);
                    writer.openBlock("new RequestHandler(async () => ({", "}))", () -> {
                        writer.write("...await defaultConfigProvider(),");
                        // TODO: remove this when root cause of #3809 is found
                        writer.write("disableConcurrentStreams: true");
                    });
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isHttp2Applicable(ServiceShape service) {
        List<String> eventStreamFlag = service.getTrait(AwsProtocolTrait.class)
                .map(AwsProtocolTrait::getEventStreamHttp).orElse(ListUtils.of());
        return eventStreamFlag.contains("h2");
    }
}
