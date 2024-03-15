// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SWFServiceException as __BaseException } from "./SWFServiceException";

/**
 * <p>Represents an activity type.</p>
 * @public
 */
export interface ActivityType {
  /**
   * <p>The name of this activity.</p>
   *          <note>
   *             <p>The combination of activity type name and version must be unique within a domain.</p>
   *          </note>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of this activity.</p>
   *          <note>
   *             <p>The combination of activity type name and version must be unique with in a domain.</p>
   *          </note>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>Represents a workflow execution.</p>
 * @public
 */
export interface WorkflowExecution {
  /**
   * <p>The user defined identifier associated with the workflow execution.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>A system-generated unique identifier for the workflow execution.</p>
   * @public
   */
  runId: string | undefined;
}

/**
 * <p>Unit of work sent to an activity worker.</p>
 * @public
 */
export interface ActivityTask {
  /**
   * <p>The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.</p>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>The unique ID of the task.</p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded in the history.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>The workflow execution that started this activity task.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of this activity task.</p>
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The inputs provided when the activity task was scheduled. The form of the input is user defined and should be meaningful to the activity implementation.</p>
   * @public
   */
  input?: string;
}

/**
 * <p>Provides the details of the <code>ActivityTaskCanceled</code> event.</p>
 * @public
 */
export interface ActivityTaskCanceledEventAttributes {
  /**
   * <p>Details of the cancellation.</p>
   * @public
   */
  details?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>If set, contains the ID of the last <code>ActivityTaskCancelRequested</code> event recorded for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  latestCancelRequestedEventId?: number;
}

/**
 * <p>Provides the details of the <code>ActivityTaskCancelRequested</code> event.</p>
 * @public
 */
export interface ActivityTaskCancelRequestedEventAttributes {
  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelActivityTask</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The unique ID of the task.</p>
   * @public
   */
  activityId: string | undefined;
}

/**
 * <p>Provides the details of the <code>ActivityTaskCompleted</code> event.</p>
 * @public
 */
export interface ActivityTaskCompletedEventAttributes {
  /**
   * <p>The results of the activity task.</p>
   * @public
   */
  result?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>ActivityTaskFailed</code> event.</p>
 * @public
 */
export interface ActivityTaskFailedEventAttributes {
  /**
   * <p>The reason provided for the failure.</p>
   * @public
   */
  reason?: string;

  /**
   * <p>The details of the failure.</p>
   * @public
   */
  details?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * <p>Represents a task list.</p>
 * @public
 */
export interface TaskList {
  /**
   * <p>The name of the task list.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Provides the details of the <code>ActivityTaskScheduled</code> event.</p>
 * @public
 */
export interface ActivityTaskScheduledEventAttributes {
  /**
   * <p>The type of the activity task.</p>
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The unique ID of the activity task.</p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p>The input provided to the activity task.</p>
   * @public
   */
  input?: string;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.</p>
   * @public
   */
  control?: string;

  /**
   * <p>The maximum amount of time the activity task can wait to be assigned to a worker.</p>
   * @public
   */
  scheduleToStartTimeout?: string;

  /**
   * <p>The maximum amount of time for this activity task.</p>
   * @public
   */
  scheduleToCloseTimeout?: string;

  /**
   * <p>The maximum amount of time a worker may take to process the activity task.</p>
   * @public
   */
  startToCloseTimeout?: string;

  /**
   * <p>The task list in which the activity task has been scheduled.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>
   *          The priority to assign to the scheduled activity task. If set, this overrides any default
   *       priority value that was assigned when the activity type was registered.</p>
   *          <p>Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The maximum time before which the worker processing this task must report progress by calling
   *       <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed out. If
   *       the worker subsequently attempts to record a heartbeat or return a result, it is ignored.</p>
   * @public
   */
  heartbeatTimeout?: string;
}

/**
 * <p>Provides the details of the <code>ActivityTaskStarted</code> event.</p>
 * @public
 */
export interface ActivityTaskStartedEventAttributes {
  /**
   * <p>Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this identity is user defined.</p>
   * @public
   */
  identity?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;
}

/**
 * <p>Status information about an activity task.</p>
 * @public
 */
export interface ActivityTaskStatus {
  /**
   * <p>Set to <code>true</code> if cancellation of the task is requested.</p>
   * @public
   */
  cancelRequested: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ActivityTaskTimeoutType = {
  HEARTBEAT: "HEARTBEAT",
  SCHEDULE_TO_CLOSE: "SCHEDULE_TO_CLOSE",
  SCHEDULE_TO_START: "SCHEDULE_TO_START",
  START_TO_CLOSE: "START_TO_CLOSE",
} as const;

/**
 * @public
 */
export type ActivityTaskTimeoutType = (typeof ActivityTaskTimeoutType)[keyof typeof ActivityTaskTimeoutType];

/**
 * <p>Provides the details of the <code>ActivityTaskTimedOut</code> event.</p>
 * @public
 */
export interface ActivityTaskTimedOutEventAttributes {
  /**
   * <p>The type of the timeout that caused this event.</p>
   * @public
   */
  timeoutType: ActivityTaskTimeoutType | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>Contains the content of the <code>details</code> parameter for the last call made by the activity to
   *       <code>RecordActivityTaskHeartbeat</code>.</p>
   * @public
   */
  details?: string;
}

/**
 * <p>Configuration settings registered with the activity type.</p>
 * @public
 */
export interface ActivityTypeConfiguration {
  /**
   * <p>
   *          The default maximum duration for tasks of an activity type specified when registering the activity
   *       type. You can override this default when scheduling a task through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskStartToCloseTimeout?: string;

  /**
   * <p>
   *          The default maximum time, in seconds, before which a worker processing a task must report
   *       progress by calling <a>RecordActivityTaskHeartbeat</a>.</p>
   *          <p>You can specify this value only when <i>registering</i> an activity type. The registered default value can be
   *       overridden when you schedule a task through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>. If the activity
   *       worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an
   *       <code>UnknownResource</code> fault. In this case, Amazon SWF no longer considers the activity task to be valid;
   *       the activity worker should clean up the activity task.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskHeartbeatTimeout?: string;

  /**
   * <p>
   *          The default task list specified for this activity type at registration. This default is used if
   *       a task list isn't provided when a task is scheduled through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>. You can override the default registered task list when scheduling a task through the
   *       <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   * @public
   */
  defaultTaskList?: TaskList;

  /**
   * <p>
   *          The default task priority for tasks of this activity type, specified at registration. If not
   *       set, then <code>0</code> is used as the default priority. This default can be overridden when scheduling an activity
   *       task.</p>
   *          <p>Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  defaultTaskPriority?: string;

  /**
   * <p>
   *          The default maximum duration, specified when registering the activity type, that a task of an
   *       activity type can wait before being assigned to a worker. You can override this default when scheduling a task
   *       through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskScheduleToStartTimeout?: string;

  /**
   * <p>
   *          The default maximum duration, specified when registering the activity type, for tasks of this activity
   *       type. You can override this default when scheduling a task through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskScheduleToCloseTimeout?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  DEPRECATED: "DEPRECATED",
  REGISTERED: "REGISTERED",
} as const;

/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * <p>Detailed information about an activity type.</p>
 * @public
 */
export interface ActivityTypeInfo {
  /**
   * <p>The <a>ActivityType</a> type structure representing the activity type.</p>
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The current status of the activity type.</p>
   * @public
   */
  status: RegistrationStatus | undefined;

  /**
   * <p>The description of the activity type provided in <a>RegisterActivityType</a>.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The date and time this activity type was created through <a>RegisterActivityType</a>.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>If DEPRECATED, the date and time <a>DeprecateActivityType</a> was called.</p>
   * @public
   */
  deprecationDate?: Date;
}

/**
 * <p>Detailed information about an activity type.</p>
 * @public
 */
export interface ActivityTypeDetail {
  /**
   * <p>General information about the activity type.</p>
   *          <p>The status of activity type (returned in the ActivityTypeInfo structure) can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REGISTERED</code> – The type is registered and available. Workers supporting this
   *         type should be running.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code> – The type was deprecated using <a>DeprecateActivityType</a>, but is
   *         still in use. You should keep workers supporting this type running.
   *         You cannot create new tasks of this type.
   *       </p>
   *             </li>
   *          </ul>
   * @public
   */
  typeInfo: ActivityTypeInfo | undefined;

  /**
   * <p>The configuration settings registered with the activity type.</p>
   * @public
   */
  configuration: ActivityTypeConfiguration | undefined;
}

/**
 * <p>Contains a paginated list of activity type information structures.</p>
 * @public
 */
export interface ActivityTypeInfos {
  /**
   * <p>List of activity type information.</p>
   * @public
   */
  typeInfos: ActivityTypeInfo[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   * @public
   */
  nextPageToken?: string;
}

/**
 * <p>Provides the details of the <code>CancelTimer</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface CancelTimerDecisionAttributes {
  /**
   * <p>
   *          The unique ID of the timer to cancel.</p>
   * @public
   */
  timerId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CancelTimerFailedCause = {
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  TIMER_ID_UNKNOWN: "TIMER_ID_UNKNOWN",
} as const;

/**
 * @public
 */
export type CancelTimerFailedCause = (typeof CancelTimerFailedCause)[keyof typeof CancelTimerFailedCause];

/**
 * <p>Provides the details of the <code>CancelTimerFailed</code> event.</p>
 * @public
 */
export interface CancelTimerFailedEventAttributes {
  /**
   * <p>The timerId provided in the <code>CancelTimer</code> decision that failed.</p>
   * @public
   */
  timerId: string | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: CancelTimerFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelTimer</code> decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface CancelWorkflowExecutionDecisionAttributes {
  /**
   * <p>
   *          Details of the cancellation.</p>
   * @public
   */
  details?: string;
}

/**
 * @public
 * @enum
 */
export const CancelWorkflowExecutionFailedCause = {
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  UNHANDLED_DECISION: "UNHANDLED_DECISION",
} as const;

/**
 * @public
 */
export type CancelWorkflowExecutionFailedCause =
  (typeof CancelWorkflowExecutionFailedCause)[keyof typeof CancelWorkflowExecutionFailedCause];

/**
 * <p>Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface CancelWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: CancelWorkflowExecutionFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ChildPolicy = {
  ABANDON: "ABANDON",
  REQUEST_CANCEL: "REQUEST_CANCEL",
  TERMINATE: "TERMINATE",
} as const;

/**
 * @public
 */
export type ChildPolicy = (typeof ChildPolicy)[keyof typeof ChildPolicy];

/**
 * <p>Represents a workflow type.</p>
 * @public
 */
export interface WorkflowType {
  /**
   * <p>
   *          The name of the workflow type.</p>
   *          <note>
   *             <p>The combination of workflow type name and version must be unique with in a domain.</p>
   *          </note>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *          The version of the workflow type.</p>
   *          <note>
   *             <p>The combination of workflow type name and version must be unique with in a domain.</p>
   *          </note>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.</p>
 * @public
 */
export interface ChildWorkflowExecutionCanceledEventAttributes {
  /**
   * <p>The child workflow execution that was canceled.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>Details of the cancellation (if provided).</p>
   * @public
   */
  details?: string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.</p>
 * @public
 */
export interface ChildWorkflowExecutionCompletedEventAttributes {
  /**
   * <p>The child workflow execution that was completed.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The result of the child workflow execution.</p>
   * @public
   */
  result?: string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface ChildWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The child workflow execution that failed.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The reason for the failure (if provided).</p>
   * @public
   */
  reason?: string;

