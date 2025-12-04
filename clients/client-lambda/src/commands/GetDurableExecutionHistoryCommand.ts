// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { GetDurableExecutionHistoryRequest, GetDurableExecutionHistoryResponse } from "../models/models_0";
import { GetDurableExecutionHistory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDurableExecutionHistoryCommand}.
 */
export interface GetDurableExecutionHistoryCommandInput extends GetDurableExecutionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetDurableExecutionHistoryCommand}.
 */
export interface GetDurableExecutionHistoryCommandOutput extends GetDurableExecutionHistoryResponse, __MetadataBearer {}

/**
 * <p>Retrieves the execution history for a <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable execution</a>, showing all the steps, callbacks, and events that occurred during the execution. This provides a detailed audit trail of the execution's progress over time.</p> <p>The history is available while the execution is running and for a retention period after it completes (1-90 days, default 30 days). You can control whether to include execution data such as step results and callback payloads.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetDurableExecutionHistoryCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetDurableExecutionHistoryCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetDurableExecutionHistoryRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 *   IncludeExecutionData: true || false,
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 *   ReverseOrder: true || false,
 * };
 * const command = new GetDurableExecutionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetDurableExecutionHistoryResponse
 * //   Events: [ // Events // required
 * //     { // Event
 * //       EventType: "ExecutionStarted" || "ExecutionSucceeded" || "ExecutionFailed" || "ExecutionTimedOut" || "ExecutionStopped" || "ContextStarted" || "ContextSucceeded" || "ContextFailed" || "WaitStarted" || "WaitSucceeded" || "WaitCancelled" || "StepStarted" || "StepSucceeded" || "StepFailed" || "ChainedInvokeStarted" || "ChainedInvokeSucceeded" || "ChainedInvokeFailed" || "ChainedInvokeTimedOut" || "ChainedInvokeStopped" || "CallbackStarted" || "CallbackSucceeded" || "CallbackFailed" || "CallbackTimedOut" || "InvocationCompleted",
 * //       SubType: "STRING_VALUE",
 * //       EventId: Number("int"),
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       EventTimestamp: new Date("TIMESTAMP"),
 * //       ParentId: "STRING_VALUE",
 * //       ExecutionStartedDetails: { // ExecutionStartedDetails
 * //         Input: { // EventInput
 * //           Payload: "STRING_VALUE",
 * //           Truncated: true || false,
 * //         },
 * //         ExecutionTimeout: Number("int"), // required
 * //       },
 * //       ExecutionSucceededDetails: { // ExecutionSucceededDetails
 * //         Result: { // EventResult
 * //           Payload: "STRING_VALUE",
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       ExecutionFailedDetails: { // ExecutionFailedDetails
 * //         Error: { // EventError
 * //           Payload: { // ErrorObject
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [ // StackTraceEntries
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       ExecutionTimedOutDetails: { // ExecutionTimedOutDetails
 * //         Error: {
 * //           Payload: {
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       ExecutionStoppedDetails: { // ExecutionStoppedDetails
 * //         Error: {
 * //           Payload: {
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       ContextStartedDetails: {},
 * //       ContextSucceededDetails: { // ContextSucceededDetails
 * //         Result: {
 * //           Payload: "STRING_VALUE",
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       ContextFailedDetails: { // ContextFailedDetails
 * //         Error: {
 * //           Payload: {
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       WaitStartedDetails: { // WaitStartedDetails
 * //         Duration: Number("int"), // required
 * //         ScheduledEndTimestamp: new Date("TIMESTAMP"), // required
 * //       },
 * //       WaitSucceededDetails: { // WaitSucceededDetails
 * //         Duration: Number("int"),
 * //       },
 * //       WaitCancelledDetails: { // WaitCancelledDetails
 * //         Error: {
 * //           Payload: {
 * //             ErrorMessage: "STRING_VALUE",
 * //             ErrorType: "STRING_VALUE",
 * //             ErrorData: "STRING_VALUE",
 * //             StackTrace: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       StepStartedDetails: {},
 * //       StepSucceededDetails: { // StepSucceededDetails
 * //         Result: {
 * //           Payload: "STRING_VALUE",
 * //           Truncated: true || false,
 * //         },
 * //         RetryDetails: { // RetryDetails
 * //           CurrentAttempt: Number("int"),
 * //           NextAttemptDelaySeconds: Number("int"),
 * //         },
 * //       },
 * //       StepFailedDetails: { // StepFailedDetails
 * //         Error: "<EventError>", // required
 * //         RetryDetails: {
 * //           CurrentAttempt: Number("int"),
 * //           NextAttemptDelaySeconds: Number("int"),
 * //         },
 * //       },
 * //       ChainedInvokeStartedDetails: { // ChainedInvokeStartedDetails
 * //         FunctionName: "STRING_VALUE", // required
 * //         TenantId: "STRING_VALUE",
 * //         Input: {
 * //           Payload: "STRING_VALUE",
 * //           Truncated: true || false,
 * //         },
 * //         ExecutedVersion: "STRING_VALUE",
 * //         DurableExecutionArn: "STRING_VALUE",
 * //       },
 * //       ChainedInvokeSucceededDetails: { // ChainedInvokeSucceededDetails
 * //         Result: {
 * //           Payload: "STRING_VALUE",
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       ChainedInvokeFailedDetails: { // ChainedInvokeFailedDetails
 * //         Error: "<EventError>", // required
 * //       },
 * //       ChainedInvokeTimedOutDetails: { // ChainedInvokeTimedOutDetails
 * //         Error: "<EventError>", // required
 * //       },
 * //       ChainedInvokeStoppedDetails: { // ChainedInvokeStoppedDetails
 * //         Error: "<EventError>", // required
 * //       },
 * //       CallbackStartedDetails: { // CallbackStartedDetails
 * //         CallbackId: "STRING_VALUE", // required
 * //         HeartbeatTimeout: Number("int"),
 * //         Timeout: Number("int"),
 * //       },
 * //       CallbackSucceededDetails: { // CallbackSucceededDetails
 * //         Result: {
 * //           Payload: "STRING_VALUE",
 * //           Truncated: true || false,
 * //         },
 * //       },
 * //       CallbackFailedDetails: { // CallbackFailedDetails
 * //         Error: "<EventError>", // required
 * //       },
 * //       CallbackTimedOutDetails: { // CallbackTimedOutDetails
 * //         Error: "<EventError>", // required
 * //       },
 * //       InvocationCompletedDetails: { // InvocationCompletedDetails
 * //         StartTimestamp: new Date("TIMESTAMP"), // required
 * //         EndTimestamp: new Date("TIMESTAMP"), // required
 * //         RequestId: "STRING_VALUE", // required
 * //         Error: "<EventError>",
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDurableExecutionHistoryCommandInput - {@link GetDurableExecutionHistoryCommandInput}
 * @returns {@link GetDurableExecutionHistoryCommandOutput}
 * @see {@link GetDurableExecutionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetDurableExecutionHistoryCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
export class GetDurableExecutionHistoryCommand extends $Command
  .classBuilder<
    GetDurableExecutionHistoryCommandInput,
    GetDurableExecutionHistoryCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetDurableExecutionHistory", {})
  .n("LambdaClient", "GetDurableExecutionHistoryCommand")
  .sc(GetDurableExecutionHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDurableExecutionHistoryRequest;
      output: GetDurableExecutionHistoryResponse;
    };
    sdk: {
      input: GetDurableExecutionHistoryCommandInput;
      output: GetDurableExecutionHistoryCommandOutput;
    };
  };
}
