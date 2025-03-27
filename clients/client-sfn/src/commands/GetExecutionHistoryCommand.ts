// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetExecutionHistoryInput,
  GetExecutionHistoryOutput,
  GetExecutionHistoryOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetExecutionHistoryCommand, se_GetExecutionHistoryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExecutionHistoryCommand}.
 */
export interface GetExecutionHistoryCommandInput extends GetExecutionHistoryInput {}
/**
 * @public
 *
 * The output of {@link GetExecutionHistoryCommand}.
 */
export interface GetExecutionHistoryCommandOutput extends GetExecutionHistoryOutput, __MetadataBearer {}

/**
 * <p>Returns the history of the specified execution as a list of events. By default, the
 *       results are returned in ascending order of the <code>timeStamp</code> of the events. Use the
 *         <code>reverseOrder</code> parameter to get the latest events first.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetExecutionHistoryCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetExecutionHistoryCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // GetExecutionHistoryInput
 *   executionArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   reverseOrder: true || false,
 *   nextToken: "STRING_VALUE",
 *   includeExecutionData: true || false,
 * };
 * const command = new GetExecutionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetExecutionHistoryOutput
 * //   events: [ // HistoryEventList // required
 * //     { // HistoryEvent
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       type: "ActivityFailed" || "ActivityScheduled" || "ActivityScheduleFailed" || "ActivityStarted" || "ActivitySucceeded" || "ActivityTimedOut" || "ChoiceStateEntered" || "ChoiceStateExited" || "ExecutionAborted" || "ExecutionFailed" || "ExecutionStarted" || "ExecutionSucceeded" || "ExecutionTimedOut" || "FailStateEntered" || "LambdaFunctionFailed" || "LambdaFunctionScheduled" || "LambdaFunctionScheduleFailed" || "LambdaFunctionStarted" || "LambdaFunctionStartFailed" || "LambdaFunctionSucceeded" || "LambdaFunctionTimedOut" || "MapIterationAborted" || "MapIterationFailed" || "MapIterationStarted" || "MapIterationSucceeded" || "MapStateAborted" || "MapStateEntered" || "MapStateExited" || "MapStateFailed" || "MapStateStarted" || "MapStateSucceeded" || "ParallelStateAborted" || "ParallelStateEntered" || "ParallelStateExited" || "ParallelStateFailed" || "ParallelStateStarted" || "ParallelStateSucceeded" || "PassStateEntered" || "PassStateExited" || "SucceedStateEntered" || "SucceedStateExited" || "TaskFailed" || "TaskScheduled" || "TaskStarted" || "TaskStartFailed" || "TaskStateAborted" || "TaskStateEntered" || "TaskStateExited" || "TaskSubmitFailed" || "TaskSubmitted" || "TaskSucceeded" || "TaskTimedOut" || "WaitStateAborted" || "WaitStateEntered" || "WaitStateExited" || "MapRunAborted" || "MapRunFailed" || "MapRunStarted" || "MapRunSucceeded" || "ExecutionRedriven" || "MapRunRedriven" || "EvaluationFailed", // required
 * //       id: Number("long"), // required
 * //       previousEventId: Number("long"),
 * //       activityFailedEventDetails: { // ActivityFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       activityScheduleFailedEventDetails: { // ActivityScheduleFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       activityScheduledEventDetails: { // ActivityScheduledEventDetails
 * //         resource: "STRING_VALUE", // required
 * //         input: "STRING_VALUE",
 * //         inputDetails: { // HistoryEventExecutionDataDetails
 * //           truncated: true || false,
 * //         },
 * //         timeoutInSeconds: Number("long"),
 * //         heartbeatInSeconds: Number("long"),
 * //       },
 * //       activityStartedEventDetails: { // ActivityStartedEventDetails
 * //         workerName: "STRING_VALUE",
 * //       },
 * //       activitySucceededEventDetails: { // ActivitySucceededEventDetails
 * //         output: "STRING_VALUE",
 * //         outputDetails: {
 * //           truncated: true || false,
 * //         },
 * //       },
 * //       activityTimedOutEventDetails: { // ActivityTimedOutEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       taskFailedEventDetails: { // TaskFailedEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       taskScheduledEventDetails: { // TaskScheduledEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //         region: "STRING_VALUE", // required
 * //         parameters: "STRING_VALUE", // required
 * //         timeoutInSeconds: Number("long"),
 * //         heartbeatInSeconds: Number("long"),
 * //         taskCredentials: { // TaskCredentials
 * //           roleArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       taskStartFailedEventDetails: { // TaskStartFailedEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       taskStartedEventDetails: { // TaskStartedEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //       },
 * //       taskSubmitFailedEventDetails: { // TaskSubmitFailedEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       taskSubmittedEventDetails: { // TaskSubmittedEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //         output: "STRING_VALUE",
 * //         outputDetails: {
 * //           truncated: true || false,
 * //         },
 * //       },
 * //       taskSucceededEventDetails: { // TaskSucceededEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //         output: "STRING_VALUE",
 * //         outputDetails: {
 * //           truncated: true || false,
 * //         },
 * //       },
 * //       taskTimedOutEventDetails: { // TaskTimedOutEventDetails
 * //         resourceType: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE", // required
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       executionFailedEventDetails: { // ExecutionFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       executionStartedEventDetails: { // ExecutionStartedEventDetails
 * //         input: "STRING_VALUE",
 * //         inputDetails: {
 * //           truncated: true || false,
 * //         },
 * //         roleArn: "STRING_VALUE",
 * //         stateMachineAliasArn: "STRING_VALUE",
 * //         stateMachineVersionArn: "STRING_VALUE",
 * //       },
 * //       executionSucceededEventDetails: { // ExecutionSucceededEventDetails
 * //         output: "STRING_VALUE",
 * //         outputDetails: "<HistoryEventExecutionDataDetails>",
 * //       },
 * //       executionAbortedEventDetails: { // ExecutionAbortedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       executionTimedOutEventDetails: { // ExecutionTimedOutEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       executionRedrivenEventDetails: { // ExecutionRedrivenEventDetails
 * //         redriveCount: Number("int"),
 * //       },
 * //       mapStateStartedEventDetails: { // MapStateStartedEventDetails
 * //         length: Number("int"),
 * //       },
 * //       mapIterationStartedEventDetails: { // MapIterationEventDetails
 * //         name: "STRING_VALUE",
 * //         index: Number("int"),
 * //       },
 * //       mapIterationSucceededEventDetails: {
 * //         name: "STRING_VALUE",
 * //         index: Number("int"),
 * //       },
 * //       mapIterationFailedEventDetails: {
 * //         name: "STRING_VALUE",
 * //         index: Number("int"),
 * //       },
 * //       mapIterationAbortedEventDetails: {
 * //         name: "STRING_VALUE",
 * //         index: Number("int"),
 * //       },
 * //       lambdaFunctionFailedEventDetails: { // LambdaFunctionFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       lambdaFunctionScheduleFailedEventDetails: { // LambdaFunctionScheduleFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       lambdaFunctionScheduledEventDetails: { // LambdaFunctionScheduledEventDetails
 * //         resource: "STRING_VALUE", // required
 * //         input: "STRING_VALUE",
 * //         inputDetails: "<HistoryEventExecutionDataDetails>",
 * //         timeoutInSeconds: Number("long"),
 * //         taskCredentials: {
 * //           roleArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       lambdaFunctionStartFailedEventDetails: { // LambdaFunctionStartFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       lambdaFunctionSucceededEventDetails: { // LambdaFunctionSucceededEventDetails
 * //         output: "STRING_VALUE",
 * //         outputDetails: "<HistoryEventExecutionDataDetails>",
 * //       },
 * //       lambdaFunctionTimedOutEventDetails: { // LambdaFunctionTimedOutEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       stateEnteredEventDetails: { // StateEnteredEventDetails
 * //         name: "STRING_VALUE", // required
 * //         input: "STRING_VALUE",
 * //         inputDetails: "<HistoryEventExecutionDataDetails>",
 * //       },
 * //       stateExitedEventDetails: { // StateExitedEventDetails
 * //         name: "STRING_VALUE", // required
 * //         output: "STRING_VALUE",
 * //         outputDetails: "<HistoryEventExecutionDataDetails>",
 * //         assignedVariables: { // AssignedVariables
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         assignedVariablesDetails: { // AssignedVariablesDetails
 * //           truncated: true || false,
 * //         },
 * //       },
 * //       mapRunStartedEventDetails: { // MapRunStartedEventDetails
 * //         mapRunArn: "STRING_VALUE",
 * //       },
 * //       mapRunFailedEventDetails: { // MapRunFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //       },
 * //       mapRunRedrivenEventDetails: { // MapRunRedrivenEventDetails
 * //         mapRunArn: "STRING_VALUE",
 * //         redriveCount: Number("int"),
 * //       },
 * //       evaluationFailedEventDetails: { // EvaluationFailedEventDetails
 * //         error: "STRING_VALUE",
 * //         cause: "STRING_VALUE",
 * //         location: "STRING_VALUE",
 * //         state: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExecutionHistoryCommandInput - {@link GetExecutionHistoryCommandInput}
 * @returns {@link GetExecutionHistoryCommandOutput}
 * @see {@link GetExecutionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetExecutionHistoryCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *  <p>The specified execution does not exist.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *  <p>The KMS key is not in valid state, for example: Disabled or Deleted.</p>
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *  <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class GetExecutionHistoryCommand extends $Command
  .classBuilder<
    GetExecutionHistoryCommandInput,
    GetExecutionHistoryCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "GetExecutionHistory", {})
  .n("SFNClient", "GetExecutionHistoryCommand")
  .f(void 0, GetExecutionHistoryOutputFilterSensitiveLog)
  .ser(se_GetExecutionHistoryCommand)
  .de(de_GetExecutionHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExecutionHistoryInput;
      output: GetExecutionHistoryOutput;
    };
    sdk: {
      input: GetExecutionHistoryCommandInput;
      output: GetExecutionHistoryCommandOutput;
    };
  };
}