  /**
   * <p>The details of the failure (if provided).</p>
   * @public
   */
  details?: string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.</p>
 * @public
 */
export interface ChildWorkflowExecutionStartedEventAttributes {
  /**
   * <p>The child workflow execution that was started.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.</p>
 * @public
 */
export interface ChildWorkflowExecutionTerminatedEventAttributes {
  /**
   * <p>The child workflow execution that was terminated.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowExecutionTimeoutType = {
  START_TO_CLOSE: "START_TO_CLOSE",
} as const;

/**
 * @public
 */
export type WorkflowExecutionTimeoutType =
  (typeof WorkflowExecutionTimeoutType)[keyof typeof WorkflowExecutionTimeoutType];

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.</p>
 * @public
 */
export interface ChildWorkflowExecutionTimedOutEventAttributes {
  /**
   * <p>The child workflow execution that timed out.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The type of the timeout that caused the child workflow execution to time out.</p>
   * @public
   */
  timeoutType: WorkflowExecutionTimeoutType | undefined;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const CloseStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  CONTINUED_AS_NEW: "CONTINUED_AS_NEW",
  FAILED: "FAILED",
  TERMINATED: "TERMINATED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type CloseStatus = (typeof CloseStatus)[keyof typeof CloseStatus];

/**
 * <p>Used to filter the closed workflow executions in visibility APIs by their close status.</p>
 * @public
 */
export interface CloseStatusFilter {
  /**
   * <p>
   *          The close status that must match the close status of an execution for it to meet the criteria of
   *       this filter.</p>
   * @public
   */
  status: CloseStatus | undefined;
}

/**
 * <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface CompleteWorkflowExecutionDecisionAttributes {
  /**
   * <p>The result of the workflow execution. The form of the result is implementation defined.</p>
   * @public
   */
  result?: string;
}

/**
 * @public
 * @enum
 */
export const CompleteWorkflowExecutionFailedCause = {
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  UNHANDLED_DECISION: "UNHANDLED_DECISION",
} as const;

/**
 * @public
 */
export type CompleteWorkflowExecutionFailedCause =
  (typeof CompleteWorkflowExecutionFailedCause)[keyof typeof CompleteWorkflowExecutionFailedCause];

/**
 * <p>Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface CompleteWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: CompleteWorkflowExecutionFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CompleteWorkflowExecution</code> decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with the
 *               appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>tag</code> – A tag used to identify the workflow execution</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
  /**
   * <p>The input provided to the new workflow execution.</p>
   * @public
   */
  input?: string;

  /**
   * <p>If set, specifies the total duration for this workflow execution. This overrides the
   *       <code>defaultExecutionStartToCloseTimeout</code> specified when registering the workflow type.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this field. If neither this field is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The task list to use for the decisions of the new (continued) workflow
   *       execution.</p>
   * @public
   */
  taskList?: TaskList;

  /**
   * <p>
   *          The task priority that, if set, specifies the priority for the decision tasks for this workflow
   *       execution. This overrides the defaultTaskPriority specified when registering the workflow type.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a>  in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>Specifies the maximum duration of decision tasks for the new workflow execution. This parameter overrides the
   *       <code>defaultTaskStartToCloseTimout</code> specified when registering the workflow type using
   *       <a>RegisterWorkflowType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A task start-to-close timeout for the new workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated
   *       by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout. This policy
   *       overrides the default child policy specified when registering the workflow type using
   *       <a>RegisterWorkflowType</a>.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  childPolicy?: ChildPolicy;

  /**
   * <p>The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can
   *       list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or
   *       <a>ListClosedWorkflowExecutions</a> and specifying a <a>TagFilter</a>.</p>
   * @public
   */
  tagList?: string[];

  /**
   * <p>The version of the workflow to start.</p>
   * @public
   */
  workflowTypeVersion?: string;

  /**
   * <p>The IAM role to attach to the new (continued) execution.</p>
   * @public
   */
  lambdaRole?: string;
}

/**
 * @public
 * @enum
 */
export const ContinueAsNewWorkflowExecutionFailedCause = {
  CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED: "CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED",
  DEFAULT_CHILD_POLICY_UNDEFINED: "DEFAULT_CHILD_POLICY_UNDEFINED",
  DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED: "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED",
  DEFAULT_TASK_LIST_UNDEFINED: "DEFAULT_TASK_LIST_UNDEFINED",
  DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED: "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED",
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  UNHANDLED_DECISION: "UNHANDLED_DECISION",
  WORKFLOW_TYPE_DEPRECATED: "WORKFLOW_TYPE_DEPRECATED",
  WORKFLOW_TYPE_DOES_NOT_EXIST: "WORKFLOW_TYPE_DOES_NOT_EXIST",
} as const;

/**
 * @public
 */
export type ContinueAsNewWorkflowExecutionFailedCause =
  (typeof ContinueAsNewWorkflowExecutionFailedCause)[keyof typeof ContinueAsNewWorkflowExecutionFailedCause];

/**
 * <p>Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: ContinueAsNewWorkflowExecutionFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>ContinueAsNewWorkflowExecution</code> decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if
 *       specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example:
 *       <code>"oldestDate": 1325376070.</code>
 *          </p>
 * @public
 */
export interface ExecutionTimeFilter {
  /**
   * <p>Specifies the oldest start or close date and time to return.</p>
   * @public
   */
  oldestDate: Date | undefined;

  /**
   * <p>Specifies the latest start or close date and time to return.</p>
   * @public
   */
  latestDate?: Date;
}

/**
 * <p>Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.</p>
 * @public
 */
export interface WorkflowExecutionFilter {
  /**
   * <p>The workflowId to pass of match the criteria of this filter.</p>
   * @public
   */
  workflowId: string | undefined;
}

/**
 * <p>Used to filter the workflow executions in visibility APIs based on a tag.</p>
 * @public
 */
export interface TagFilter {
  /**
   * <p>
   *          Specifies the tag that must be associated with the execution for it to meet the filter
   *       criteria.</p>
   *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
   * @public
   */
  tag: string | undefined;
}

/**
 * <p>Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.</p>
 * @public
 */
export interface WorkflowTypeFilter {
  /**
   * <p>
   *          Name of the workflow type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Version of the workflow type.</p>
   * @public
   */
  version?: string;
}

/**
 * @public
 */
export interface CountClosedWorkflowExecutionsInput {
  /**
   * <p>The name of the domain containing the workflow executions to count.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>If specified, only workflow executions that meet the start time criteria of the filter
   *       are counted.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   * @public
   */
  startTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>If specified, only workflow executions that meet the close time criteria of the filter
   *       are counted.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   * @public
   */
  closeTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>If specified, only workflow executions matching the <code>WorkflowId</code> in the
   *       filter are counted.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  executionFilter?: WorkflowExecutionFilter;

  /**
   * <p>If specified, indicates the type of the workflow executions to be counted.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  typeFilter?: WorkflowTypeFilter;

  /**
   * <p>If specified, only executions that have a tag that matches the filter are
   *       counted.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  tagFilter?: TagFilter;

  /**
   * <p>If specified, only workflow executions that match this close status are counted. This
   *       filter has an affect only if <code>executionStatus</code> is specified as
   *       <code>CLOSED</code>.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  closeStatusFilter?: CloseStatusFilter;
}

/**
 * <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 * @public
 */
export class OperationNotPermittedFault extends __BaseException {
  readonly name: "OperationNotPermittedFault" = "OperationNotPermittedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedFault, __BaseException>) {
    super({
      name: "OperationNotPermittedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedFault.prototype);
  }
}

/**
 * <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 * @public
 */
export class UnknownResourceFault extends __BaseException {
  readonly name: "UnknownResourceFault" = "UnknownResourceFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownResourceFault, __BaseException>) {
    super({
      name: "UnknownResourceFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownResourceFault.prototype);
  }
}

/**
 * <p>Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or
 *       <a>CountClosedWorkflowExecutions</a>
 *          </p>
 * @public
 */
export interface WorkflowExecutionCount {
  /**
   * <p>The number of workflow executions.</p>
   * @public
   */
  count: number | undefined;

  /**
   * <p>If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.</p>
   * @public
   */
  truncated?: boolean;
}

/**
 * @public
 */
export interface CountOpenWorkflowExecutionsInput {
  /**
   * <p>The name of the domain containing the workflow executions to count.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>Specifies the start time criteria that workflow executions must meet in order to be
   *       counted.</p>
   * @public
   */
  startTimeFilter: ExecutionTimeFilter | undefined;

  /**
   * <p>Specifies the type of the workflow executions to be counted.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   * @public
   */
  typeFilter?: WorkflowTypeFilter;

  /**
   * <p>If specified, only executions that have a tag that matches the filter are
   *       counted.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   * @public
   */
  tagFilter?: TagFilter;

  /**
   * <p>If specified, only workflow executions matching the <code>WorkflowId</code> in the
   *       filter are counted.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   * @public
   */
  executionFilter?: WorkflowExecutionFilter;
}

/**
 * @public
 */
export interface CountPendingActivityTasksInput {
  /**
   * <p>The name of the domain that contains the task list.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The name of the task list.</p>
   * @public
   */
  taskList: TaskList | undefined;
}

/**
 * <p>Contains the count of tasks in a task list.</p>
 * @public
 */
export interface PendingTaskCount {
  /**
   * <p>The number of tasks in the task list.</p>
   * @public
   */
  count: number | undefined;

  /**
   * <p>If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.</p>
   * @public
   */
  truncated?: boolean;
}

/**
 * @public
 */
export interface CountPendingDecisionTasksInput {
  /**
   * <p>The name of the domain that contains the task list.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The name of the task list.</p>
   * @public
   */
  taskList: TaskList | undefined;
}

/**
 * @public
 * @enum
 */
export const DecisionType = {
  CancelTimer: "CancelTimer",
  CancelWorkflowExecution: "CancelWorkflowExecution",
  CompleteWorkflowExecution: "CompleteWorkflowExecution",
  ContinueAsNewWorkflowExecution: "ContinueAsNewWorkflowExecution",
  FailWorkflowExecution: "FailWorkflowExecution",
  RecordMarker: "RecordMarker",
  RequestCancelActivityTask: "RequestCancelActivityTask",
  RequestCancelExternalWorkflowExecution: "RequestCancelExternalWorkflowExecution",
  ScheduleActivityTask: "ScheduleActivityTask",
  ScheduleLambdaFunction: "ScheduleLambdaFunction",
  SignalExternalWorkflowExecution: "SignalExternalWorkflowExecution",
  StartChildWorkflowExecution: "StartChildWorkflowExecution",
  StartTimer: "StartTimer",
} as const;

/**
 * @public
 */
export type DecisionType = (typeof DecisionType)[keyof typeof DecisionType];

/**
 * <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *   <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
 *           in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface FailWorkflowExecutionDecisionAttributes {
  /**
   * <p>A descriptive reason for the failure that may help in diagnostics.</p>
   * @public
   */
  reason?: string;

  /**
   * <p>
   *          Details of the failure.</p>
   * @public
   */
  details?: string;
}

/**
 * <p>Provides the details of the <code>RecordMarker</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface RecordMarkerDecisionAttributes {
  /**
   * <p>
   *          The name of the marker.</p>
   * @public
   */
  markerName: string | undefined;

  /**
   * <p>
   *          The details of the marker.</p>
   * @public
   */
  details?: string;
}

/**
 * <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *   <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
 *           in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface RequestCancelActivityTaskDecisionAttributes {
  /**
   * <p>The <code>activityId</code> of the activity task to be canceled.</p>
   * @public
   */
  activityId: string | undefined;
}

/**
 * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
  /**
   * <p>
   *          The <code>workflowId</code> of the external workflow execution to cancel.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution to cancel.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>The data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   * @public
   */
  control?: string;
}

/**
 * <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with the
 *   appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *   <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
 *           in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface ScheduleActivityTaskDecisionAttributes {
  /**
   * <p>
   *          The type of the activity task to schedule.</p>
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * <p>
   *          The <code>activityId</code> of the activity task.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.</p>
   * @public
   */
  control?: string;

  /**
   * <p>The input provided to the activity task.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The maximum duration for this activity task.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A schedule-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  scheduleToCloseTimeout?: string;

  /**
   * <p>If set, specifies the name of the task list in which to schedule the activity task. If not specified, the
   *       <code>defaultTaskList</code> registered with the activity type is used.</p>
   *          <note>
   *             <p>A task list for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default task list was specified at registration time then a fault is returned.</p>
   *          </note>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  taskList?: TaskList;

  /**
   * <p>
   *          If set, specifies the priority with which the activity task is to be assigned to a worker. This
   *       overrides the defaultTaskPriority specified when registering the activity type using <a>RegisterActivityType</a>.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a>  in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>
   *          If set, specifies the maximum duration the activity task can wait to be assigned to a worker.
   *       This overrides the default schedule-to-start timeout specified when registering the activity type using
   *       <a>RegisterActivityType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A schedule-to-start timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-start timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  scheduleToStartTimeout?: string;

  /**
   * <p>If set, specifies the maximum duration a worker may take to process this activity task. This overrides the
   *       default start-to-close timeout specified when registering the activity type using <a>RegisterActivityType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A start-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  startToCloseTimeout?: string;

  /**
   * <p>If set, specifies the maximum time before which a worker processing a task of this type must report progress by
   *       calling <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed
   *       out. If the worker subsequently attempts to record a heartbeat or returns a result, it is ignored. This
   *       overrides the default heartbeat timeout specified when registering the activity type using
   *       <a>RegisterActivityType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  heartbeatTimeout?: string;
}

/**
 * <p>Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of
 *       decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.</p>
 * @public
 */
export interface ScheduleLambdaFunctionDecisionAttributes {
  /**
   * <p>A string that identifies the Lambda function execution in the event history.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name, or ARN, of the Lambda function to schedule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the Lambda task.</p>
   * @public
   */
  control?: string;

