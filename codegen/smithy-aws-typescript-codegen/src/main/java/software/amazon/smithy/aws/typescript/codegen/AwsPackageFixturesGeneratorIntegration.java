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

import java.util.Calendar;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.regex.Pattern;

import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;

public final class AwsPackageFixturesGeneratorIntegration implements TypeScriptIntegration {
    @Override
    public void writeAdditionalFiles(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        writerFactory.accept(".gitignore", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "gitignore");
            writer.write(resource);
        });
        writerFactory.accept(".npmignore", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "npmignore");
            writer.write(resource);
        });
        writerFactory.accept("LICENSE", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "LICENSE.template");
            resource = resource.replace("${year}", Integer.toString(Calendar.getInstance().get(Calendar.YEAR)));
            writer.write(resource);
        });
        writerFactory.accept("README.md", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "README.md.template");
            resource = resource.replaceAll(Pattern.quote("${packageName}"), settings.getPackageName());
            writer.write(resource);
        });
    }
}
