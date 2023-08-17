// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DecisionTask, PollForDecisionTaskInput } from "../models/models_0";
import { de_PollForDecisionTaskCommand, se_PollForDecisionTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PollForDecisionTaskCommand}.
 */
export interface PollForDecisionTaskCommandInput extends PollForDecisionTaskInput {}
/**
 * @public
 *
 * The output of {@link PollForDecisionTaskCommand}.
 */
export interface PollForDecisionTaskCommandOutput extends DecisionTask, __MetadataBearer {}

/**
 * @public
 * <p>Used by deciders to get a <a>DecisionTask</a> from the specified decision
 *         <code>taskList</code>. A decision task may be returned for any open workflow execution that
 *       is using the specified task list. The task includes a paginated view of the history of the
 *       workflow execution. The decider should use the workflow type and the history to determine how
 *       to properly handle the task.</p>
 *          <p>This action initiates a long poll, where the service holds the HTTP connection open and
 *       responds as soon a task becomes available. If no decision task is available in the specified
 *       task list before the timeout of 60 seconds expires, an empty result is returned. An empty
 *       result, in this context, means that a DecisionTask is returned, but that the value of
 *       taskToken is an empty string.</p>
 *          <important>
 *             <p>Deciders should set their client side socket timeout to at least 70 seconds (10
 *         seconds higher than the timeout).</p>
 *          </important>
 *          <important>
 *             <p>Because the number of workflow history events for a single workflow execution might
 *         be very large, the result returned might be split up across a number of pages. To retrieve
 *         subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the
 *           <code>nextPageToken</code> returned by the initial call. Note that you do
 *           <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this
 *           <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code>
 *         again.</p>
 *          </important>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the <code>taskList.name</code> parameter by using a
 *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
 *           action to access only certain task lists.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, PollForDecisionTaskCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, PollForDecisionTaskCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // PollForDecisionTaskInput
 *   domain: "STRING_VALUE", // required
 *   taskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 *   identity: "STRING_VALUE",
 *   nextPageToken: "STRING_VALUE",
 *   maximumPageSize: Number("int"),
 *   reverseOrder: true || false,
 *   startAtPreviousStartedEvent: true || false,
 * };
 * const command = new PollForDecisionTaskCommand(input);
 * const response = await client.send(command);
 * // { // DecisionTask
 * //   taskToken: "STRING_VALUE", // required
 * //   startedEventId: Number("long"), // required
 * //   workflowExecution: { // WorkflowExecution
 * //     workflowId: "STRING_VALUE", // required
 * //     runId: "STRING_VALUE", // required
 * //   },
 * //   workflowType: { // WorkflowType
 * //     name: "STRING_VALUE", // required
 * //     version: "STRING_VALUE", // required
 * //   },
 * //   events: [ // HistoryEventList // required
 * //     { // HistoryEvent
 * //       eventTimestamp: new Date("TIMESTAMP"), // required
 * //       eventType: "WorkflowExecutionStarted" || "WorkflowExecutionCancelRequested" || "WorkflowExecutionCompleted" || "CompleteWorkflowExecutionFailed" || "WorkflowExecutionFailed" || "FailWorkflowExecutionFailed" || "WorkflowExecutionTimedOut" || "WorkflowExecutionCanceled" || "CancelWorkflowExecutionFailed" || "WorkflowExecutionContinuedAsNew" || "ContinueAsNewWorkflowExecutionFailed" || "WorkflowExecutionTerminated" || "DecisionTaskScheduled" || "DecisionTaskStarted" || "DecisionTaskCompleted" || "DecisionTaskTimedOut" || "ActivityTaskScheduled" || "ScheduleActivityTaskFailed" || "ActivityTaskStarted" || "ActivityTaskCompleted" || "ActivityTaskFailed" || "ActivityTaskTimedOut" || "ActivityTaskCanceled" || "ActivityTaskCancelRequested" || "RequestCancelActivityTaskFailed" || "WorkflowExecutionSignaled" || "MarkerRecorded" || "RecordMarkerFailed" || "TimerStarted" || "StartTimerFailed" || "TimerFired" || "TimerCanceled" || "CancelTimerFailed" || "StartChildWorkflowExecutionInitiated" || "StartChildWorkflowExecutionFailed" || "ChildWorkflowExecutionStarted" || "ChildWorkflowExecutionCompleted" || "ChildWorkflowExecutionFailed" || "ChildWorkflowExecutionTimedOut" || "ChildWorkflowExecutionCanceled" || "ChildWorkflowExecutionTerminated" || "SignalExternalWorkflowExecutionInitiated" || "SignalExternalWorkflowExecutionFailed" || "ExternalWorkflowExecutionSignaled" || "RequestCancelExternalWorkflowExecutionInitiated" || "RequestCancelExternalWorkflowExecutionFailed" || "ExternalWorkflowExecutionCancelRequested" || "LambdaFunctionScheduled" || "LambdaFunctionStarted" || "LambdaFunctionCompleted" || "LambdaFunctionFailed" || "LambdaFunctionTimedOut" || "ScheduleLambdaFunctionFailed" || "StartLambdaFunctionFailed", // required
 * //       eventId: Number("long"), // required
 * //       workflowExecutionStartedEventAttributes: { // WorkflowExecutionStartedEventAttributes
 * //         input: "STRING_VALUE",
 * //         executionStartToCloseTimeout: "STRING_VALUE",
 * //         taskStartToCloseTimeout: "STRING_VALUE",
 * //         childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON", // required
 * //         taskList: { // TaskList
 * //           name: "STRING_VALUE", // required
 * //         },
 * //         taskPriority: "STRING_VALUE",
 * //         workflowType: {
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         tagList: [ // TagList
 * //           "STRING_VALUE",
 * //         ],
 * //         continuedExecutionRunId: "STRING_VALUE",
 * //         parentWorkflowExecution: {
 * //           workflowId: "STRING_VALUE", // required
 * //           runId: "STRING_VALUE", // required
 * //         },
 * //         parentInitiatedEventId: Number("long"),
 * //         lambdaRole: "STRING_VALUE",
 * //       },
 * //       workflowExecutionCompletedEventAttributes: { // WorkflowExecutionCompletedEventAttributes
 * //         result: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       completeWorkflowExecutionFailedEventAttributes: { // CompleteWorkflowExecutionFailedEventAttributes
 * //         cause: "UNHANDLED_DECISION" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       workflowExecutionFailedEventAttributes: { // WorkflowExecutionFailedEventAttributes
 * //         reason: "STRING_VALUE",
 * //         details: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       failWorkflowExecutionFailedEventAttributes: { // FailWorkflowExecutionFailedEventAttributes
 * //         cause: "UNHANDLED_DECISION" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       workflowExecutionTimedOutEventAttributes: { // WorkflowExecutionTimedOutEventAttributes
 * //         timeoutType: "START_TO_CLOSE", // required
 * //         childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON", // required
 * //       },
 * //       workflowExecutionCanceledEventAttributes: { // WorkflowExecutionCanceledEventAttributes
 * //         details: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       cancelWorkflowExecutionFailedEventAttributes: { // CancelWorkflowExecutionFailedEventAttributes
 * //         cause: "UNHANDLED_DECISION" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       workflowExecutionContinuedAsNewEventAttributes: { // WorkflowExecutionContinuedAsNewEventAttributes
 * //         input: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         newExecutionRunId: "STRING_VALUE", // required
 * //         executionStartToCloseTimeout: "STRING_VALUE",
 * //         taskList: {
 * //           name: "STRING_VALUE", // required
 * //         },
 * //         taskPriority: "STRING_VALUE",
 * //         taskStartToCloseTimeout: "STRING_VALUE",
 * //         childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON", // required
 * //         tagList: [
 * //           "STRING_VALUE",
 * //         ],
 * //         workflowType: {
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         lambdaRole: "STRING_VALUE",
 * //       },
 * //       continueAsNewWorkflowExecutionFailedEventAttributes: { // ContinueAsNewWorkflowExecutionFailedEventAttributes
 * //         cause: "UNHANDLED_DECISION" || "WORKFLOW_TYPE_DEPRECATED" || "WORKFLOW_TYPE_DOES_NOT_EXIST" || "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED" || "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED" || "DEFAULT_TASK_LIST_UNDEFINED" || "DEFAULT_CHILD_POLICY_UNDEFINED" || "CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       workflowExecutionTerminatedEventAttributes: { // WorkflowExecutionTerminatedEventAttributes
 * //         reason: "STRING_VALUE",
 * //         details: "STRING_VALUE",
 * //         childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON", // required
 * //         cause: "CHILD_POLICY_APPLIED" || "EVENT_LIMIT_EXCEEDED" || "OPERATOR_INITIATED",
 * //       },
 * //       workflowExecutionCancelRequestedEventAttributes: { // WorkflowExecutionCancelRequestedEventAttributes
 * //         externalWorkflowExecution: {
 * //           workflowId: "STRING_VALUE", // required
 * //           runId: "STRING_VALUE", // required
 * //         },
 * //         externalInitiatedEventId: Number("long"),
 * //         cause: "CHILD_POLICY_APPLIED",
 * //       },
 * //       decisionTaskScheduledEventAttributes: { // DecisionTaskScheduledEventAttributes
 * //         taskList: {
 * //           name: "STRING_VALUE", // required
 * //         },
 * //         taskPriority: "STRING_VALUE",
 * //         startToCloseTimeout: "STRING_VALUE",
 * //         scheduleToStartTimeout: "STRING_VALUE",
 * //       },
 * //       decisionTaskStartedEventAttributes: { // DecisionTaskStartedEventAttributes
 * //         identity: "STRING_VALUE",
 * //         scheduledEventId: Number("long"), // required
 * //       },
 * //       decisionTaskCompletedEventAttributes: { // DecisionTaskCompletedEventAttributes
 * //         executionContext: "STRING_VALUE",
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //         taskList: {
 * //           name: "STRING_VALUE", // required
 * //         },
 * //         taskListScheduleToStartTimeout: "STRING_VALUE",
 * //       },
 * //       decisionTaskTimedOutEventAttributes: { // DecisionTaskTimedOutEventAttributes
 * //         timeoutType: "START_TO_CLOSE" || "SCHEDULE_TO_START", // required
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       activityTaskScheduledEventAttributes: { // ActivityTaskScheduledEventAttributes
 * //         activityType: { // ActivityType
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         activityId: "STRING_VALUE", // required
 * //         input: "STRING_VALUE",
 * //         control: "STRING_VALUE",
 * //         scheduleToStartTimeout: "STRING_VALUE",
 * //         scheduleToCloseTimeout: "STRING_VALUE",
 * //         startToCloseTimeout: "STRING_VALUE",
 * //         taskList: {
 * //           name: "STRING_VALUE", // required
 * //         },
 * //         taskPriority: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         heartbeatTimeout: "STRING_VALUE",
 * //       },
 * //       activityTaskStartedEventAttributes: { // ActivityTaskStartedEventAttributes
 * //         identity: "STRING_VALUE",
 * //         scheduledEventId: Number("long"), // required
 * //       },
 * //       activityTaskCompletedEventAttributes: { // ActivityTaskCompletedEventAttributes
 * //         result: "STRING_VALUE",
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       activityTaskFailedEventAttributes: { // ActivityTaskFailedEventAttributes
 * //         reason: "STRING_VALUE",
 * //         details: "STRING_VALUE",
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       activityTaskTimedOutEventAttributes: { // ActivityTaskTimedOutEventAttributes
 * //         timeoutType: "START_TO_CLOSE" || "SCHEDULE_TO_START" || "SCHEDULE_TO_CLOSE" || "HEARTBEAT", // required
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //         details: "STRING_VALUE",
 * //       },
 * //       activityTaskCanceledEventAttributes: { // ActivityTaskCanceledEventAttributes
 * //         details: "STRING_VALUE",
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //         latestCancelRequestedEventId: Number("long"),
 * //       },
 * //       activityTaskCancelRequestedEventAttributes: { // ActivityTaskCancelRequestedEventAttributes
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         activityId: "STRING_VALUE", // required
 * //       },
 * //       workflowExecutionSignaledEventAttributes: { // WorkflowExecutionSignaledEventAttributes
 * //         signalName: "STRING_VALUE", // required
 * //         input: "STRING_VALUE",
 * //         externalWorkflowExecution: {
 * //           workflowId: "STRING_VALUE", // required
 * //           runId: "STRING_VALUE", // required
 * //         },
 * //         externalInitiatedEventId: Number("long"),
 * //       },
 * //       markerRecordedEventAttributes: { // MarkerRecordedEventAttributes
 * //         markerName: "STRING_VALUE", // required
 * //         details: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       recordMarkerFailedEventAttributes: { // RecordMarkerFailedEventAttributes
 * //         markerName: "STRING_VALUE", // required
 * //         cause: "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       timerStartedEventAttributes: { // TimerStartedEventAttributes
 * //         timerId: "STRING_VALUE", // required
 * //         control: "STRING_VALUE",
 * //         startToFireTimeout: "STRING_VALUE", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       timerFiredEventAttributes: { // TimerFiredEventAttributes
 * //         timerId: "STRING_VALUE", // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       timerCanceledEventAttributes: { // TimerCanceledEventAttributes
 * //         timerId: "STRING_VALUE", // required
 * //         startedEventId: Number("long"), // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       startChildWorkflowExecutionInitiatedEventAttributes: { // StartChildWorkflowExecutionInitiatedEventAttributes
 * //         workflowId: "STRING_VALUE", // required
 * //         workflowType: {
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         control: "STRING_VALUE",
 * //         input: "STRING_VALUE",
 * //         executionStartToCloseTimeout: "STRING_VALUE",
 * //         taskList: "<TaskList>", // required
 * //         taskPriority: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON", // required
 * //         taskStartToCloseTimeout: "STRING_VALUE",
 * //         tagList: [
 * //           "STRING_VALUE",
 * //         ],
 * //         lambdaRole: "STRING_VALUE",
 * //       },
 * //       childWorkflowExecutionStartedEventAttributes: { // ChildWorkflowExecutionStartedEventAttributes
 * //         workflowExecution: {
 * //           workflowId: "STRING_VALUE", // required
 * //           runId: "STRING_VALUE", // required
 * //         },
 * //         workflowType: {
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         initiatedEventId: Number("long"), // required
 * //       },
 * //       childWorkflowExecutionCompletedEventAttributes: { // ChildWorkflowExecutionCompletedEventAttributes
 * //         workflowExecution: "<WorkflowExecution>", // required
 * //         workflowType: "<WorkflowType>", // required
 * //         result: "STRING_VALUE",
 * //         initiatedEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       childWorkflowExecutionFailedEventAttributes: { // ChildWorkflowExecutionFailedEventAttributes
 * //         workflowExecution: "<WorkflowExecution>", // required
 * //         workflowType: "<WorkflowType>", // required
 * //         reason: "STRING_VALUE",
 * //         details: "STRING_VALUE",
 * //         initiatedEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       childWorkflowExecutionTimedOutEventAttributes: { // ChildWorkflowExecutionTimedOutEventAttributes
 * //         workflowExecution: "<WorkflowExecution>", // required
 * //         workflowType: "<WorkflowType>", // required
 * //         timeoutType: "START_TO_CLOSE", // required
 * //         initiatedEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       childWorkflowExecutionCanceledEventAttributes: { // ChildWorkflowExecutionCanceledEventAttributes
 * //         workflowExecution: "<WorkflowExecution>", // required
 * //         workflowType: "<WorkflowType>", // required
 * //         details: "STRING_VALUE",
 * //         initiatedEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       childWorkflowExecutionTerminatedEventAttributes: { // ChildWorkflowExecutionTerminatedEventAttributes
 * //         workflowExecution: "<WorkflowExecution>", // required
 * //         workflowType: "<WorkflowType>", // required
 * //         initiatedEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //       },
 * //       signalExternalWorkflowExecutionInitiatedEventAttributes: { // SignalExternalWorkflowExecutionInitiatedEventAttributes
 * //         workflowId: "STRING_VALUE", // required
 * //         runId: "STRING_VALUE",
 * //         signalName: "STRING_VALUE", // required
 * //         input: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         control: "STRING_VALUE",
 * //       },
 * //       externalWorkflowExecutionSignaledEventAttributes: { // ExternalWorkflowExecutionSignaledEventAttributes
 * //         workflowExecution: "<WorkflowExecution>", // required
 * //         initiatedEventId: Number("long"), // required
 * //       },
 * //       signalExternalWorkflowExecutionFailedEventAttributes: { // SignalExternalWorkflowExecutionFailedEventAttributes
 * //         workflowId: "STRING_VALUE", // required
 * //         runId: "STRING_VALUE",
 * //         cause: "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION" || "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED" || "OPERATION_NOT_PERMITTED", // required
 * //         initiatedEventId: Number("long"), // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         control: "STRING_VALUE",
 * //       },
 * //       externalWorkflowExecutionCancelRequestedEventAttributes: { // ExternalWorkflowExecutionCancelRequestedEventAttributes
 * //         workflowExecution: "<WorkflowExecution>", // required
 * //         initiatedEventId: Number("long"), // required
 * //       },
 * //       requestCancelExternalWorkflowExecutionInitiatedEventAttributes: { // RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
 * //         workflowId: "STRING_VALUE", // required
 * //         runId: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         control: "STRING_VALUE",
 * //       },
 * //       requestCancelExternalWorkflowExecutionFailedEventAttributes: { // RequestCancelExternalWorkflowExecutionFailedEventAttributes
 * //         workflowId: "STRING_VALUE", // required
 * //         runId: "STRING_VALUE",
 * //         cause: "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION" || "REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED" || "OPERATION_NOT_PERMITTED", // required
 * //         initiatedEventId: Number("long"), // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         control: "STRING_VALUE",
 * //       },
 * //       scheduleActivityTaskFailedEventAttributes: { // ScheduleActivityTaskFailedEventAttributes
 * //         activityType: {
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         activityId: "STRING_VALUE", // required
 * //         cause: "ACTIVITY_TYPE_DEPRECATED" || "ACTIVITY_TYPE_DOES_NOT_EXIST" || "ACTIVITY_ID_ALREADY_IN_USE" || "OPEN_ACTIVITIES_LIMIT_EXCEEDED" || "ACTIVITY_CREATION_RATE_EXCEEDED" || "DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED" || "DEFAULT_TASK_LIST_UNDEFINED" || "DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED" || "DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED" || "DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       requestCancelActivityTaskFailedEventAttributes: { // RequestCancelActivityTaskFailedEventAttributes
 * //         activityId: "STRING_VALUE", // required
 * //         cause: "ACTIVITY_ID_UNKNOWN" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       startTimerFailedEventAttributes: { // StartTimerFailedEventAttributes
 * //         timerId: "STRING_VALUE", // required
 * //         cause: "TIMER_ID_ALREADY_IN_USE" || "OPEN_TIMERS_LIMIT_EXCEEDED" || "TIMER_CREATION_RATE_EXCEEDED" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       cancelTimerFailedEventAttributes: { // CancelTimerFailedEventAttributes
 * //         timerId: "STRING_VALUE", // required
 * //         cause: "TIMER_ID_UNKNOWN" || "OPERATION_NOT_PERMITTED", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       startChildWorkflowExecutionFailedEventAttributes: { // StartChildWorkflowExecutionFailedEventAttributes
 * //         workflowType: "<WorkflowType>", // required
 * //         cause: "WORKFLOW_TYPE_DOES_NOT_EXIST" || "WORKFLOW_TYPE_DEPRECATED" || "OPEN_CHILDREN_LIMIT_EXCEEDED" || "OPEN_WORKFLOWS_LIMIT_EXCEEDED" || "CHILD_CREATION_RATE_EXCEEDED" || "WORKFLOW_ALREADY_RUNNING" || "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED" || "DEFAULT_TASK_LIST_UNDEFINED" || "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED" || "DEFAULT_CHILD_POLICY_UNDEFINED" || "OPERATION_NOT_PERMITTED", // required
 * //         workflowId: "STRING_VALUE", // required
 * //         initiatedEventId: Number("long"), // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //         control: "STRING_VALUE",
 * //       },
 * //       lambdaFunctionScheduledEventAttributes: { // LambdaFunctionScheduledEventAttributes
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         control: "STRING_VALUE",
 * //         input: "STRING_VALUE",
 * //         startToCloseTimeout: "STRING_VALUE",
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       lambdaFunctionStartedEventAttributes: { // LambdaFunctionStartedEventAttributes
 * //         scheduledEventId: Number("long"), // required
 * //       },
 * //       lambdaFunctionCompletedEventAttributes: { // LambdaFunctionCompletedEventAttributes
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //         result: "STRING_VALUE",
 * //       },
 * //       lambdaFunctionFailedEventAttributes: { // LambdaFunctionFailedEventAttributes
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //         reason: "STRING_VALUE",
 * //         details: "STRING_VALUE",
 * //       },
 * //       lambdaFunctionTimedOutEventAttributes: { // LambdaFunctionTimedOutEventAttributes
 * //         scheduledEventId: Number("long"), // required
 * //         startedEventId: Number("long"), // required
 * //         timeoutType: "START_TO_CLOSE",
 * //       },
 * //       scheduleLambdaFunctionFailedEventAttributes: { // ScheduleLambdaFunctionFailedEventAttributes
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         cause: "ID_ALREADY_IN_USE" || "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED" || "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED" || "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION", // required
 * //         decisionTaskCompletedEventId: Number("long"), // required
 * //       },
 * //       startLambdaFunctionFailedEventAttributes: { // StartLambdaFunctionFailedEventAttributes
 * //         scheduledEventId: Number("long"),
 * //         cause: "ASSUME_ROLE_FAILED",
 * //         message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * //   previousStartedEventId: Number("long"),
 * // };
 *
 * ```
 *
 * @param PollForDecisionTaskCommandInput - {@link PollForDecisionTaskCommandInput}
 * @returns {@link PollForDecisionTaskCommandOutput}
 * @see {@link PollForDecisionTaskCommandInput} for command's `input` shape.
 * @see {@link PollForDecisionTaskCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
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
 */
export class PollForDecisionTaskCommand extends $Command<
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PollForDecisionTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PollForDecisionTaskCommandInput, PollForDecisionTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PollForDecisionTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "PollForDecisionTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PollForDecisionTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PollForDecisionTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForDecisionTaskCommandOutput> {
    return de_PollForDecisionTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