  /**
   * <p>The optional input data to be supplied to the Lambda function.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The timeout value, in seconds, after which the Lambda function is considered to be
   *             failed once it has started. This can be any integer from 1-900 (1s-15m).</p>
   *          <p>If no value is supplied, then a default value of 900s is assumed.</p>
   * @public
   */
  startToCloseTimeout?: string;
}

/**
 * <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface SignalExternalWorkflowExecutionDecisionAttributes {
  /**
   * <p>
   *          The <code>workflowId</code> of the workflow execution to be signaled.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The <code>runId</code> of the workflow execution to be signaled.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>
   *          The name of the signal.The target workflow execution uses the signal name and input to
   *       process the signal.</p>
   * @public
   */
  signalName: string | undefined;

  /**
   * <p>
   *          The input data to be provided with the signal. The target workflow execution uses the signal
   *       name and input data to process the signal.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The data attached to the event that can be used by the decider in subsequent decision tasks.</p>
   * @public
   */
  control?: string;
}

/**
 * <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with the
 *              appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4,
 *             inclusive.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface StartChildWorkflowExecutionDecisionAttributes {
  /**
   * <p>
   *          The type of the workflow execution to be started.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>
   *          The <code>workflowId</code> of the workflow execution.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the child workflow execution.</p>
   * @public
   */
  control?: string;

  /**
   * <p>The input to be provided to the workflow execution.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The name of the task list to be used for decision tasks of the child workflow execution.</p>
   *          <note>
   *             <p>A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault is returned.</p>
   *          </note>
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  taskList?: TaskList;

  /**
   * <p>
   *          A task priority that, if set, specifies the priority for a decision task of this workflow
   *       execution. This overrides the defaultTaskPriority specified when registering the workflow type.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the
   *       <code>defaultTaskStartToCloseTimout</code> specified when registering the workflow type using
   *       <a>RegisterWorkflowType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>
   *          If set, specifies the policy to use for the child workflow executions if the workflow execution
   *       being started is terminated by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an
   *       expired timeout. This policy overrides the default child policy specified when registering the workflow type using
   *       <a>RegisterWorkflowType</a>.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  childPolicy?: ChildPolicy;

  /**
   * <p>The list of tags to associate with the child workflow execution. A maximum of 5 tags can be specified. You can
   *       list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or
   *       <a>ListClosedWorkflowExecutions</a> and specifying a <a>TagFilter</a>.</p>
   * @public
   */
  tagList?: string[];

  /**
   * <p>The IAM role attached to the child workflow execution.</p>
   * @public
   */
  lambdaRole?: string;
}

/**
 * <p>Provides the details of the <code>StartTimer</code> decision.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to only
 *   specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @public
 */
export interface StartTimerDecisionAttributes {
  /**
   * <p>
   *          The unique ID of the timer.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  timerId: string | undefined;

  /**
   * <p>The data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   * @public
   */
  control?: string;

  /**
   * <p>
   *          The duration to wait before firing the timer.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>.</p>
   * @public
   */
  startToFireTimeout: string | undefined;
}

/**
 * <p>Specifies a decision made by the decider. A decision can be one of these types:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the
 *         history.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a
 *         <code>WorkflowExecutionCanceled</code> event in the history.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a
 *         <code>WorkflowExecutionCompleted</code> event in the history .</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the
 *         same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event
 *         is recorded in the history.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code>
 *         event in the history.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding
 *         custom information in the history for instance to let deciders know that they don't need to look at the history
 *         beyond the marker event.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task
 *         was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already
 *         assigned to a worker, then the worker is informed that cancellation has been requested in the response to
 *         <a>RecordActivityTaskHeartbeat</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external
 *         workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the
 *         history.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ScheduleActivityTask</code> – Schedules an activity task.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow
 *         execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a
 *         <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a
 *         separate workflow execution with its own history.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in
 *         the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express
 *       permissions for the list of decisions returned by this action as if they were members of the API. Treating
 *       decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and
 *       example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *           Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 *          <p>
 *             <b>Decision Failure</b>
 *          </p>
 *          <p>Decisions can fail for several reasons</p>
 *          <ul>
 *             <li>
 *                <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p>
 *             </li>
 *             <li>
 *                <p>A limit on your account was reached.</p>
 *             </li>
 *             <li>
 *                <p>The decision lacks sufficient permissions.</p>
 *             </li>
 *          </ul>
 *          <p>One of the following events might be added to the history to indicate an error. The event attribute's
 *           <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
 *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
 *           in the <i>Amazon SWF Developer Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the
 *         activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't
 *         properly configured.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RequestCancelActivityTaskFailed</code> – A
 *                         <code>RequestCancelActivityTask</code> decision failed. This could happen if
 *                     there is no open activity task with the specified activityId.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This
 *                     could happen if there is another open timer with the same timerId.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed.
 *                     This could happen if there is no open timer with the specified
 *                     timerId.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartChildWorkflowExecutionFailed</code> – A
 *                         <code>StartChildWorkflowExecution</code> decision failed. This could happen
 *                     if the workflow type specified isn't registered, is deprecated, or the decision
 *                     isn't properly configured.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SignalExternalWorkflowExecutionFailed</code> – A
 *                         <code>SignalExternalWorkflowExecution</code> decision failed. This could
 *                     happen if the <code>workflowID</code> specified in the decision was
 *                     incorrect.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RequestCancelExternalWorkflowExecutionFailed</code> – A
 *                         <code>RequestCancelExternalWorkflowExecution</code> decision failed. This
 *                     could happen if the <code>workflowID</code> specified in the decision was
 *                     incorrect.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CancelWorkflowExecutionFailed</code> – A
 *                         <code>CancelWorkflowExecution</code> decision failed. This could happen if
 *                     there is an unhandled decision task pending in the workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CompleteWorkflowExecutionFailed</code> – A
 *                         <code>CompleteWorkflowExecution</code> decision failed. This could happen if
 *                     there is an unhandled decision task pending in the workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ContinueAsNewWorkflowExecutionFailed</code> – A
 *                         <code>ContinueAsNewWorkflowExecution</code> decision failed. This could
 *                     happen if there is an unhandled decision task pending in the workflow execution
 *                     or the ContinueAsNewWorkflowExecution decision was not configured
 *                     correctly.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code>
 *                     decision failed. This could happen if there is an unhandled decision task
 *                     pending in the workflow execution.</p>
 *             </li>
 *          </ul>
 *          <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p>
 *          <note>
 *             <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing
 *       a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>,
 *           <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault
 *       is returned if a workflow closing decision is specified and a signal or activity event had been added to the
 *       history while the decision task was being performed by the decider. Unlike the above situations which are logic
 *       issues, this fault is always possible because of race conditions in a distributed system. The right action here is
 *       to call <a>RespondDecisionTaskCompleted</a>  without any decisions. This would result in another decision task
 *       with these new events included in the history. The decider should handle the new events and may decide to close
 *       the workflow execution.</p>
 *          </note>
 *          <p>
 *             <b>How to Code a Decision</b>
 *          </p>
 *          <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>ScheduleActivityTaskDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>RequestCancelActivityTaskDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>CompleteWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>FailWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>CancelWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>RecordMarkerDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>StartTimerDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>CancelTimerDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>SignalExternalWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>StartChildWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Decision {
  /**
   * <p>Specifies the type of the decision.</p>
   * @public
   */
  decisionType: DecisionType | undefined;

  /**
   * <p>Provides the details of the <code>ScheduleActivityTask</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;

  /**
   * <p>Provides the details of the <code>RequestCancelActivityTask</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;

  /**
   * <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>FailWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>CancelWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>RecordMarker</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;

  /**
   * <p>Provides the details of the <code>StartTimer</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  startTimerDecisionAttributes?: StartTimerDecisionAttributes;

  /**
   * <p>Provides the details of the <code>CancelTimer</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;

  /**
   * <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.
   *       It isn't set for other decision types.</p>
   * @public
   */
  requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   * @public
   */
  startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>ScheduleLambdaFunction</code> decision. It isn't set
   *       for other decision types.</p>
   * @public
   */
  scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;
}

/**
 * <p>Provides the details of the <code>DecisionTaskCompleted</code> event.</p>
 * @public
 */
export interface DecisionTaskCompletedEventAttributes {
  /**
   * <p>User defined context for the workflow execution.</p>
   * @public
   */
  executionContext?: string;

  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded when this decision task was started.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>Represents a task list.</p>
   * @public
   */
  taskList?: TaskList;

  /**
   * <p>The maximum amount of time the decision task can wait to be assigned to a worker.</p>
   * @public
   */
  taskListScheduleToStartTimeout?: string;
}

/**
 * <p>Provides details about the <code>DecisionTaskScheduled</code> event.</p>
 * @public
 */
export interface DecisionTaskScheduledEventAttributes {
  /**
   * <p>The name of the task list in which the decision task was scheduled.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>
   *          A task priority that, if set, specifies the priority for this decision task.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration for this decision task. The task is considered timed out if it doesn't completed within this duration.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  startToCloseTimeout?: string;

  /**
   * <p>The maximum amount of time the decision task can wait to be assigned to a worker.</p>
   * @public
   */
  scheduleToStartTimeout?: string;
}

/**
 * <p>Provides the details of the <code>DecisionTaskStarted</code> event.</p>
 * @public
 */
export interface DecisionTaskStartedEventAttributes {
  /**
   * <p>Identity of the decider making the request. This enables diagnostic tracing when problems arise. The form of this identity is user defined.</p>
   * @public
   */
  identity?: string;

  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DecisionTaskTimeoutType = {
  SCHEDULE_TO_START: "SCHEDULE_TO_START",
  START_TO_CLOSE: "START_TO_CLOSE",
} as const;

/**
 * @public
 */
export type DecisionTaskTimeoutType = (typeof DecisionTaskTimeoutType)[keyof typeof DecisionTaskTimeoutType];

/**
 * <p>Provides the details of the <code>DecisionTaskTimedOut</code> event.</p>
 * @public
 */
export interface DecisionTaskTimedOutEventAttributes {
  /**
   * <p>The type of timeout that expired before the decision task could be completed.</p>
   * @public
   */
  timeoutType: DecisionTaskTimeoutType | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded when this decision task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  ActivityTaskCancelRequested: "ActivityTaskCancelRequested",
  ActivityTaskCanceled: "ActivityTaskCanceled",
  ActivityTaskCompleted: "ActivityTaskCompleted",
  ActivityTaskFailed: "ActivityTaskFailed",
  ActivityTaskScheduled: "ActivityTaskScheduled",
  ActivityTaskStarted: "ActivityTaskStarted",
  ActivityTaskTimedOut: "ActivityTaskTimedOut",
  CancelTimerFailed: "CancelTimerFailed",
  CancelWorkflowExecutionFailed: "CancelWorkflowExecutionFailed",
  ChildWorkflowExecutionCanceled: "ChildWorkflowExecutionCanceled",
  ChildWorkflowExecutionCompleted: "ChildWorkflowExecutionCompleted",
  ChildWorkflowExecutionFailed: "ChildWorkflowExecutionFailed",
  ChildWorkflowExecutionStarted: "ChildWorkflowExecutionStarted",
  ChildWorkflowExecutionTerminated: "ChildWorkflowExecutionTerminated",
  ChildWorkflowExecutionTimedOut: "ChildWorkflowExecutionTimedOut",
  CompleteWorkflowExecutionFailed: "CompleteWorkflowExecutionFailed",
  ContinueAsNewWorkflowExecutionFailed: "ContinueAsNewWorkflowExecutionFailed",
  DecisionTaskCompleted: "DecisionTaskCompleted",
  DecisionTaskScheduled: "DecisionTaskScheduled",
  DecisionTaskStarted: "DecisionTaskStarted",
  DecisionTaskTimedOut: "DecisionTaskTimedOut",
  ExternalWorkflowExecutionCancelRequested: "ExternalWorkflowExecutionCancelRequested",
  ExternalWorkflowExecutionSignaled: "ExternalWorkflowExecutionSignaled",
  FailWorkflowExecutionFailed: "FailWorkflowExecutionFailed",
  LambdaFunctionCompleted: "LambdaFunctionCompleted",
  LambdaFunctionFailed: "LambdaFunctionFailed",
  LambdaFunctionScheduled: "LambdaFunctionScheduled",
  LambdaFunctionStarted: "LambdaFunctionStarted",
  LambdaFunctionTimedOut: "LambdaFunctionTimedOut",
  MarkerRecorded: "MarkerRecorded",
  RecordMarkerFailed: "RecordMarkerFailed",
  RequestCancelActivityTaskFailed: "RequestCancelActivityTaskFailed",
  RequestCancelExternalWorkflowExecutionFailed: "RequestCancelExternalWorkflowExecutionFailed",
  RequestCancelExternalWorkflowExecutionInitiated: "RequestCancelExternalWorkflowExecutionInitiated",
  ScheduleActivityTaskFailed: "ScheduleActivityTaskFailed",
  ScheduleLambdaFunctionFailed: "ScheduleLambdaFunctionFailed",
  SignalExternalWorkflowExecutionFailed: "SignalExternalWorkflowExecutionFailed",
  SignalExternalWorkflowExecutionInitiated: "SignalExternalWorkflowExecutionInitiated",
  StartChildWorkflowExecutionFailed: "StartChildWorkflowExecutionFailed",
  StartChildWorkflowExecutionInitiated: "StartChildWorkflowExecutionInitiated",
  StartLambdaFunctionFailed: "StartLambdaFunctionFailed",
  StartTimerFailed: "StartTimerFailed",
  TimerCanceled: "TimerCanceled",
  TimerFired: "TimerFired",
  TimerStarted: "TimerStarted",
  WorkflowExecutionCancelRequested: "WorkflowExecutionCancelRequested",
  WorkflowExecutionCanceled: "WorkflowExecutionCanceled",
  WorkflowExecutionCompleted: "WorkflowExecutionCompleted",
  WorkflowExecutionContinuedAsNew: "WorkflowExecutionContinuedAsNew",
  WorkflowExecutionFailed: "WorkflowExecutionFailed",
  WorkflowExecutionSignaled: "WorkflowExecutionSignaled",
  WorkflowExecutionStarted: "WorkflowExecutionStarted",
  WorkflowExecutionTerminated: "WorkflowExecutionTerminated",
  WorkflowExecutionTimedOut: "WorkflowExecutionTimedOut",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * <p>Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.</p>
 * @public
 */
export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
  /**
   * <p>The external workflow execution to which the cancellation request was delivered.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this external workflow execution. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   * @public
   */
  initiatedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.</p>
 * @public
 */
export interface ExternalWorkflowExecutionSignaledEventAttributes {
  /**
   * <p>The external workflow execution that the signal was delivered to.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>SignalExternalWorkflowExecution</code> decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const FailWorkflowExecutionFailedCause = {
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  UNHANDLED_DECISION: "UNHANDLED_DECISION",
} as const;

/**
 * @public
 */
export type FailWorkflowExecutionFailedCause =
  (typeof FailWorkflowExecutionFailedCause)[keyof typeof FailWorkflowExecutionFailedCause];

/**
 * <p>Provides the details of the <code>FailWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface FailWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: FailWorkflowExecutionFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>FailWorkflowExecution</code> decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set
 *       for other event types.</p>
 * @public
 */
export interface LambdaFunctionCompletedEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       Lambda task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task
   *       started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>The results of the Lambda task.</p>
   * @public
   */
  result?: string;
}

/**
 * <p>Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for
 *       other event types.</p>
 * @public
 */
export interface LambdaFunctionFailedEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task
   *       started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>The reason provided for the failure.</p>
   * @public
   */
  reason?: string;

