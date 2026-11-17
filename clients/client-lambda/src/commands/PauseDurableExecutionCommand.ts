// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PauseDurableExecutionRequest, PauseDurableExecutionResponse } from "../models/models_0";
import { PauseDurableExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PauseDurableExecutionCommand}.
 */
export interface PauseDurableExecutionCommandInput extends PauseDurableExecutionRequest {}
/**
 * @public
 *
 * The output of {@link PauseDurableExecutionCommand}.
 */
export interface PauseDurableExecutionCommandOutput extends PauseDurableExecutionResponse, __MetadataBearer {}

/**
 * <p>Pauses a running <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable execution</a>. While an execution is paused, Lambda doesn't invoke your function, but pending operations such as waits and callbacks continue to complete.</p> <p>If an invocation is in progress, the execution status changes to <code>PAUSING</code> until the invocation reaches its next checkpoint, and then changes to <code>PAUSED</code>. This operation returns a successful response while the execution status is still <code>RUNNING</code>, and the status changes when Lambda processes the request. For more information about pausing executions, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-pause-resume.html">Pausing and resuming durable executions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PauseDurableExecutionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PauseDurableExecutionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PauseDurableExecutionRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Reason: "STRING_VALUE",
 *   ExecutionTimeoutPaused: true || false,
 * };
 * const command = new PauseDurableExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PauseDurableExecutionCommandInput - {@link PauseDurableExecutionCommandInput}
 * @returns {@link PauseDurableExecutionCommandOutput}
 * @see {@link PauseDurableExecutionCommandInput} for command's `input` shape.
 * @see {@link PauseDurableExecutionCommandOutput} for command's `response` shape.
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
export class PauseDurableExecutionCommand extends command<PauseDurableExecutionCommandInput, PauseDurableExecutionCommandOutput>(
  _ep0,
  _mw0,
  "PauseDurableExecution",
  PauseDurableExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PauseDurableExecutionRequest;
      output: {};
    };
    sdk: {
      input: PauseDurableExecutionCommandInput;
      output: PauseDurableExecutionCommandOutput;
    };
  };
}
