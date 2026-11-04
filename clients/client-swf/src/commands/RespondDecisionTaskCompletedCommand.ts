// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RespondDecisionTaskCompletedInput } from "../models/models_0";
import { RespondDecisionTaskCompleted$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Used by deciders to tell the service that the DecisionTask identified by the `taskToken` has successfully completed. The `decisions` argument specifies the list of decisions made while processing the task.
 *
 * A `DecisionTaskCompleted` event is added to the workflow history. The `executionContext` specified is attached to the event in the workflow execution history.
 *
 * **Access Control**
 *
 * If an IAM policy grants permission to use `RespondDecisionTaskCompleted`, it can express permissions for the list of decisions in the `decisions` parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
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
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *
 * Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class RespondDecisionTaskCompletedCommand extends command<RespondDecisionTaskCompletedCommandInput, RespondDecisionTaskCompletedCommandOutput>(
  _ep0,
  _mw0,
  "RespondDecisionTaskCompleted",
  RespondDecisionTaskCompleted$
) {
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