  /**
   * <p>The details of the failure.</p>
   * @public
   */
  details?: string;
}

/**
 * <p>Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set
 *       for other event types.</p>
 * @public
 */
export interface LambdaFunctionScheduledEventAttributes {
  /**
   * <p>The unique ID of the Lambda task.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Data attached to the event that the decider can use in subsequent workflow tasks. This
   *       data isn't sent to the Lambda task.</p>
   * @public
   */
  control?: string;

  /**
   * <p>The input provided to the Lambda task.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The maximum amount of time a worker can take to process the Lambda task.</p>
   * @public
   */
  startToCloseTimeout?: string;

  /**
   * <p>The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision
   *       that resulted in scheduling this activity task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for
 *       other event types.</p>
 * @public
 */
export interface LambdaFunctionStartedEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const LambdaFunctionTimeoutType = {
  START_TO_CLOSE: "START_TO_CLOSE",
} as const;

/**
 * @public
 */
export type LambdaFunctionTimeoutType = (typeof LambdaFunctionTimeoutType)[keyof typeof LambdaFunctionTimeoutType];

/**
 * <p>Provides details of the <code>LambdaFunctionTimedOut</code> event.</p>
 * @public
 */
export interface LambdaFunctionTimedOutEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event that was recorded when this
   *       activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>The type of the timeout that caused this event.</p>
   * @public
   */
  timeoutType?: LambdaFunctionTimeoutType;
}

/**
 * <p>Provides the details of the <code>MarkerRecorded</code> event.</p>
 * @public
 */
export interface MarkerRecordedEventAttributes {
  /**
   * <p>The name of the marker.</p>
   * @public
   */
  markerName: string | undefined;

  /**
   * <p>The details of the marker.</p>
   * @public
   */
  details?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RecordMarker</code> decision that requested this marker. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RecordMarkerFailedCause = {
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
} as const;

/**
 * @public
 */
export type RecordMarkerFailedCause = (typeof RecordMarkerFailedCause)[keyof typeof RecordMarkerFailedCause];

/**
 * <p>Provides the details of the <code>RecordMarkerFailed</code> event.</p>
 * @public
 */
export interface RecordMarkerFailedEventAttributes {
  /**
   * <p>The marker's name.</p>
   * @public
   */
  markerName: string | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: RecordMarkerFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RecordMarkerFailed</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RequestCancelActivityTaskFailedCause = {
  ACTIVITY_ID_UNKNOWN: "ACTIVITY_ID_UNKNOWN",
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
} as const;

/**
 * @public
 */
export type RequestCancelActivityTaskFailedCause =
  (typeof RequestCancelActivityTaskFailedCause)[keyof typeof RequestCancelActivityTaskFailedCause];

/**
 * <p>Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.</p>
 * @public
 */
export interface RequestCancelActivityTaskFailedEventAttributes {
  /**
   * <p>The activityId provided in the <code>RequestCancelActivityTask</code> decision that failed.</p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: RequestCancelActivityTaskFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelActivityTask</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RequestCancelExternalWorkflowExecutionFailedCause = {
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED: "REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED",
  UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION: "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION",
} as const;

/**
 * @public
 */
export type RequestCancelExternalWorkflowExecutionFailedCause =
  (typeof RequestCancelExternalWorkflowExecutionFailedCause)[keyof typeof RequestCancelExternalWorkflowExecutionFailedCause];

/**
 * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the external workflow to which the cancel request was to be delivered.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: RequestCancelExternalWorkflowExecutionFailedCause | undefined;

  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this external workflow execution. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the workflow execution.</p>
   * @public
   */
  control?: string;
}

/**
 * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.</p>
 * @public
 */
export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the external workflow execution to be canceled.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution to be canceled.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision for this cancellation request.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   * @public
   */
  control?: string;
}

/**
 * @public
 * @enum
 */
export const ScheduleActivityTaskFailedCause = {
  ACTIVITY_CREATION_RATE_EXCEEDED: "ACTIVITY_CREATION_RATE_EXCEEDED",
  ACTIVITY_ID_ALREADY_IN_USE: "ACTIVITY_ID_ALREADY_IN_USE",
  ACTIVITY_TYPE_DEPRECATED: "ACTIVITY_TYPE_DEPRECATED",
  ACTIVITY_TYPE_DOES_NOT_EXIST: "ACTIVITY_TYPE_DOES_NOT_EXIST",
  DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED: "DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED",
  DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED: "DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED",
  DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED: "DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED",
  DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED: "DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED",
  DEFAULT_TASK_LIST_UNDEFINED: "DEFAULT_TASK_LIST_UNDEFINED",
  OPEN_ACTIVITIES_LIMIT_EXCEEDED: "OPEN_ACTIVITIES_LIMIT_EXCEEDED",
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
} as const;

/**
 * @public
 */
export type ScheduleActivityTaskFailedCause =
  (typeof ScheduleActivityTaskFailedCause)[keyof typeof ScheduleActivityTaskFailedCause];

/**
 * <p>Provides the details of the <code>ScheduleActivityTaskFailed</code> event.</p>
 * @public
 */
export interface ScheduleActivityTaskFailedEventAttributes {
  /**
   * <p>The activity type provided in the <code>ScheduleActivityTask</code> decision that failed.</p>
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The activityId provided in the <code>ScheduleActivityTask</code> decision that failed.</p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: ScheduleActivityTaskFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision that resulted in the
   *       scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ScheduleLambdaFunctionFailedCause = {
  ID_ALREADY_IN_USE: "ID_ALREADY_IN_USE",
  LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED: "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED",
  LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION: "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION",
  OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED: "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type ScheduleLambdaFunctionFailedCause =
  (typeof ScheduleLambdaFunctionFailedCause)[keyof typeof ScheduleLambdaFunctionFailedCause];

/**
 * <p>Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't
 *       set for other event types.</p>
 * @public
 */
export interface ScheduleLambdaFunctionFailedEventAttributes {
  /**
   * <p>The ID provided in the <code>ScheduleLambdaFunction</code> decision that failed.
   *     </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision
   *         failed because it lacked sufficient permissions. For details and example IAM policies, see
   *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using
   *           IAM to Manage Access to Amazon SWF Workflows</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: ScheduleLambdaFunctionFailedCause | undefined;

  /**
   * <p>The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision
   *       that resulted in scheduling this Lambda task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SignalExternalWorkflowExecutionFailedCause = {
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED: "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED",
  UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION: "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION",
} as const;

/**
 * @public
 */
export type SignalExternalWorkflowExecutionFailedCause =
  (typeof SignalExternalWorkflowExecutionFailedCause)[keyof typeof SignalExternalWorkflowExecutionFailedCause];

/**
 * <p>Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface SignalExternalWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the external workflow execution that the signal was being delivered to.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution that the signal was being delivered to.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: SignalExternalWorkflowExecutionFailedCause | undefined;

  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>SignalExternalWorkflowExecution</code> decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>SignalExternalWorkflowExecution</code> decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the workflow execution.</p>
   * @public
   */
  control?: string;
}

/**
 * <p>Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.</p>
 * @public
 */
export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the external workflow execution.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution to send the signal to.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>The name of the signal.</p>
   * @public
   */
  signalName: string | undefined;

  /**
   * <p>The input provided to the signal.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>SignalExternalWorkflowExecution</code> decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent decision tasks.</p>
   * @public
   */
  control?: string;
}

/**
 * @public
 * @enum
 */
export const StartChildWorkflowExecutionFailedCause = {
  CHILD_CREATION_RATE_EXCEEDED: "CHILD_CREATION_RATE_EXCEEDED",
  DEFAULT_CHILD_POLICY_UNDEFINED: "DEFAULT_CHILD_POLICY_UNDEFINED",
  DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED: "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED",
  DEFAULT_TASK_LIST_UNDEFINED: "DEFAULT_TASK_LIST_UNDEFINED",
  DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED: "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED",
  OPEN_CHILDREN_LIMIT_EXCEEDED: "OPEN_CHILDREN_LIMIT_EXCEEDED",
  OPEN_WORKFLOWS_LIMIT_EXCEEDED: "OPEN_WORKFLOWS_LIMIT_EXCEEDED",
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  WORKFLOW_ALREADY_RUNNING: "WORKFLOW_ALREADY_RUNNING",
  WORKFLOW_TYPE_DEPRECATED: "WORKFLOW_TYPE_DEPRECATED",
  WORKFLOW_TYPE_DOES_NOT_EXIST: "WORKFLOW_TYPE_DOES_NOT_EXIST",
} as const;

/**
 * @public
 */
export type StartChildWorkflowExecutionFailedCause =
  (typeof StartChildWorkflowExecutionFailedCause)[keyof typeof StartChildWorkflowExecutionFailedCause];

/**
 * <p>Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface StartChildWorkflowExecutionFailedEventAttributes {
  /**
   * <p>The workflow type provided in the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> that failed.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>When <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision fails because it lacks sufficient permissions.
   *               For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">
   *                   Using IAM to Manage Access to Amazon SWF Workflows</a>  in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: StartChildWorkflowExecutionFailedCause | undefined;

  /**
   * <p>The <code>workflowId</code> of the child workflow execution.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>When the <code>cause</code> is <code>WORKFLOW_ALREADY_RUNNING</code>, <code>initiatedEventId</code> is the ID of the <code>StartChildWorkflowExecutionInitiated</code>
   *           event that corresponds to the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start the workflow execution. You can use this information to diagnose
   *           problems by tracing back the chain of events leading up to this event.</p>
   *          <p>When the <code>cause</code> isn't <code>WORKFLOW_ALREADY_RUNNING</code>, <code>initiatedEventId</code> is set to <code>0</code> because the
   *           <code>StartChildWorkflowExecutionInitiated</code> event doesn't exist.</p>
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the child workflow execution.</p>
   * @public
   */
  control?: string;
}

/**
 * <p>Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.</p>
 * @public
 */
export interface StartChildWorkflowExecutionInitiatedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the child workflow execution.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent decision tasks. This data isn't sent to the activity.</p>
   * @public
   */
  control?: string;

