/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.aws.traits.protocols.AwsQueryCompatibleTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.protocols.cbor.SmithyRpcV2Cbor;

/**
 * Extension of the Smithy RPCv2 CBOR protocol generator, adding
 * AWSQuery compatibility.
 */
public final class AwsSmithyRpcV2Cbor extends SmithyRpcV2Cbor {
    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);
        if (context.getService().hasTrait(AwsQueryCompatibleTrait.class)) {
            TypeScriptWriter writer = context.getWriter();
            writer.addImport("HeaderBag", "__HeaderBag", TypeScriptDependency.SMITHY_TYPES);
            writer.write("""
                const populateBodyWithQueryCompatibility = (parsedOutput: any, headers: __HeaderBag) => {
                  const queryErrorHeader = headers["x-amzn-query-error"];
                  if (parsedOutput.body !== undefined && queryErrorHeader != null) {
                    const codeAndType = queryErrorHeader.split(";");
                    parsedOutput.body.Code = codeAndType[0];
                    parsedOutput.body.Type = codeAndType[1];
                  }
                };
                """);
        }
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext generationContext) {
        super.writeErrorCodeParser(generationContext);
        TypeScriptWriter writer = generationContext.getWriter();

        if (generationContext.getService().hasTrait(AwsQueryCompatibleTrait.class)) {
            // Populate parsedOutput.body with 'Code' and 'Type' fields
            // "x-amzn-query-error" header is available when AwsQueryCompatibleTrait is applied to a service
            // The header value contains query error Code and Type joined by ';'
            // E.g. "MalformedInput;Sender" or "InternalFailure;Receiver"
            writer.write("populateBodyWithQueryCompatibility(parsedOutput, output.headers);");
        }
    }
}
