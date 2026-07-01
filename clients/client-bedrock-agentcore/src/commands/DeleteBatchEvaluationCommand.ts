// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBatchEvaluationRequest, DeleteBatchEvaluationResponse } from "../models/models_0";
import { DeleteBatchEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBatchEvaluationCommand}.
 */
export interface DeleteBatchEvaluationCommandInput extends DeleteBatchEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBatchEvaluationCommand}.
 */
export interface DeleteBatchEvaluationCommandOutput extends DeleteBatchEvaluationResponse, __MetadataBearer {}

/**
 * <p>Deletes a batch evaluation and its associated results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, DeleteBatchEvaluationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, DeleteBatchEvaluationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // DeleteBatchEvaluationRequest
 *   batchEvaluationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBatchEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBatchEvaluationResponse
 * //   batchEvaluationId: "STRING_VALUE", // required
 * //   batchEvaluationArn: "STRING_VALUE", // required
 * //   status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteBatchEvaluationCommandInput - {@link DeleteBatchEvaluationCommandInput}
 * @returns {@link DeleteBatchEvaluationCommandOutput}
 * @see {@link DeleteBatchEvaluationCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchEvaluationCommandOutput} for command's `response` shape.
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
export class DeleteBatchEvaluationCommand extends command<DeleteBatchEvaluationCommandInput, DeleteBatchEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBatchEvaluation",
  DeleteBatchEvaluation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBatchEvaluationRequest;
      output: DeleteBatchEvaluationResponse;
    };
    sdk: {
      input: DeleteBatchEvaluationCommandInput;
      output: DeleteBatchEvaluationCommandOutput;
    };
  };
}