  /**
   * <p>The inputs provided to the child workflow execution.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The maximum duration for the child workflow execution. If the workflow execution isn't closed within this duration, it is timed out and force-terminated.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The name of the task list used for the decision tasks of the child workflow execution.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>
   *          The priority assigned for the decision tasks for this workflow execution.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to request this child workflow execution. This
   *       information can be useful for diagnosing problems by tracing back the cause of events.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The policy to use for the child workflow executions if this execution gets terminated by explicitly calling the
   *       <a>TerminateWorkflowExecution</a> action or due to an expired timeout.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * <p>The maximum duration allowed for the decision tasks for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The list of tags to associated with the child workflow execution.</p>
   * @public
   */
  tagList?: string[];

  /**
   * <p>The IAM role to attach to the child workflow execution.</p>
   * @public
   */
  lambdaRole?: string;
}

/**
 * @public
 * @enum
 */
export const StartLambdaFunctionFailedCause = {
  ASSUME_ROLE_FAILED: "ASSUME_ROLE_FAILED",
} as const;

/**
 * @public
 */
export type StartLambdaFunctionFailedCause =
  (typeof StartLambdaFunctionFailedCause)[keyof typeof StartLambdaFunctionFailedCause];

/**
 * <p>Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set
 *       for other event types.</p>
 * @public
 */
export interface StartLambdaFunctionFailedEventAttributes {
  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   * @public
   */
  scheduledEventId?: number;

  /**
   * <p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision
   *         failed because the IAM role attached to the execution lacked sufficient permissions. For
   *         details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">Lambda Tasks</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause?: StartLambdaFunctionFailedCause;

  /**
   * <p>A description that can help diagnose the cause of the fault.</p>
   * @public
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const StartTimerFailedCause = {
  OPEN_TIMERS_LIMIT_EXCEEDED: "OPEN_TIMERS_LIMIT_EXCEEDED",
  OPERATION_NOT_PERMITTED: "OPERATION_NOT_PERMITTED",
  TIMER_CREATION_RATE_EXCEEDED: "TIMER_CREATION_RATE_EXCEEDED",
  TIMER_ID_ALREADY_IN_USE: "TIMER_ID_ALREADY_IN_USE",
} as const;

/**
 * @public
 */
export type StartTimerFailedCause = (typeof StartTimerFailedCause)[keyof typeof StartTimerFailedCause];

/**
 * <p>Provides the details of the <code>StartTimerFailed</code> event.</p>
 * @public
 */
export interface StartTimerFailedEventAttributes {
  /**
   * <p>The timerId provided in the <code>StartTimer</code> decision that failed.</p>
   * @public
   */
  timerId: string | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  cause: StartTimerFailedCause | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>StartTimer</code> decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>
 *       Provides the details of the <code>TimerCanceled</code> event.
 *    </p>
 * @public
 */
export interface TimerCanceledEventAttributes {
  /**
   * <p>The unique ID of the timer that was canceled.</p>
   * @public
   */
  timerId: string | undefined;

  /**
   * <p>The ID of the <code>TimerStarted</code> event that was recorded when this timer was started.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CancelTimer</code> decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>TimerFired</code> event.</p>
 * @public
 */
export interface TimerFiredEventAttributes {
  /**
   * <p>The unique ID of the timer that fired.</p>
   * @public
   */
  timerId: string | undefined;

  /**
   * <p>The ID of the <code>TimerStarted</code> event that was recorded when this timer was started.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>TimerStarted</code> event.</p>
 * @public
 */
export interface TimerStartedEventAttributes {
  /**
   * <p>The unique ID of the timer that was started.</p>
   * @public
   */
  timerId: string | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   * @public
   */
  control?: string;

  /**
   * <p>The duration of time after which the timer fires.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>.</p>
   * @public
   */
  startToFireTimeout: string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>StartTimer</code> decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionCanceled</code> event.</p>
 * @public
 */
export interface WorkflowExecutionCanceledEventAttributes {
  /**
   * <p>The details of the cancellation.</p>
   * @public
   */
  details?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CancelWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowExecutionCancelRequestedCause = {
  CHILD_POLICY_APPLIED: "CHILD_POLICY_APPLIED",
} as const;

/**
 * @public
 */
export type WorkflowExecutionCancelRequestedCause =
  (typeof WorkflowExecutionCancelRequestedCause)[keyof typeof WorkflowExecutionCancelRequestedCause];

/**
 * <p>Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.</p>
 * @public
 */
export interface WorkflowExecutionCancelRequestedEventAttributes {
  /**
   * <p>The external workflow execution for which the cancellation was requested.</p>
   * @public
   */
  externalWorkflowExecution?: WorkflowExecution;

  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this workflow execution.The source event
   *       with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  externalInitiatedEventId?: number;

  /**
   * <p>If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to cancel child executions.</p>
   * @public
   */
  cause?: WorkflowExecutionCancelRequestedCause;
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionCompleted</code> event.</p>
 * @public
 */
export interface WorkflowExecutionCompletedEventAttributes {
  /**
   * <p>The result produced by the workflow execution upon successful completion.</p>
   * @public
   */
  result?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CompleteWorkflowExecution</code> decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.</p>
 * @public
 */
export interface WorkflowExecutionContinuedAsNewEventAttributes {
  /**
   * <p>The input provided to the new workflow execution.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>ContinueAsNewWorkflowExecution</code> decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The <code>runId</code> of the new workflow execution.</p>
   * @public
   */
  newExecutionRunId: string | undefined;

  /**
   * <p>The total duration allowed for the new workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The task list to use for the decisions of the new (continued) workflow
   *       execution.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>The priority of the task to use for the decisions of the new (continued) workflow
   *       execution.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration of decision tasks for the new workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The policy to use for the child workflow executions of the new execution if it is terminated by calling the
   *       <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * <p>The list of tags associated with the new workflow execution.</p>
   * @public
   */
  tagList?: string[];

  /**
   * <p>The workflow type of this execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The IAM role to attach to the new (continued) workflow execution.</p>
   * @public
   */
  lambdaRole?: string;
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionFailed</code> event.</p>
 * @public
 */
export interface WorkflowExecutionFailedEventAttributes {
  /**
   * <p>The descriptive reason provided for the failure.</p>
   * @public
   */
  reason?: string;

  /**
   * <p>The details of the failure.</p>
   * @public
   */
  details?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>FailWorkflowExecution</code> decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionSignaled</code> event.</p>
 * @public
 */
export interface WorkflowExecutionSignaledEventAttributes {
  /**
   * <p>The name of the signal received. The decider can use the signal name and inputs to determine how to the process the signal.</p>
   * @public
   */
  signalName: string | undefined;

  /**
   * <p>The inputs provided with the signal. The decider can use the signal name and inputs to determine how to process the signal.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The workflow execution that sent the signal. This is set only of the signal was sent by another workflow execution.</p>
   * @public
   */
  externalWorkflowExecution?: WorkflowExecution;

  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>SignalExternalWorkflow</code> decision to signal this workflow execution.The source event with this ID can
   *       be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event. This field is set only if
   *       the signal was initiated by another workflow execution.</p>
   * @public
   */
  externalInitiatedEventId?: number;
}

/**
 * <p>Provides details of <code>WorkflowExecutionStarted</code> event.</p>
 * @public
 */
export interface WorkflowExecutionStartedEventAttributes {
  /**
   * <p>The input provided to the workflow execution.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The maximum duration for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The maximum duration of decision tasks for this workflow type.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The policy to use for the child workflow executions if this workflow execution is terminated, by calling the
   *       <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * <p>The name of the task list for scheduling the decision tasks for this workflow execution.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>The priority of the decision tasks in the workflow execution.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>The workflow type of this execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The list of tags associated with this workflow execution. An execution can have up to 5 tags.</p>
   * @public
   */
  tagList?: string[];

  /**
   * <p>If this workflow execution was started due to a <code>ContinueAsNewWorkflowExecution</code> decision, then it
   *       contains the <code>runId</code> of the previous workflow execution that was closed and continued as this
   *       execution.</p>
   * @public
   */
  continuedExecutionRunId?: string;

  /**
   * <p>The source workflow execution that started this workflow execution. The member isn't set if the workflow execution was not started by a workflow.</p>
   * @public
   */
  parentWorkflowExecution?: WorkflowExecution;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this workflow execution. The source event with
   *       this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   * @public
   */
  parentInitiatedEventId?: number;

  /**
   * <p>The IAM role attached to the workflow execution.</p>
   * @public
   */
  lambdaRole?: string;
}

/**
 * @public
 * @enum
 */
export const WorkflowExecutionTerminatedCause = {
  CHILD_POLICY_APPLIED: "CHILD_POLICY_APPLIED",
  EVENT_LIMIT_EXCEEDED: "EVENT_LIMIT_EXCEEDED",
  OPERATOR_INITIATED: "OPERATOR_INITIATED",
} as const;

/**
 * @public
 */
export type WorkflowExecutionTerminatedCause =
  (typeof WorkflowExecutionTerminatedCause)[keyof typeof WorkflowExecutionTerminatedCause];

/**
 * <p>Provides the details of the <code>WorkflowExecutionTerminated</code> event.</p>
 * @public
 */
export interface WorkflowExecutionTerminatedEventAttributes {
  /**
   * <p>The reason provided for the termination.</p>
   * @public
   */
  reason?: string;

  /**
   * <p>The details provided for the termination.</p>
   * @public
   */
  details?: string;

  /**
   * <p>The policy used for the child workflow executions of this workflow execution.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * <p>If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.</p>
   * @public
   */
  cause?: WorkflowExecutionTerminatedCause;
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionTimedOut</code> event.</p>
 * @public
 */
export interface WorkflowExecutionTimedOutEventAttributes {
  /**
   * <p>The type of timeout that caused this event.</p>
   * @public
   */
  timeoutType: WorkflowExecutionTimeoutType | undefined;

  /**
   * <p>The policy used for the child workflow executions of this workflow execution.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  childPolicy: ChildPolicy | undefined;
}

/**
 * <p>Event within a workflow execution. A history event can be one of these types:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the
 *         system.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling
 *         <a>RespondActivityTaskCompleted</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling
 *         <a>RespondActivityTaskFailed</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ActivityTaskTimedOut</code> – The activity task timed out.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't
 *         configured properly, for example no timer exists with the specified timer Id.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was
 *         canceled and closed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution,
 *         completed successfully and was closed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ChildWorkflowExecutionFailed</code> – A child workflow execution,
 *         started by this workflow execution, failed to complete successfully and was closed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ChildWorkflowExecutionTerminated</code> –  A child workflow execution, started by this workflow execution, was
 *         terminated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ChildWorkflowExecutionTimedOut</code> –  A child workflow execution, started by this workflow execution, timed
 *         out and was closed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued
 *         as a new workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling
 *         <a>RespondDecisionTaskCompleted</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DecisionTaskTimedOut</code> – The decision task timed out.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was
 *         successfully delivered to the target execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully
 *         delivered to the target external workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a
 *         <code>RecordMarker</code> decision.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens
 *         when the decision isn't configured properly.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution
 *         failed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an
 *         external workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the
 *         decision isn't configured properly, for example the activity type specified isn't registered.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution
 *         failed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens
 *         when the decision isn't configured properly, for example the workflow type specified isn't registered.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't
 *         configured properly, for example a timer already exists with the specified timer Id.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code>
 *         decision.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type
 *         was created with the same workflowId.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface HistoryEvent {
  /**
   * <p>The date and time when the event occurred.</p>
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * <p>The type of the history event.</p>
   * @public
   */
  eventType: EventType | undefined;

