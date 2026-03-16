// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { InvokeAgentRuntimeCommandRequest, InvokeAgentRuntimeCommandResponse } from "../models/models_0";
import { InvokeAgentRuntimeCommand$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeAgentRuntimeCommandCommand}.
 */
export interface InvokeAgentRuntimeCommandCommandInput extends InvokeAgentRuntimeCommandRequest {}
/**
 * @public
 *
 * The output of {@link InvokeAgentRuntimeCommandCommand}.
 */
export interface InvokeAgentRuntimeCommandCommandOutput extends InvokeAgentRuntimeCommandResponse, __MetadataBearer {}

/**
 * Executes a command in a runtime session container.
 * Returns streaming output with contentStart, contentDelta, and contentStop events.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, InvokeAgentRuntimeCommandCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, InvokeAgentRuntimeCommandCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // InvokeAgentRuntimeCommandRequest
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   runtimeSessionId: "STRING_VALUE",
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   traceState: "STRING_VALUE",
 *   baggage: "STRING_VALUE",
 *   agentRuntimeArn: "STRING_VALUE", // required
 *   qualifier: "STRING_VALUE",
 *   accountId: "STRING_VALUE",
 *   body: { // InvokeAgentRuntimeCommandRequestBody
 *     command: "STRING_VALUE", // required
 *     timeout: Number("int"),
 *   },
 * };
 * const command = new InvokeAgentRuntimeCommandCommand(input);
 * const response = await client.send(command);
 * // { // InvokeAgentRuntimeCommandResponse
 * //   runtimeSessionId: "STRING_VALUE",
 * //   traceId: "STRING_VALUE",
 * //   traceParent: "STRING_VALUE",
 * //   traceState: "STRING_VALUE",
 * //   baggage: "STRING_VALUE",
 * //   contentType: "STRING_VALUE", // required
 * //   statusCode: Number("int"),
 * //   stream: { // InvokeAgentRuntimeCommandStreamOutput Union: only one key present
 * //     chunk: { // ResponseChunk
 * //       contentStart: {},
 * //       contentDelta: { // ContentDeltaEvent
 * //         stdout: "STRING_VALUE",
 * //         stderr: "STRING_VALUE",
 * //       },
 * //       contentStop: { // ContentStopEvent
 * //         exitCode: Number("int"), // required
 * //         status: "COMPLETED" || "TIMED_OUT", // required
 * //       },
 * //     },
 * //     accessDeniedException: { // AccessDeniedException
 * //       message: "STRING_VALUE",
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     resourceNotFoundException: { // ResourceNotFoundException
 * //       message: "STRING_VALUE",
 * //     },
 * //     serviceQuotaExceededException: { // ServiceQuotaExceededException
 * //       message: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE", // required
 * //       reason: "CannotParse" || "FieldValidationFailed" || "IdempotentParameterMismatchException" || "EventInOtherSession" || "ResourceConflict", // required
 * //       fieldList: [ // ValidationExceptionFieldList
 * //         { // ValidationExceptionField
 * //           name: "STRING_VALUE", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     runtimeClientError: { // RuntimeClientError
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InvokeAgentRuntimeCommandCommandInput - {@link InvokeAgentRuntimeCommandCommandInput}
 * @returns {@link InvokeAgentRuntimeCommandCommandOutput}
 * @see {@link InvokeAgentRuntimeCommandCommandInput} for command's `input` shape.
 * @see {@link InvokeAgentRuntimeCommandCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link RuntimeClientError} (client fault)
 *  <p>The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class InvokeAgentRuntimeCommandCommand extends $Command
  .classBuilder<
    InvokeAgentRuntimeCommandCommandInput,
    InvokeAgentRuntimeCommandCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "InvokeAgentRuntimeCommand", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockAgentCoreClient", "InvokeAgentRuntimeCommandCommand")
  .sc(InvokeAgentRuntimeCommand$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeAgentRuntimeCommandRequest;
      output: InvokeAgentRuntimeCommandResponse;
    };
    sdk: {
      input: InvokeAgentRuntimeCommandCommandInput;
      output: InvokeAgentRuntimeCommandCommandOutput;
    };
  };
}
