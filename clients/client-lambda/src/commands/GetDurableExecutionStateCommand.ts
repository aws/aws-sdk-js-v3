// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetDurableExecutionStateRequest, GetDurableExecutionStateResponse } from "../models/models_0";
import { GetDurableExecutionState } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDurableExecutionStateCommand}.
 */
export interface GetDurableExecutionStateCommandInput extends GetDurableExecutionStateRequest {}
/**
 * @public
 *
 * The output of {@link GetDurableExecutionStateCommand}.
 */
export interface GetDurableExecutionStateCommandOutput extends GetDurableExecutionStateResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current execution state required for the replay process during <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable function</a> execution. This API is used by the Lambda durable functions SDK to get state information needed for replay. You typically don't need to call this API directly as the SDK handles state management automatically.</p> <p>The response contains operations ordered by start sequence number in ascending order. Completed operations with children don't include child operation details since they don't need to be replayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetDurableExecutionStateCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetDurableExecutionStateCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetDurableExecutionStateRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 *   CheckpointToken: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new GetDurableExecutionStateCommand(input);
 * const response = await client.send(command);
 * // { // GetDurableExecutionStateResponse
 * //   Operations: [ // Operations // required
 * //     { // Operation
 * //       Id: "STRING_VALUE", // required
 * //       ParentId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "EXECUTION" || "CONTEXT" || "STEP" || "WAIT" || "CALLBACK" || "CHAINED_INVOKE", // required
 * //       SubType: "STRING_VALUE",
 * //       StartTimestamp: new Date("TIMESTAMP"), // required
 * //       EndTimestamp: new Date("TIMESTAMP"),
 * //       Status: "STARTED" || "PENDING" || "READY" || "SUCCEEDED" || "FAILED" || "CANCELLED" || "TIMED_OUT" || "STOPPED", // required
 * //       ExecutionDetails: { // ExecutionDetails
 * //         InputPayload: "STRING_VALUE",
 * //       },
 * //       ContextDetails: { // ContextDetails
 * //         ReplayChildren: true || false,
 * //         Result: "STRING_VALUE",
 * //         Error: { // ErrorObject
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorType: "STRING_VALUE",
 * //           ErrorData: "STRING_VALUE",
 * //           StackTrace: [ // StackTraceEntries
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       StepDetails: { // StepDetails
 * //         Attempt: Number("int"),
 * //         NextAttemptTimestamp: new Date("TIMESTAMP"),
 * //         Result: "STRING_VALUE",
 * //         Error: {
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorType: "STRING_VALUE",
 * //           ErrorData: "STRING_VALUE",
 * //           StackTrace: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       WaitDetails: { // WaitDetails
 * //         ScheduledEndTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       CallbackDetails: { // CallbackDetails
 * //         CallbackId: "STRING_VALUE",
 * //         Result: "STRING_VALUE",
 * //         Error: {
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorType: "STRING_VALUE",
 * //           ErrorData: "STRING_VALUE",
 * //           StackTrace: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ChainedInvokeDetails: { // ChainedInvokeDetails
 * //         Result: "STRING_VALUE",
 * //         Error: {
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorType: "STRING_VALUE",
 * //           ErrorData: "STRING_VALUE",
 * //           StackTrace: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDurableExecutionStateCommandInput - {@link GetDurableExecutionStateCommandInput}
 * @returns {@link GetDurableExecutionStateCommandOutput}
 * @see {@link GetDurableExecutionStateCommandInput} for command's `input` shape.
 * @see {@link GetDurableExecutionStateCommandOutput} for command's `response` shape.
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
export class GetDurableExecutionStateCommand extends $Command
  .classBuilder<
    GetDurableExecutionStateCommandInput,
    GetDurableExecutionStateCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetDurableExecutionState", {})
  .n("LambdaClient", "GetDurableExecutionStateCommand")
  .sc(GetDurableExecutionState)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDurableExecutionStateRequest;
      output: GetDurableExecutionStateResponse;
    };
    sdk: {
      input: GetDurableExecutionStateCommandInput;
      output: GetDurableExecutionStateCommandOutput;
    };
  };
}