  /**
   * <p>The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.</p>
   * @public
   */
  eventId: number | undefined;

  /**
   * <p>If the event is of type <code>WorkflowExecutionStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionCompleted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>CompleteWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>FailWorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionTimedOut</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionCanceled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>CancelWorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionContinuedAsNew</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;

  /**
   * <p>If the event is of type <code>ContinueAsNewWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionTerminated</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionCancelRequested</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskScheduled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskCompleted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskTimedOut</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskScheduled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskCompleted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskTimedOut</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskCanceled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskcancelRequested</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionSignaled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;

  /**
   * <p>If the event is of type <code>MarkerRecorded</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   * @public
   */
  markerRecordedEventAttributes?: MarkerRecordedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;

  /**
   * <p>If the event is of type <code>TimerStarted</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   * @public
   */
  timerStartedEventAttributes?: TimerStartedEventAttributes;

  /**
   * <p>If the event is of type <code>TimerFired</code> then this member is set and provides detailed information about
   *       the event. It isn't set for other event types.</p>
   * @public
   */
  timerFiredEventAttributes?: TimerFiredEventAttributes;

  /**
   * <p>If the event is of type <code>TimerCanceled</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   * @public
   */
  timerCanceledEventAttributes?: TimerCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>StartChildWorkflowExecutionInitiated</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionCompleted</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionTimedOut</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionCanceled</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionTerminated</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;

  /**
   * <p>If the event is of type <code>SignalExternalWorkflowExecutionInitiated</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * <p>If the event is of type <code>ExternalWorkflowExecutionSignaled</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;

  /**
   * <p>If the event is of type <code>SignalExternalWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ExternalWorkflowExecutionCancelRequested</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types. </p>
   * @public
   */
  externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;

  /**
   * <p>If the event is of type <code>RequestCancelExternalWorkflowExecutionInitiated</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * <p>If the event is of type <code>RequestCancelExternalWorkflowExecutionFailed</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ScheduleActivityTaskFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   * @public
   */
  scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;

  /**
   * <p>If the event is of type <code>RequestCancelActivityTaskFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;

  /**
   * <p>If the event is of type <code>StartTimerFailed</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   * @public
   */
  startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;

  /**
   * <p>If the event is of type <code>CancelTimerFailed</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   * @public
   */
  cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;

  /**
   * <p>If the event is of type <code>StartChildWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   * @public
   */
  startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set
   *       for other event types.</p>
   * @public
   */
  lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for
   *       other event types.</p>
   * @public
   */
  lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set
   *       for other event types.</p>
   * @public
   */
  lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for
   *       other event types.</p>
   * @public
   */
  lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionTimedOut</code> event. It isn't set for
   *       other event types.</p>
   * @public
   */
  lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;

  /**
   * <p>Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't
   *       set for other event types.</p>
   * @public
   */
  scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;

  /**
   * <p>Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set
   *       for other event types.</p>
   * @public
   */
  startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;
}

/**
 * <p>A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.</p>
 * @public
 */
export interface DecisionTask {
  /**
   * <p>The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.</p>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded in the history.</p>
   * @public
   */
  startedEventId: number | undefined;

  /**
   * <p>The workflow execution for which this decision task was created.</p>
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the workflow execution for which this decision task was created.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>A paginated list of history events of the workflow execution. The decider uses this during the processing of the decision task.</p>
   * @public
   */
  events: HistoryEvent[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was processed by the decider. This can be used to determine the events in the history new since the last decision task received by the decider.</p>
   * @public
   */
  previousStartedEventId?: number;
}

/**
 * <p>The <code>StartWorkflowExecution</code> API action was called without the required
 *       parameters set.</p>
 *          <p>Some workflow execution parameters, such as the decision <code>taskList</code>, must be
 *       set to start the execution. However, these parameters might have been set as defaults when the
 *       workflow type was registered. In this case, you can omit these parameters from the
 *         <code>StartWorkflowExecution</code> call and Amazon SWF uses the values defined in the workflow
 *       type.</p>
 *          <note>
 *             <p>If these parameters aren't set and no default parameters were defined in the workflow
 *         type, this error is displayed.</p>
 *          </note>
 * @public
 */
export class DefaultUndefinedFault extends __BaseException {
  readonly name: "DefaultUndefinedFault" = "DefaultUndefinedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DefaultUndefinedFault, __BaseException>) {
    super({
      name: "DefaultUndefinedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DefaultUndefinedFault.prototype);
  }
}

/**
 * @public
 */
export interface DeprecateActivityTypeInput {
  /**
   * <p>The name of the domain in which the activity type is registered.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The activity type to deprecate.</p>
   * @public
   */
  activityType: ActivityType | undefined;
}

/**
 * <p>Returned when the specified activity or workflow type was already deprecated.</p>
 * @public
 */
export class TypeDeprecatedFault extends __BaseException {
  readonly name: "TypeDeprecatedFault" = "TypeDeprecatedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeDeprecatedFault, __BaseException>) {
    super({
      name: "TypeDeprecatedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeDeprecatedFault.prototype);
  }
}

/**
 * @public
 */
export interface DeprecateDomainInput {
  /**
   * <p>The name of the domain to deprecate.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Returned when the specified domain has been deprecated.</p>
 * @public
 */
export class DomainDeprecatedFault extends __BaseException {
  readonly name: "DomainDeprecatedFault" = "DomainDeprecatedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainDeprecatedFault, __BaseException>) {
    super({
      name: "DomainDeprecatedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainDeprecatedFault.prototype);
  }
}

/**
 * @public
 */
export interface DeprecateWorkflowTypeInput {
  /**
   * <p>The name of the domain in which the workflow type is registered.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The workflow type to deprecate.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;
}

/**
 * @public
 */
export interface DescribeActivityTypeInput {
  /**
   * <p>The name of the domain in which the activity type is registered.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The activity type to get information about. Activity types are identified by the
   *         <code>name</code> and <code>version</code> that were supplied when the activity was
   *       registered.</p>
   * @public
   */
  activityType: ActivityType | undefined;
}

/**
 * @public
 */
export interface DescribeDomainInput {
  /**
   * <p>The name of the domain to describe.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Contains the configuration settings of a domain.</p>
 * @public
 */
export interface DomainConfiguration {
  /**
   * <p>The retention period for workflow executions in this domain.</p>
   * @public
   */
  workflowExecutionRetentionPeriodInDays: string | undefined;
}

/**
 * <p>Contains general information about a domain.</p>
 * @public
 */
export interface DomainInfo {
  /**
   * <p>The name of the domain. This name is unique within the account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the domain:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REGISTERED</code> – The domain is properly registered and available. You can use this domain
   *          for registering types and creating new workflow executions.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code> – The domain was deprecated using <a>DeprecateDomain</a>, but is
   *          still in use. You should not create new workflow executions in this domain.
   *       </p>
   *             </li>
   *          </ul>
   * @public
   */
  status: RegistrationStatus | undefined;

  /**
   * <p>The description of the domain provided through <a>RegisterDomain</a>.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ARN of the domain.</p>
   * @public
   */
  arn?: string;
}

/**
 * <p>Contains details of a domain.</p>
 * @public
 */
export interface DomainDetail {
  /**
   * <p>The basic information about a domain, such as its name, status, and
   *       description.</p>
   * @public
   */
  domainInfo: DomainInfo | undefined;

  /**
   * <p>The domain configuration. Currently, this includes only the domain's retention
   *       period.</p>
   * @public
   */
  configuration: DomainConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeWorkflowExecutionInput {
  /**
   * <p>The name of the domain containing the workflow execution.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The workflow execution to describe.</p>
   * @public
   */
  execution: WorkflowExecution | undefined;
}

/**
 * <p>The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.</p>
 * @public
 */
export interface WorkflowExecutionConfiguration {
  /**
   * <p>The maximum duration allowed for decision tasks for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  taskStartToCloseTimeout: string | undefined;

  /**
   * <p>The total duration for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  executionStartToCloseTimeout: string | undefined;

  /**
   * <p>The task list used for the decision tasks generated for this workflow execution.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>The policy to use for the child workflow executions if this workflow execution is terminated, by calling the
   *       <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * <p>The IAM role attached to the child workflow execution.</p>
   * @public
   */
  lambdaRole?: string;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * <p>Contains information about a workflow execution.</p>
 * @public
 */
export interface WorkflowExecutionInfo {
  /**
   * <p>The workflow execution this information is about.</p>
   * @public
   */
  execution: WorkflowExecution | undefined;

  /**
   * <p>The type of the workflow execution.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The time when the execution was started.</p>
   * @public
   */
  startTimestamp: Date | undefined;

  /**
   * <p>The time when the workflow execution was closed. Set only if the execution status is CLOSED.</p>
   * @public
   */
  closeTimestamp?: Date;

  /**
   * <p>The current status of the execution.</p>
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * <p>If the execution status is closed then this specifies how the execution was closed:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – the execution was successfully completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code> – the execution was canceled.Cancellation allows the implementation to gracefully clean
   *         up before the execution is closed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATED</code> – the execution was force terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – the execution failed to complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMED_OUT</code> – the execution did not complete in the alloted time and was automatically timed
   *         out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTINUED_AS_NEW</code> – the execution is logically continued. This means the current execution was
   *         completed and a new execution was started to carry on the workflow.</p>
   *             </li>
   *          </ul>
   * @public
   */
  closeStatus?: CloseStatus;

  /**
   * <p>If this workflow execution is a child of another execution then contains the workflow execution that started this execution.</p>
   * @public
   */
  parent?: WorkflowExecution;

  /**
   * <p>The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.</p>
   * @public
   */
  tagList?: string[];

  /**
   * <p>Set to true if a cancellation is requested for this workflow execution.</p>
   * @public
   */
  cancelRequested?: boolean;
}

/**
 * <p>Contains the counts of open tasks, child workflow executions and timers for a workflow execution.</p>
 * @public
 */
export interface WorkflowExecutionOpenCounts {
  /**
   * <p>The count of activity tasks whose status is <code>OPEN</code>.</p>
   * @public
   */
  openActivityTasks: number | undefined;

  /**
   * <p>The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision task.</p>
   * @public
   */
  openDecisionTasks: number | undefined;

  /**
   * <p>The count of timers started by this workflow execution that have not fired yet.</p>
   * @public
   */
  openTimers: number | undefined;

  /**
   * <p>The count of child workflow executions whose status is <code>OPEN</code>.</p>
   * @public
   */
  openChildWorkflowExecutions: number | undefined;

  /**
   * <p>The count of Lambda tasks whose status is <code>OPEN</code>.</p>
   * @public
   */
  openLambdaFunctions?: number;
}

/**
 * <p>Contains details about a workflow execution.</p>
 * @public
 */
export interface WorkflowExecutionDetail {
  /**
   * <p>Information about the workflow execution.</p>
   * @public
   */
  executionInfo: WorkflowExecutionInfo | undefined;

  /**
   * <p>The configuration settings for this workflow execution including timeout values, tasklist etc.</p>
   * @public
   */
  executionConfiguration: WorkflowExecutionConfiguration | undefined;

  /**
   * <p>The number of tasks for this workflow execution. This includes open and closed tasks of all types.</p>
   * @public
   */
  openCounts: WorkflowExecutionOpenCounts | undefined;

  /**
   * <p>The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.</p>
   * @public
   */
  latestActivityTaskTimestamp?: Date;

  /**
   * <p>The latest executionContext provided by the decider for this workflow execution. A decider can provide an
   *       executionContext (a free-form string) when closing a decision task using <a>RespondDecisionTaskCompleted</a>.</p>
   * @public
   */
  latestExecutionContext?: string;
}

/**
 * @public
 */
export interface DescribeWorkflowTypeInput {
  /**
   * <p>The name of the domain in which this workflow type is registered.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The workflow type to describe.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;
}

/**
 * <p>The configuration settings of a workflow type.</p>
 * @public
 */
export interface WorkflowTypeConfiguration {
  /**
   * <p>
   *          The default maximum duration, specified when registering the workflow type, that a decision task
   *       for executions of this workflow type might take before returning completion or failure. If the task doesn'tdo  close
   *       in the specified time then the task is automatically timed out and rescheduled. If the decider eventually reports
   *       a completion or failure, it is ignored. This default can be overridden when starting a workflow execution using
   *       the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskStartToCloseTimeout?: string;

  /**
   * <p>
   *          The default maximum duration, specified when registering the workflow type, for executions of
   *       this workflow type. This default can be overridden when starting a workflow execution using the
   *       <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultExecutionStartToCloseTimeout?: string;

  /**
   * <p>
   *          The default task list, specified when registering the workflow type, for decisions tasks
   *       scheduled for workflow executions of this type. This default can be overridden when starting a workflow execution
   *       using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   * @public
   */
  defaultTaskList?: TaskList;

