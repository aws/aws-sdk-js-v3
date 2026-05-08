// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopBatchEvaluationRequest, StopBatchEvaluationResponse } from "../models/models_0";
import { StopBatchEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopBatchEvaluationCommand}.
 */
export interface StopBatchEvaluationCommandInput extends StopBatchEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link StopBatchEvaluationCommand}.
 */
export interface StopBatchEvaluationCommandOutput extends StopBatchEvaluationResponse, __MetadataBearer {}

/**
 * <p>Stops a running batch evaluation. Sessions that have already been evaluated retain their results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StopBatchEvaluationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StopBatchEvaluationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StopBatchEvaluationRequest
 *   batchEvaluationId: "STRING_VALUE", // required
 * };
 * const command = new StopBatchEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // StopBatchEvaluationResponse
 * //   batchEvaluationId: "STRING_VALUE", // required
 * //   batchEvaluationArn: "STRING_VALUE", // required
 * //   status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING", // required
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopBatchEvaluationCommandInput - {@link StopBatchEvaluationCommandInput}
 * @returns {@link StopBatchEvaluationCommandOutput}
 * @see {@link StopBatchEvaluationCommandInput} for command's `input` shape.
 * @see {@link StopBatchEvaluationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
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
export class StopBatchEvaluationCommand extends $Command
  .classBuilder<
    StopBatchEvaluationCommandInput,
    StopBatchEvaluationCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "StopBatchEvaluation", {})
  .n("BedrockAgentCoreClient", "StopBatchEvaluationCommand")
  .sc(StopBatchEvaluation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBatchEvaluationRequest;
      output: StopBatchEvaluationResponse;
    };
    sdk: {
      input: StopBatchEvaluationCommandInput;
      output: StopBatchEvaluationCommandOutput;
    };
  };
}
