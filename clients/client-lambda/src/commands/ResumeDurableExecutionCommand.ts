// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResumeDurableExecutionRequest, ResumeDurableExecutionResponse } from "../models/models_0";
import { ResumeDurableExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResumeDurableExecutionCommand}.
 */
export interface ResumeDurableExecutionCommandInput extends ResumeDurableExecutionRequest {}
/**
 * @public
 *
 * The output of {@link ResumeDurableExecutionCommand}.
 */
export interface ResumeDurableExecutionCommandOutput extends ResumeDurableExecutionResponse, __MetadataBearer {}

/**
 * <p>Resumes a paused <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable execution</a>. If the pause interrupted an invocation, or an operation completed while the execution was paused, Lambda invokes your function. Otherwise, the execution continues to wait for its pending operations.</p> <p>If the execution status is <code>PAUSING</code>, this operation cancels the pause, and the in-progress invocation continues. This operation returns a successful response while the execution status is still <code>PAUSED</code> or <code>PAUSING</code>, and the status changes to <code>RUNNING</code> when Lambda processes the request. For more information about resuming executions, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-pause-resume.html">Pausing and resuming durable executions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ResumeDurableExecutionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ResumeDurableExecutionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ResumeDurableExecutionRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Reason: "STRING_VALUE",
 * };
 * const command = new ResumeDurableExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeDurableExecutionCommandInput - {@link ResumeDurableExecutionCommandInput}
 * @returns {@link ResumeDurableExecutionCommandOutput}
 * @see {@link ResumeDurableExecutionCommandInput} for command's `input` shape.
 * @see {@link ResumeDurableExecutionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link KMSAccessDeniedException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.</p>
 *
 * @throws {@link KMSDisabledException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.</p>
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.</p>
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class ResumeDurableExecutionCommand extends command<ResumeDurableExecutionCommandInput, ResumeDurableExecutionCommandOutput>(
  _ep0,
  _mw0,
  "ResumeDurableExecution",
  ResumeDurableExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeDurableExecutionRequest;
      output: {};
    };
    sdk: {
      input: ResumeDurableExecutionCommandInput;
      output: ResumeDurableExecutionCommandOutput;
    };
  };
}
