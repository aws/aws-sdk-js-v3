/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
import java.util.Set;
import java.util.TreeMap;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.HttpChecksumTrait;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
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
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds checksum dependencies if needed.
 */
@SmithyInternalApi
public class AddHttpChecksumDependency implements TypeScriptIntegration {

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        if (!hasHttpChecksumTrait(model, settings.getService(model))) {
            return;
        }

        writer.addImport("Readable", "Readable", "stream");
        writer.addImport("StreamHasher", "__StreamHasher", TypeScriptDependency.SMITHY_TYPES);
        writer.writeDocs("A function that, given a hash constructor and a stream, calculates the \n"
                + "hash of the streamed value.\n"
                + "@internal");
        writer.write("streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;\n");

        writer.addImport("Hash", "__Hash", TypeScriptDependency.SMITHY_TYPES);
        writer.addImport("HashConstructor", "__HashConstructor", TypeScriptDependency.SMITHY_TYPES);

        writer.addImport("Checksum", "__Checksum", TypeScriptDependency.SMITHY_TYPES);
        writer.addImport("ChecksumConstructor", "__ChecksumConstructor", TypeScriptDependency.SMITHY_TYPES);

        writer.writeDocs("A constructor for a class implementing the {@link __Checksum} interface \n"
                + "that computes MD5 hashes.\n"
                + "@internal");
        writer.write("md5?: __ChecksumConstructor | __HashConstructor;\n");

        writer.writeDocs("A constructor for a class implementing the {@link __Checksum} interface \n"
                + "that computes SHA1 hashes.\n"
                + "@internal");
        writer.write("sha1?: __ChecksumConstructor | __HashConstructor;\n");

        writer.addImport("GetAwsChunkedEncodingStream", "GetAwsChunkedEncodingStream",
                TypeScriptDependency.AWS_SDK_TYPES);
        writer.writeDocs("A function that returns Readable Stream which follows aws-chunked encoding stream.\n"
                + "@internal");
        writer.write("getAwsChunkedEncodingStream?: GetAwsChunkedEncodingStream;\n");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        if (!hasHttpChecksumTrait(model, settings.getService(model))) {
            return Collections.emptyMap();
        }

        switch (target) {
            case SHARED:
                return MapUtils.of(
                    "getAwsChunkedEncodingStream", writer -> {
                        writer.addDependency(TypeScriptDependency.UTIL_STREAM);
                        writer.addImport("getAwsChunkedEncodingStream", "getAwsChunkedEncodingStream",
                                TypeScriptDependency.UTIL_STREAM);
                        writer.write("getAwsChunkedEncodingStream");
                    }
                );
            case NODE:
                return MapUtils.of(
                    "streamHasher", writer -> {
                        writer.addDependency(AwsDependency.STREAM_HASHER_NODE);
                        writer.addImport("readableStreamHasher", "streamHasher",
                                AwsDependency.STREAM_HASHER_NODE.packageName);
                        writer.write("streamHasher");
                    },
                    "md5", writer -> {
                            writer.addDependency(TypeScriptDependency.AWS_SDK_TYPES);
                            writer.addImport("HashConstructor", "__HashConstructor",
                                    TypeScriptDependency.AWS_SDK_TYPES.packageName);
                            writer.addImport("ChecksumConstructor", "__ChecksumConstructor",
                                    TypeScriptDependency.AWS_SDK_TYPES.packageName);
                            writer.write("Hash.bind(null, \"md5\")");
                    },
                    "sha1", writer -> {
                        writer.addDependency(TypeScriptDependency.AWS_SDK_TYPES);
                        writer.addImport("HashConstructor", "__HashConstructor",
                                TypeScriptDependency.AWS_SDK_TYPES.packageName);
                        writer.addImport("ChecksumConstructor", "__ChecksumConstructor",
                                TypeScriptDependency.AWS_SDK_TYPES.packageName);
                        writer.write("Hash.bind(null, \"sha1\")");
                    }
                );
            case BROWSER:
                return MapUtils.of(
                    "streamHasher", writer -> {
                        writer.addDependency(AwsDependency.STREAM_HASHER_BROWSER);
                        writer.addImport("blobHasher", "streamHasher",
                                AwsDependency.STREAM_HASHER_BROWSER.packageName);
                        writer.write("streamHasher");
                    },
                    "md5", writer -> {
                        writer.addDependency(AwsDependency.MD5_BROWSER);
                        writer.addImport("Md5", "Md5", AwsDependency.MD5_BROWSER.packageName);
                        writer.write("Md5");
                    },
                    "sha1", writer -> {
                        writer.addDependency(AwsDependency.AWS_CRYPTO_SHA1_BROWSER);
                        writer.addImport("Sha1",
                            "Sha1", AwsDependency.AWS_CRYPTO_SHA1_BROWSER.packageName);
                        writer.write("Sha1");
                    }
                );
            default:
                return Collections.emptyMap();
        }
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.FLEXIBLE_CHECKSUMS_MIDDLEWARE.dependency, "FlexibleChecksums",
                                         HAS_MIDDLEWARE)
                        .additionalPluginFunctionParamsSupplier((m, s, o) -> getPluginFunctionParams(m, s, o))
                        .operationPredicate((m, s, o) -> hasHttpChecksumTrait(o))
                        .build()
        );
    }

    private static Map<String, Object> getPluginFunctionParams(
        Model model,
        ServiceShape service,
        OperationShape operation
    ) {
        Map<String, Object> params = new TreeMap<String, Object>();
        params.put("input", Symbol.builder().name("this.input").build());

        HttpChecksumTrait httpChecksumTrait = operation.expectTrait(HttpChecksumTrait.class);
        params.put("requestChecksumRequired", httpChecksumTrait.isRequestChecksumRequired());
        httpChecksumTrait.getRequestAlgorithmMember().ifPresent(requestAlgorithmMember -> {
            params.put("requestAlgorithmMember", requestAlgorithmMember);
        });
        httpChecksumTrait.getRequestValidationModeMember().ifPresent(requestValidationModeMember -> {
            params.put("requestValidationModeMember", requestValidationModeMember);
            params.put("responseAlgorithms", httpChecksumTrait.getResponseAlgorithms());
        });

        return params;
    }

    // return true if operation shape is decorated with `httpChecksum` trait.
    private static boolean hasHttpChecksumTrait(OperationShape operation) {
        return operation.hasTrait(HttpChecksumTrait.class);
    }

    private static boolean hasHttpChecksumTrait(
            Model model,
            ServiceShape service
    ) {
        TopDownIndex topDownIndex = TopDownIndex.of(model);
        Set<OperationShape> operations = topDownIndex.getContainedOperations(service);
        for (OperationShape operation : operations) {
            if (hasHttpChecksumTrait(operation)) {
                return true;
            }
        }
        return false;
    }
}
