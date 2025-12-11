// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { CheckpointDurableExecutionRequest, CheckpointDurableExecutionResponse } from "../models/models_0";
import { CheckpointDurableExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CheckpointDurableExecutionCommand}.
 */
export interface CheckpointDurableExecutionCommandInput extends CheckpointDurableExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CheckpointDurableExecutionCommand}.
 */
export interface CheckpointDurableExecutionCommandOutput extends CheckpointDurableExecutionResponse, __MetadataBearer {}

/**
 * <p>Saves the progress of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable function</a> execution during runtime. This API is used by the Lambda durable functions SDK to checkpoint completed steps and schedule asynchronous operations. You typically don't need to call this API directly as the SDK handles checkpointing automatically.</p> <p>Each checkpoint operation consumes the current checkpoint token and returns a new one for the next checkpoint. This ensures that checkpoints are applied in the correct order and prevents duplicate or out-of-order state updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CheckpointDurableExecutionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CheckpointDurableExecutionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // CheckpointDurableExecutionRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 *   CheckpointToken: "STRING_VALUE", // required
 *   Updates: [ // OperationUpdates
 *     { // OperationUpdate
 *       Id: "STRING_VALUE", // required
 *       ParentId: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Type: "EXECUTION" || "CONTEXT" || "STEP" || "WAIT" || "CALLBACK" || "CHAINED_INVOKE", // required
 *       SubType: "STRING_VALUE",
 *       Action: "START" || "SUCCEED" || "FAIL" || "RETRY" || "CANCEL", // required
 *       Payload: "STRING_VALUE",
 *       Error: { // ErrorObject
 *         ErrorMessage: "STRING_VALUE",
 *         ErrorType: "STRING_VALUE",
 *         ErrorData: "STRING_VALUE",
 *         StackTrace: [ // StackTraceEntries
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ContextOptions: { // ContextOptions
 *         ReplayChildren: true || false,
 *       },
 *       StepOptions: { // StepOptions
 *         NextAttemptDelaySeconds: Number("int"),
 *       },
 *       WaitOptions: { // WaitOptions
 *         WaitSeconds: Number("int"),
 *       },
 *       CallbackOptions: { // CallbackOptions
 *         TimeoutSeconds: Number("int"),
 *         HeartbeatTimeoutSeconds: Number("int"),
 *       },
 *       ChainedInvokeOptions: { // ChainedInvokeOptions
 *         FunctionName: "STRING_VALUE", // required
 *         TenantId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CheckpointDurableExecutionCommand(input);
 * const response = await client.send(command);
 * // { // CheckpointDurableExecutionResponse
 * //   CheckpointToken: "STRING_VALUE",
 * //   NewExecutionState: { // CheckpointUpdatedExecutionState
 * //     Operations: [ // Operations
 * //       { // Operation
 * //         Id: "STRING_VALUE", // required
 * //         ParentId: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Type: "EXECUTION" || "CONTEXT" || "STEP" || "WAIT" || "CALLBACK" || "CHAINED_INVOKE", // required
 * //         SubType: "STRING_VALUE",
 * //         StartTimestamp: new Date("TIMESTAMP"), // required
 * //         EndTimestamp: new Date("TIMESTAMP"),
 * //         Status: "STARTED" || "PENDING" || "READY" || "SUCCEEDED" || "FAILED" || "CANCELLED" || "TIMED_OUT" || "STOPPED", // required
 * //         ExecutionDetails: { // ExecutionDetails
 * //           InputPayload: "STRING_VALUE",
 * //         },
 * //         ContextDetails: { // ContextDetails
 * //           ReplayChildren: true || false,
 * //           Result: "STRING_VALUE",
 * //           Error: { // ErrorObject
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [ // StackTraceEntries
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         StepDetails: { // StepDetails
 * //           Attempt: Number("int"),
 * //           NextAttemptTimestamp: new Date("TIMESTAMP"),
 * //           Result: "STRING_VALUE",
 * //           Error: {
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         WaitDetails: { // WaitDetails
 * //           ScheduledEndTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //         CallbackDetails: { // CallbackDetails
 * //           CallbackId: "STRING_VALUE",
 * //           Result: "STRING_VALUE",
 * //           Error: {
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         ChainedInvokeDetails: { // ChainedInvokeDetails
 * //           Result: "STRING_VALUE",
 * //           Error: {
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     NextMarker: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CheckpointDurableExecutionCommandInput - {@link CheckpointDurableExecutionCommandInput}
 * @returns {@link CheckpointDurableExecutionCommandOutput}
 * @see {@link CheckpointDurableExecutionCommandInput} for command's `input` shape.
 * @see {@link CheckpointDurableExecutionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
export class CheckpointDurableExecutionCommand extends $Command
  .classBuilder<
    CheckpointDurableExecutionCommandInput,
    CheckpointDurableExecutionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "CheckpointDurableExecution", {})
  .n("LambdaClient", "CheckpointDurableExecutionCommand")
  .sc(CheckpointDurableExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckpointDurableExecutionRequest;
      output: CheckpointDurableExecutionResponse;
    };
    sdk: {
      input: CheckpointDurableExecutionCommandInput;
      output: CheckpointDurableExecutionCommandOutput;
    };
  };
}
