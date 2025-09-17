// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RespondDecisionTaskCompletedInput } from "../models/models_0";
import {
  de_RespondDecisionTaskCompletedCommand,
  se_RespondDecisionTaskCompletedCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RespondDecisionTaskCompletedCommand}.
 */
export interface RespondDecisionTaskCompletedCommandInput extends RespondDecisionTaskCompletedInput {}
/**
 * @public
 *
 * The output of {@link RespondDecisionTaskCompletedCommand}.
 */
export interface RespondDecisionTaskCompletedCommandOutput extends __MetadataBearer {}

/**
 * <p>Used by deciders to tell the service that the <a>DecisionTask</a> identified
 *       by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument
 *       specifies the list of decisions made while processing the task.</p>
 *          <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The
 *         <code>executionContext</code> specified is attached to the event in the workflow execution
 *       history.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it
 *       can express permissions for the list of decisions in the <code>decisions</code> parameter.
 *       Each of the decisions has one or more parameters, much like a regular API call. To allow for
 *       policies to be as readable as possible, you can express permissions on decisions as if they
 *       were actual API calls, including applying conditions to some parameters. For more information,
 *       see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using
 *         IAM to Manage Access to Amazon SWF Workflows</a> in the
 *       <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, RespondDecisionTaskCompletedCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RespondDecisionTaskCompletedCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // RespondDecisionTaskCompletedInput
 *   taskToken: "STRING_VALUE", // required
 *   decisions: [ // DecisionList
 *     { // Decision
 *       decisionType: "ScheduleActivityTask" || "RequestCancelActivityTask" || "CompleteWorkflowExecution" || "FailWorkflowExecution" || "CancelWorkflowExecution" || "ContinueAsNewWorkflowExecution" || "RecordMarker" || "StartTimer" || "CancelTimer" || "SignalExternalWorkflowExecution" || "RequestCancelExternalWorkflowExecution" || "StartChildWorkflowExecution" || "ScheduleLambdaFunction", // required
 *       scheduleActivityTaskDecisionAttributes: { // ScheduleActivityTaskDecisionAttributes
 *         activityType: { // ActivityType
 *           name: "STRING_VALUE", // required
 *           version: "STRING_VALUE", // required
 *         },
 *         activityId: "STRING_VALUE", // required
 *         control: "STRING_VALUE",
 *         input: "STRING_VALUE",
 *         scheduleToCloseTimeout: "STRING_VALUE",
 *         taskList: { // TaskList
 *           name: "STRING_VALUE", // required
 *         },
 *         taskPriority: "STRING_VALUE",
 *         scheduleToStartTimeout: "STRING_VALUE",
 *         startToCloseTimeout: "STRING_VALUE",
 *         heartbeatTimeout: "STRING_VALUE",
 *       },
 *       requestCancelActivityTaskDecisionAttributes: { // RequestCancelActivityTaskDecisionAttributes
 *         activityId: "STRING_VALUE", // required
 *       },
 *       completeWorkflowExecutionDecisionAttributes: { // CompleteWorkflowExecutionDecisionAttributes
 *         result: "STRING_VALUE",
 *       },
 *       failWorkflowExecutionDecisionAttributes: { // FailWorkflowExecutionDecisionAttributes
 *         reason: "STRING_VALUE",
 *         details: "STRING_VALUE",
 *       },
 *       cancelWorkflowExecutionDecisionAttributes: { // CancelWorkflowExecutionDecisionAttributes
 *         details: "STRING_VALUE",
 *       },
 *       continueAsNewWorkflowExecutionDecisionAttributes: { // ContinueAsNewWorkflowExecutionDecisionAttributes
 *         input: "STRING_VALUE",
 *         executionStartToCloseTimeout: "STRING_VALUE",
 *         taskList: {
 *           name: "STRING_VALUE", // required
 *         },
 *         taskPriority: "STRING_VALUE",
 *         taskStartToCloseTimeout: "STRING_VALUE",
 *         childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 *         tagList: [ // TagList
 *           "STRING_VALUE",
 *         ],
 *         workflowTypeVersion: "STRING_VALUE",
 *         lambdaRole: "STRING_VALUE",
 *       },
 *       recordMarkerDecisionAttributes: { // RecordMarkerDecisionAttributes
 *         markerName: "STRING_VALUE", // required
 *         details: "STRING_VALUE",
 *       },
 *       startTimerDecisionAttributes: { // StartTimerDecisionAttributes
 *         timerId: "STRING_VALUE", // required
 *         control: "STRING_VALUE",
 *         startToFireTimeout: "STRING_VALUE", // required
 *       },
 *       cancelTimerDecisionAttributes: { // CancelTimerDecisionAttributes
 *         timerId: "STRING_VALUE", // required
 *       },
 *       signalExternalWorkflowExecutionDecisionAttributes: { // SignalExternalWorkflowExecutionDecisionAttributes
 *         workflowId: "STRING_VALUE", // required
 *         runId: "STRING_VALUE",
 *         signalName: "STRING_VALUE", // required
 *         input: "STRING_VALUE",
 *         control: "STRING_VALUE",
 *       },
 *       requestCancelExternalWorkflowExecutionDecisionAttributes: { // RequestCancelExternalWorkflowExecutionDecisionAttributes
 *         workflowId: "STRING_VALUE", // required
 *         runId: "STRING_VALUE",
 *         control: "STRING_VALUE",
 *       },
 *       startChildWorkflowExecutionDecisionAttributes: { // StartChildWorkflowExecutionDecisionAttributes
 *         workflowType: { // WorkflowType
 *           name: "STRING_VALUE", // required
 *           version: "STRING_VALUE", // required
 *         },
 *         workflowId: "STRING_VALUE", // required
 *         control: "STRING_VALUE",
 *         input: "STRING_VALUE",
 *         executionStartToCloseTimeout: "STRING_VALUE",
 *         taskList: {
 *           name: "STRING_VALUE", // required
 *         },
 *         taskPriority: "STRING_VALUE",
 *         taskStartToCloseTimeout: "STRING_VALUE",
 *         childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 *         tagList: [
 *           "STRING_VALUE",
 *         ],
 *         lambdaRole: "STRING_VALUE",
 *       },
 *       scheduleLambdaFunctionDecisionAttributes: { // ScheduleLambdaFunctionDecisionAttributes
 *         id: "STRING_VALUE", // required
 *         name: "STRING_VALUE", // required
 *         control: "STRING_VALUE",
 *         input: "STRING_VALUE",
 *         startToCloseTimeout: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   executionContext: "STRING_VALUE",
 *   taskList: {
 *     name: "STRING_VALUE", // required
 *   },
 *   taskListScheduleToStartTimeout: "STRING_VALUE",
 * };
 * const command = new RespondDecisionTaskCompletedCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RespondDecisionTaskCompletedCommandInput - {@link RespondDecisionTaskCompletedCommandInput}
 * @returns {@link RespondDecisionTaskCompletedCommandOutput}
 * @see {@link RespondDecisionTaskCompletedCommandInput} for command's `input` shape.
 * @see {@link RespondDecisionTaskCompletedCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 *
 * @public
 */
export class RespondDecisionTaskCompletedCommand extends $Command
  .classBuilder<
    RespondDecisionTaskCompletedCommandInput,
    RespondDecisionTaskCompletedCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleWorkflowService", "RespondDecisionTaskCompleted", {})
  .n("SWFClient", "RespondDecisionTaskCompletedCommand")
  .f(void 0, void 0)
  .ser(se_RespondDecisionTaskCompletedCommand)
  .de(de_RespondDecisionTaskCompletedCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RespondDecisionTaskCompletedInput;
      output: {};
    };
    sdk: {
      input: RespondDecisionTaskCompletedCommandInput;
      output: RespondDecisionTaskCompletedCommandOutput;
    };
  };
}