  /**
   * <p>
   *          The default task priority, specified when registering the workflow type, for all decision tasks
   *       of this workflow type. This default can be overridden when starting a workflow execution using the
   *       <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> decision.</p>
   *          <p>Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  defaultTaskPriority?: string;

  /**
   * <p>
   *          The default policy to use for the child workflow executions when a workflow execution of this
   *       type is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired
   *       timeout. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a>
   *       action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *   execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider
   *   to take appropriate actions when it receives an execution history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  defaultChildPolicy?: ChildPolicy;

  /**
   * <p>The default IAM role attached to this workflow type.</p>
   *          <note>
   *             <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you
   *         don't specify an IAM role when starting this workflow type, the default Lambda role is
   *         attached to the execution. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  defaultLambdaRole?: string;
}

/**
 * <p>Contains information about a workflow type.</p>
 * @public
 */
export interface WorkflowTypeInfo {
  /**
   * <p>The workflow type this information is about.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The current status of the workflow type.</p>
   * @public
   */
  status: RegistrationStatus | undefined;

  /**
   * <p>The description of the type registered through <a>RegisterWorkflowType</a>.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The date when this type was registered.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>If the type is in deprecated state, then it is set to the date when the type was deprecated.</p>
   * @public
   */
  deprecationDate?: Date;
}

/**
 * <p>Contains details about a workflow type.</p>
 * @public
 */
export interface WorkflowTypeDetail {
  /**
   * <p>General information about the workflow type.</p>
   *          <p>The status of the workflow type (returned in the WorkflowTypeInfo structure) can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REGISTERED</code> – The type is registered and available. Workers supporting this type should be running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code> – The type was deprecated using <a>DeprecateWorkflowType</a>, but is still in use. You should
   *         keep workers supporting this type running. You cannot create new workflow executions of this type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  typeInfo: WorkflowTypeInfo | undefined;

  /**
   * <p>Configuration settings of the workflow type registered through <a>RegisterWorkflowType</a>
   *          </p>
   * @public
   */
  configuration: WorkflowTypeConfiguration | undefined;
}

/**
 * <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
 * @public
 */
export class DomainAlreadyExistsFault extends __BaseException {
  readonly name: "DomainAlreadyExistsFault" = "DomainAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainAlreadyExistsFault, __BaseException>) {
    super({
      name: "DomainAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainAlreadyExistsFault.prototype);
  }
}

/**
 * <p>Contains a paginated collection of DomainInfo structures.</p>
 * @public
 */
export interface DomainInfos {
  /**
   * <p>A list of DomainInfo structures.</p>
   * @public
   */
  domainInfos: DomainInfo[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   * @public
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetWorkflowExecutionHistoryInput {
  /**
   * <p>The name of the domain containing the workflow execution.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>Specifies the workflow execution for which to return the history.</p>
   * @public
   */
  execution: WorkflowExecution | undefined;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   * @public
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the events in reverse order. By default the
   *       results are returned in ascending order of the <code>eventTimeStamp</code> of the
   *       events.</p>
   * @public
   */
  reverseOrder?: boolean;
}

/**
 * <p>Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.</p>
 * @public
 */
export interface History {
  /**
   * <p>The list of history events.</p>
   * @public
   */
  events: HistoryEvent[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   * @public
   */
  nextPageToken?: string;
}

/**
 * <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 * @public
 */
export class LimitExceededFault extends __BaseException {
  readonly name: "LimitExceededFault" = "LimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededFault, __BaseException>) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededFault.prototype);
  }
}

/**
 * @public
 */
export interface ListActivityTypesInput {
  /**
   * <p>The name of the domain in which the activity types have been registered.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>If specified, only lists the activity types that have this name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies the registration status of the activity types to list.</p>
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   * @public
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default, the
   *       results are returned in ascending alphabetical order by <code>name</code> of the activity
   *       types.</p>
   * @public
   */
  reverseOrder?: boolean;
}

/**
 * @public
 */
export interface ListClosedWorkflowExecutionsInput {
  /**
   * <p>The name of the domain that contains the workflow executions to list.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>If specified, the workflow executions are included in the returned results based on
   *       whether their start times are within the range specified by this filter. Also, if this
   *       parameter is specified, the returned results are ordered by their start times.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   * @public
   */
  startTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>If specified, the workflow executions are included in the returned results based on
   *       whether their close times are within the range specified by this filter. Also, if this
   *       parameter is specified, the returned results are ordered by their close times.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   * @public
   */
  closeTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>If specified, only workflow executions matching the workflow ID specified in the filter
   *       are returned.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  executionFilter?: WorkflowExecutionFilter;

  /**
   * <p>If specified, only workflow executions that match this <i>close
   *         status</i> are listed. For example, if TERMINATED is specified, then only TERMINATED
   *       workflow executions are listed.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  closeStatusFilter?: CloseStatusFilter;

  /**
   * <p>If specified, only executions of the type specified in the filter are
   *       returned.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  typeFilter?: WorkflowTypeFilter;

  /**
   * <p>If specified, only executions that have the matching tag are listed.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   * @public
   */
  tagFilter?: TagFilter;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   * @public
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default the
   *       results are returned in descending order of the start or the close time of the
   *       executions.</p>
   * @public
   */
  reverseOrder?: boolean;
}

/**
 * <p>Contains a paginated list of information about workflow executions.</p>
 * @public
 */
export interface WorkflowExecutionInfos {
  /**
   * <p>The list of workflow information structures.</p>
   * @public
   */
  executionInfos: WorkflowExecutionInfo[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   * @public
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>Specifies the registration status of the domains to list.</p>
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   * @public
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default, the
   *       results are returned in ascending alphabetical order by <code>name</code> of the
   *       domains.</p>
   * @public
   */
  reverseOrder?: boolean;
}

/**
 * @public
 */
export interface ListOpenWorkflowExecutionsInput {
  /**
   * <p>The name of the domain that contains the workflow executions to list.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>Workflow executions are included in the returned results based on whether their start
   *       times are within the range specified by this filter.</p>
   * @public
   */
  startTimeFilter: ExecutionTimeFilter | undefined;

  /**
   * <p>If specified, only executions of the type specified in the filter are
   *       returned.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   * @public
   */
  typeFilter?: WorkflowTypeFilter;

  /**
   * <p>If specified, only executions that have the matching tag are listed.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   * @public
   */
  tagFilter?: TagFilter;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   * @public
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default the
   *       results are returned in descending order of the start time of the executions.</p>
   * @public
   */
  reverseOrder?: boolean;

  /**
   * <p>If specified, only workflow executions matching the workflow ID specified in the filter
   *       are returned.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   * @public
   */
  executionFilter?: WorkflowExecutionFilter;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon SWF domain.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and
 *       activities.</p>
 *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The key of a tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of a tag.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>An array of tags associated with the domain.</p>
   * @public
   */
  tags?: ResourceTag[];
}

/**
 * @public
 */
export interface ListWorkflowTypesInput {
  /**
   * <p>The name of the domain in which the workflow types have been registered.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>If specified, lists the workflow type with this name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies the registration status of the workflow types to list.</p>
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   * @public
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default the
   *       results are returned in ascending alphabetical order of the <code>name</code> of the workflow
   *       types.</p>
   * @public
   */
  reverseOrder?: boolean;
}

/**
 * <p>Contains a paginated list of information structures about workflow types.</p>
 * @public
 */
export interface WorkflowTypeInfos {
  /**
   * <p>The list of workflow type information.</p>
   * @public
   */
  typeInfos: WorkflowTypeInfo[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   * @public
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface PollForActivityTaskInput {
  /**
   * <p>The name of the domain that contains the task lists being polled.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>Specifies the task list to poll for activity tasks.</p>
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>Identity of the worker making the request, recorded in the
   *         <code>ActivityTaskStarted</code> event in the workflow history. This enables diagnostic
   *       tracing when problems arise. The form of this identity is user defined.</p>
   * @public
   */
  identity?: string;
}

/**
 * @public
 */
export interface PollForDecisionTaskInput {
  /**
   * <p>The name of the domain containing the task lists to poll.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>Specifies the task list to poll for decision tasks.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * <p>Identity of the decider making the request, which is recorded in the
   *       DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when
   *       problems arise. The form of this identity is user defined.</p>
   * @public
   */
  identity?: string;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 24 hours. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   *          <note>
   *             <p>The <code>nextPageToken</code> returned by this action cannot be used with <a>GetWorkflowExecutionHistory</a> to get the next page. You must call <a>PollForDecisionTask</a> again (with the <code>nextPageToken</code>) to retrieve
   *         the next page of history records. Calling <a>PollForDecisionTask</a> with a
   *           <code>nextPageToken</code> doesn't return a new decision task.</p>
   *          </note>
   * @public
   */
  nextPageToken?: string;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   *          <p>This
   *       is an upper limit only; the actual number of results returned per call may be fewer than the
   *       specified maximum.</p>
   * @public
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the events in reverse order. By default the
   *       results are returned in ascending order of the <code>eventTimestamp</code> of the
   *       events.</p>
   * @public
   */
  reverseOrder?: boolean;

  /**
   * <p>When set to <code>true</code>, returns the events with <code>eventTimestamp</code> greater than or equal to <code>eventTimestamp</code> of the most recent <code>DecisionTaskStarted</code> event. By default, this parameter is set to <code>false</code>.</p>
   * @public
   */
  startAtPreviousStartedEvent?: boolean;
}

/**
 * @public
 */
export interface RecordActivityTaskHeartbeatInput {
  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results. </p>
   *          </important>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>If specified, contains details about the progress of the task.</p>
   * @public
   */
  details?: string;
}

/**
 * @public
 */
export interface RegisterActivityTypeInput {
  /**
   * <p>The name of the domain in which this activity is to be registered.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The name of the activity type within the domain.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the activity type.</p>
   *          <note>
   *             <p>The activity type consists of the name and version, the combination of which must be
   *         unique within the domain.</p>
   *          </note>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A textual description of the activity type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>If set, specifies the default maximum duration that a worker can take to process tasks
   *       of this activity type. This default can be overridden when scheduling an activity task using
   *       the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskStartToCloseTimeout?: string;

  /**
   * <p>If set, specifies the default maximum time before which a worker processing a task of
   *       this type must report progress by calling <a>RecordActivityTaskHeartbeat</a>. If
   *       the timeout is exceeded, the activity task is automatically timed out. This default can be
   *       overridden when scheduling an activity task using the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>. If the activity worker subsequently attempts to record a heartbeat
   *       or returns a result, the activity worker receives an <code>UnknownResource</code> fault. In
   *       this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should
   *       clean up the activity task.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskHeartbeatTimeout?: string;

  /**
   * <p>If set, specifies the default task list to use for scheduling tasks of this activity
   *       type. This default task list is used if a task list isn't provided when a task is scheduled
   *       through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   * @public
   */
  defaultTaskList?: TaskList;

  /**
   * <p>The default task priority to assign to the activity type. If not assigned, then
   *         <code>0</code> is used. Valid values are integers that range from Java's
   *         <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647).
   *       Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task
   *         Priority</a> in the <i>in the
   *       <i>Amazon SWF Developer Guide</i>.</i>.</p>
   * @public
   */
  defaultTaskPriority?: string;

  /**
   * <p>If set, specifies the default maximum duration that a task of this activity type can
   *       wait before being assigned to a worker. This default can be overridden when scheduling an
   *       activity task using the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskScheduleToStartTimeout?: string;

  /**
   * <p>If set, specifies the default maximum duration for a task of this activity type. This
   *       default can be overridden when scheduling an activity task using the
   *         <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskScheduleToCloseTimeout?: string;
}

/**
 * <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
 * @public
 */
export class TypeAlreadyExistsFault extends __BaseException {
  readonly name: "TypeAlreadyExistsFault" = "TypeAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeAlreadyExistsFault, __BaseException>) {
    super({
      name: "TypeAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeAlreadyExistsFault.prototype);
  }
}

/**
 * @public
 */
export interface RegisterDomainInput {
  /**
   * <p>Name of the domain to register. The name must be unique in the region that the domain
   *       is registered in.</p>
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A text description of the domain.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The duration (in days) that records and histories of workflow executions on the domain
   *       should be kept by the service. After the retention period, the workflow execution isn't
   *       available in the results of visibility calls.</p>
   *          <p>If you pass the value <code>NONE</code> or <code>0</code> (zero), then the workflow
   *       execution history isn't retained. As soon as the workflow execution completes, the execution
   *       record and its history are deleted.</p>
   *          <p>The maximum workflow execution retention period is 90 days. For more information about
   *       Amazon SWF service limits, see: <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-limits.html">Amazon SWF Service Limits</a> in the
   *         <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  workflowExecutionRetentionPeriodInDays: string | undefined;

  /**
   * <p>Tags to be added when registering a domain.</p>
   *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
   * @public
   */
  tags?: ResourceTag[];
}

/**
 * <p>You've exceeded the number of tags allowed for a domain.</p>
 * @public
 */
export class TooManyTagsFault extends __BaseException {
  readonly name: "TooManyTagsFault" = "TooManyTagsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsFault, __BaseException>) {
    super({
      name: "TooManyTagsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsFault.prototype);
  }
}

/**
 * @public
 */
export interface RegisterWorkflowTypeInput {
  /**
   * <p>The name of the domain in which to register the workflow type.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The name of the workflow type.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the workflow type.</p>
   *          <note>
   *             <p>The workflow type consists of the name and version, the combination of which must be
   *         unique within the domain. To get a list of all currently registered workflow types, use the
   *           <a>ListWorkflowTypes</a> action.</p>
   *          </note>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>Textual description of the workflow type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>If set, specifies the default maximum duration of decision tasks for this workflow
   *       type. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   * @public
   */
  defaultTaskStartToCloseTimeout?: string;

  /**
   * <p>If set, specifies the default maximum duration for executions of this workflow type.
   *       You can override this default when starting an execution through the <a>StartWorkflowExecution</a> Action or <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds; an integer greater than or equal to 0. Unlike
   *       some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for
   *         <code>defaultExecutionStartToCloseTimeout</code>; there is a one-year max limit on the time
   *       that a workflow execution can run. Exceeding this limit always causes the workflow execution
   *       to time out.</p>
   * @public
   */
  defaultExecutionStartToCloseTimeout?: string;

  /**
   * <p>If set, specifies the default task list to use for scheduling decision tasks for
   *       executions of this workflow type. This default is used only if a task list isn't provided when
   *       starting the execution through the <a>StartWorkflowExecution</a> Action or
   *         <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   * @public
   */
  defaultTaskList?: TaskList;

  /**
   * <p>The default task priority to assign to the workflow type. If not assigned, then
   *         <code>0</code> is used. Valid values are integers that range from Java's
   *         <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647).
   *       Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task
   *         Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  defaultTaskPriority?: string;

  /**
   * <p>If set, specifies the default policy to use for the child workflow executions when a
   *       workflow execution of this type is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout. This
   *       default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *           execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its
   *           history. It is up to the decider to take appropriate actions when it receives an execution
   *           history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to
   *           run.</p>
   *             </li>
   *          </ul>
   * @public
   */
  defaultChildPolicy?: ChildPolicy;

  /**
   * <p>The default IAM role attached to this workflow type.</p>
   *          <note>
   *             <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you
   *         don't specify an IAM role when you start this workflow type, the default Lambda role is
   *         attached to the execution. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  defaultLambdaRole?: string;
}

/**
 * @public
 */
export interface RequestCancelWorkflowExecutionInput {
  /**
   * <p>The name of the domain containing the workflow execution to cancel.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The workflowId of the workflow execution to cancel.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The runId of the workflow execution to cancel.</p>
   * @public
   */
  runId?: string;
}

/**
 * @public
 */
export interface RespondActivityTaskCanceledInput {
  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p> Information about the cancellation.</p>
   * @public
   */
  details?: string;
}

/**
 * @public
 */
export interface RespondActivityTaskCompletedInput {
  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>The result of the activity task. It is a free form string that is implementation
   *       specific.</p>
   * @public
   */
  result?: string;
}

/**
 * @public
 */
export interface RespondActivityTaskFailedInput {
  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>Description of the error that may assist in diagnostics.</p>
   * @public
   */
  reason?: string;

  /**
   * <p> Detailed information about the failure.</p>
   * @public
   */
  details?: string;
}

/**
 * <p>Input data for a TaskCompleted response to a decision task.</p>
 * @public
 */
export interface RespondDecisionTaskCompletedInput {
  /**
   * <p>The <code>taskToken</code> from the <a>DecisionTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   * @public
   */
  taskToken: string | undefined;

  /**
   * <p>The list of decisions (possibly empty) made by the decider while processing this
   *       decision task. See the docs for the <a>Decision</a> structure for
   *       details.</p>
   * @public
   */
  decisions?: Decision[];

  /**
   * <p>User defined context to add to workflow execution.</p>
   * @public
   */
  executionContext?: string;

  /**
   * <p>The task list to use for the future decision tasks of this workflow execution. This list overrides the original task list you specified while starting the workflow execution. </p>
   * @public
   */
  taskList?: TaskList;

  /**
   * <p>Specifies a timeout (in seconds) for the task list override. When this parameter is missing, the task list override is permanent. This parameter makes it possible to temporarily override the task list. If a decision task scheduled on the override task list is not started within the timeout, the decision task will time out. Amazon SWF will revert the override and schedule a new decision task to the original task list.</p>
   *          <p>If a decision task scheduled on the override task list is started within the timeout, but not completed within the start-to-close timeout, Amazon SWF will also revert the override and schedule a new decision task to the original task list.</p>
   * @public
   */
  taskListScheduleToStartTimeout?: string;
}

/**
 * <p>Specifies the <code>runId</code> of a workflow execution.</p>
 * @public
 */
export interface Run {
  /**
   * <p>The <code>runId</code> of a workflow execution. This ID is generated by the service and
   *       can be used to uniquely identify the workflow execution within a domain.</p>
   * @public
   */
  runId?: string;
}

/**
 * @public
 */
export interface SignalWorkflowExecutionInput {
  /**
   * <p>The name of the domain containing the workflow execution to signal.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The workflowId of the workflow execution to signal.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The runId of the workflow execution to signal.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>The name of the signal. This name must be meaningful to the target workflow.</p>
   * @public
   */
  signalName: string | undefined;

  /**
   * <p>Data to attach to the <code>WorkflowExecutionSignaled</code> event in the target
   *       workflow execution's history.</p>
   * @public
   */
  input?: string;
}

/**
 * @public
 */
export interface StartWorkflowExecutionInput {
  /**
   * <p>The name of the domain in which the workflow execution is created.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The user defined identifier associated with the workflow execution. You can use this to
   *       associate a custom identifier with the workflow execution. You may specify the same identifier
   *       if a workflow execution is logically a <i>restart</i> of a previous execution.
   *       You cannot have two open workflow executions with the same <code>workflowId</code> at the same
   *       time within the same domain.</p>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The type of the workflow to start.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * <p>The task list to use for the decision tasks generated for this workflow execution. This
   *       overrides the <code>defaultTaskList</code> specified when registering the workflow
   *       type.</p>
   *          <note>
   *             <p>A task list for this workflow execution must be specified either as a default for the
   *         workflow type or through this parameter. If neither this parameter is set nor a default task
   *         list was specified at registration time then a fault is returned.</p>
   *          </note>
   *          <p>The specified string must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       <i>not</i> be the literal string <code>arn</code>.</p>
   * @public
   */
  taskList?: TaskList;

  /**
   * <p>The task priority to use for this workflow execution. This overrides any default
   *       priority that was assigned when the workflow type was registered. If not set, then the default
   *       task priority for the workflow type is used. Valid values are integers that range from Java's
   *         <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647).
   *       Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task
   *         Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   * @public
   */
  taskPriority?: string;

  /**
   * <p>The input for the workflow execution. This is a free form string which should be
   *       meaningful to the workflow you are starting. This <code>input</code> is made available to the
   *       new workflow execution in the <code>WorkflowExecutionStarted</code> history event.</p>
   * @public
   */
  input?: string;

  /**
   * <p>The total duration for this workflow execution. This overrides the
   *       defaultExecutionStartToCloseTimeout specified when registering the workflow type.</p>
   *          <p>The duration is specified in seconds; an integer greater than or equal to
   *         <code>0</code>. Exceeding this limit causes the workflow execution to time out. Unlike some
   *       of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for this
   *       timeout; there is a one-year max limit on the time that a workflow execution can
   *       run.</p>
   *          <note>
   *             <p>An execution start-to-close timeout must be specified either through this parameter
   *         or as a default when the workflow type is registered. If neither this parameter nor a
   *         default execution start-to-close timeout is specified, a fault is returned.</p>
   *          </note>
   * @public
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The list of tags to associate with the workflow execution. You can specify a maximum of
   *       5 tags. You can list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or <a>ListClosedWorkflowExecutions</a> and
   *       specifying a <a>TagFilter</a>.</p>
   * @public
   */
  tagList?: string[];

  /**
   * <p>Specifies the maximum duration of decision tasks for this workflow execution. This
   *       parameter overrides the <code>defaultTaskStartToCloseTimout</code> specified when registering
   *       the workflow type using <a>RegisterWorkflowType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A task start-to-close timeout for this workflow execution must be specified either as
   *         a default for the workflow type or through this parameter. If neither this parameter is set
   *         nor a default task start-to-close timeout was specified at registration time then a fault is
   *         returned.</p>
   *          </note>
   * @public
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>If set, specifies the policy to use for the child workflow executions of this workflow
   *       execution if it is terminated, by calling the <a>TerminateWorkflowExecution</a>
   *       action explicitly or due to an expired timeout. This policy overrides the default child policy
   *       specified when registering the workflow type using <a>RegisterWorkflowType</a>.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *           execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its
   *           history. It is up to the decider to take appropriate actions when it receives an execution
   *           history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to
   *           run.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>A child policy for this workflow execution must be specified either as a default for
   *         the workflow type or through this parameter. If neither this parameter is set nor a default
   *         child policy was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  childPolicy?: ChildPolicy;

  /**
   * <p>The IAM role to attach to this workflow execution.</p>
   *          <note>
   *             <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you
   *         don't attach an IAM role, any attempt to schedule a Lambda task fails. This results in a
   *           <code>ScheduleLambdaFunctionFailed</code> history event. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  lambdaRole?: string;
}

/**
 * <p>Returned by <a>StartWorkflowExecution</a> when an open execution with the same workflowId is already running in
 *       the specified domain.</p>
 * @public
 */
export class WorkflowExecutionAlreadyStartedFault extends __BaseException {
  readonly name: "WorkflowExecutionAlreadyStartedFault" = "WorkflowExecutionAlreadyStartedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkflowExecutionAlreadyStartedFault, __BaseException>) {
    super({
      name: "WorkflowExecutionAlreadyStartedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkflowExecutionAlreadyStartedFault.prototype);
  }
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon SWF domain.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to add to a domain. </p>
   *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
   * @public
   */
  tags: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkflowExecutionInput {
  /**
   * <p>The domain of the workflow execution to terminate.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The workflowId of the workflow execution to terminate.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The runId of the workflow execution to terminate.</p>
   * @public
   */
  runId?: string;

  /**
   * <p> A descriptive reason for terminating the workflow execution.</p>
   * @public
   */
  reason?: string;

  /**
   * <p> Details for terminating the workflow execution.</p>
   * @public
   */
  details?: string;

  /**
   * <p>If set, specifies the policy to use for the child workflow executions of the workflow
   *       execution being terminated. This policy overrides the child policy specified for the workflow
   *       execution at registration time or when starting the execution.</p>
   *          <p>The supported child policies are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code> – The child executions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child
   *           execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its
   *           history. It is up to the decider to take appropriate actions when it receives an execution
   *           history with this event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ABANDON</code> – No action is taken. The child executions continue to
   *           run.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>A child policy for this workflow execution must be specified either as a default for
   *         the workflow type or through this parameter. If neither this parameter is set nor a default
   *         child policy was specified at registration time then a fault is returned.</p>
   *          </note>
   * @public
   */
  childPolicy?: ChildPolicy;
}

/**
 * @public
 */
export interface UndeprecateActivityTypeInput {
  /**
   * <p>The name of the domain of the deprecated activity type.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The activity type to undeprecate.</p>
   * @public
   */
  activityType: ActivityType | undefined;
}

/**
 * @public
 */
export interface UndeprecateDomainInput {
  /**
   * <p>The name of the domain of the deprecated workflow type.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface UndeprecateWorkflowTypeInput {
  /**
   * <p>The name of the domain of the deprecated workflow type.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The name of the domain of the deprecated workflow type.</p>
   * @public
   */
  workflowType: WorkflowType | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon SWF domain.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to remove from the Amazon SWF domain.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
