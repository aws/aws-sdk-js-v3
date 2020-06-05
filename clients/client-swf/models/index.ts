import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Unit of work sent to an activity worker.</p>
 */
export interface ActivityTask {
  __type?: "ActivityTask";
  /**
   * <p>The unique ID of the task.</p>
   */
  activityId: string | undefined;

  /**
   * <p>The type of this activity task.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The inputs provided when the activity task was scheduled. The form of the input is user defined and should be meaningful to the activity implementation.</p>
   */
  input?: string;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded in the history.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.</p>
   */
  taskToken: string | undefined;

  /**
   * <p>The workflow execution that started this activity task.</p>
   */
  workflowExecution: WorkflowExecution | undefined;
}

export namespace ActivityTask {
  export const filterSensitiveLog = (obj: ActivityTask): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTask => __isa(o, "ActivityTask");
}

/**
 * <p>Provides the details of the <code>ActivityTaskCanceled</code> event.</p>
 */
export interface ActivityTaskCanceledEventAttributes {
  __type?: "ActivityTaskCanceledEventAttributes";
  /**
   * <p>Details of the cancellation.</p>
   */
  details?: string;

  /**
   * <p>If set, contains the ID of the last <code>ActivityTaskCancelRequested</code> event recorded for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  latestCancelRequestedEventId?: number;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   */
  startedEventId: number | undefined;
}

export namespace ActivityTaskCanceledEventAttributes {
  export const filterSensitiveLog = (
    obj: ActivityTaskCanceledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTaskCanceledEventAttributes =>
    __isa(o, "ActivityTaskCanceledEventAttributes");
}

/**
 * <p>Provides the details of the <code>ActivityTaskCancelRequested</code> event.</p>
 */
export interface ActivityTaskCancelRequestedEventAttributes {
  __type?: "ActivityTaskCancelRequestedEventAttributes";
  /**
   * <p>The unique ID of the task.</p>
   */
  activityId: string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelActivityTask</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;
}

export namespace ActivityTaskCancelRequestedEventAttributes {
  export const filterSensitiveLog = (
    obj: ActivityTaskCancelRequestedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ActivityTaskCancelRequestedEventAttributes =>
    __isa(o, "ActivityTaskCancelRequestedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ActivityTaskCompleted</code> event.</p>
 */
export interface ActivityTaskCompletedEventAttributes {
  __type?: "ActivityTaskCompletedEventAttributes";
  /**
   * <p>The results of the activity task.</p>
   */
  result?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   */
  startedEventId: number | undefined;
}

export namespace ActivityTaskCompletedEventAttributes {
  export const filterSensitiveLog = (
    obj: ActivityTaskCompletedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTaskCompletedEventAttributes =>
    __isa(o, "ActivityTaskCompletedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ActivityTaskFailed</code> event.</p>
 */
export interface ActivityTaskFailedEventAttributes {
  __type?: "ActivityTaskFailedEventAttributes";
  /**
   * <p>The details of the failure.</p>
   */
  details?: string;

  /**
   * <p>The reason provided for the failure.</p>
   */
  reason?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   */
  startedEventId: number | undefined;
}

export namespace ActivityTaskFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: ActivityTaskFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTaskFailedEventAttributes =>
    __isa(o, "ActivityTaskFailedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ActivityTaskScheduled</code> event.</p>
 */
export interface ActivityTaskScheduledEventAttributes {
  __type?: "ActivityTaskScheduledEventAttributes";
  /**
   * <p>The unique ID of the activity task.</p>
   */
  activityId: string | undefined;

  /**
   * <p>The type of the activity task.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The maximum time before which the worker processing this task must report progress by calling
   *       <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed out. If
   *       the worker subsequently attempts to record a heartbeat or return a result, it is ignored.</p>
   */
  heartbeatTimeout?: string;

  /**
   * <p>The input provided to the activity task.</p>
   */
  input?: string;

  /**
   * <p>The maximum amount of time for this activity task.</p>
   */
  scheduleToCloseTimeout?: string;

  /**
   * <p>The maximum amount of time the activity task can wait to be assigned to a worker.</p>
   */
  scheduleToStartTimeout?: string;

  /**
   * <p>The maximum amount of time a worker may take to process the activity task.</p>
   */
  startToCloseTimeout?: string;

  /**
   * <p>The task list in which the activity task has been scheduled.</p>
   */
  taskList: TaskList | undefined;

  /**
   * <p>
   *          The priority to assign to the scheduled activity task. If set, this overrides any default
   *       priority value that was assigned when the activity type was registered.</p>
   *          <p>Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;
}

export namespace ActivityTaskScheduledEventAttributes {
  export const filterSensitiveLog = (
    obj: ActivityTaskScheduledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTaskScheduledEventAttributes =>
    __isa(o, "ActivityTaskScheduledEventAttributes");
}

/**
 * <p>Provides the details of the <code>ActivityTaskStarted</code> event.</p>
 */
export interface ActivityTaskStartedEventAttributes {
  __type?: "ActivityTaskStartedEventAttributes";
  /**
   * <p>Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this identity is user defined.</p>
   */
  identity?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;
}

export namespace ActivityTaskStartedEventAttributes {
  export const filterSensitiveLog = (
    obj: ActivityTaskStartedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTaskStartedEventAttributes =>
    __isa(o, "ActivityTaskStartedEventAttributes");
}

/**
 * <p>Status information about an activity task.</p>
 */
export interface ActivityTaskStatus {
  __type?: "ActivityTaskStatus";
  /**
   * <p>Set to <code>true</code> if cancellation of the task is requested.</p>
   */
  cancelRequested: boolean | undefined;
}

export namespace ActivityTaskStatus {
  export const filterSensitiveLog = (obj: ActivityTaskStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTaskStatus =>
    __isa(o, "ActivityTaskStatus");
}

/**
 * <p>Provides the details of the <code>ActivityTaskTimedOut</code> event.</p>
 */
export interface ActivityTaskTimedOutEventAttributes {
  __type?: "ActivityTaskTimedOutEventAttributes";
  /**
   * <p>Contains the content of the <code>details</code> parameter for the last call made by the activity to
   *       <code>RecordActivityTaskHeartbeat</code>.</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The type of the timeout that caused this event.</p>
   */
  timeoutType: ActivityTaskTimeoutType | string | undefined;
}

export namespace ActivityTaskTimedOutEventAttributes {
  export const filterSensitiveLog = (
    obj: ActivityTaskTimedOutEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTaskTimedOutEventAttributes =>
    __isa(o, "ActivityTaskTimedOutEventAttributes");
}

export type ActivityTaskTimeoutType =
  | "HEARTBEAT"
  | "SCHEDULE_TO_CLOSE"
  | "SCHEDULE_TO_START"
  | "START_TO_CLOSE";

/**
 * <p>Represents an activity type.</p>
 */
export interface ActivityType {
  __type?: "ActivityType";
  /**
   * <p>The name of this activity.</p>
   *          <note>
   *             <p>The combination of activity type name and version must be unique within a domain.</p>
   *          </note>
   */
  name: string | undefined;

  /**
   * <p>The version of this activity.</p>
   *          <note>
   *             <p>The combination of activity type name and version must be unique with in a domain.</p>
   *          </note>
   */
  version: string | undefined;
}

export namespace ActivityType {
  export const filterSensitiveLog = (obj: ActivityType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityType => __isa(o, "ActivityType");
}

/**
 * <p>Configuration settings registered with the activity type.</p>
 */
export interface ActivityTypeConfiguration {
  __type?: "ActivityTypeConfiguration";
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
   */
  defaultTaskHeartbeatTimeout?: string;

  /**
   * <p>
   *          The default task list specified for this activity type at registration. This default is used if
   *       a task list isn't provided when a task is scheduled through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>. You can override the default registered task list when scheduling a task through the
   *       <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
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
   */
  defaultTaskPriority?: string;

  /**
   * <p>
   *          The default maximum duration, specified when registering the activity type, for tasks of this activity
   *       type. You can override this default when scheduling a task through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskScheduleToCloseTimeout?: string;

  /**
   * <p>
   *          The default maximum duration, specified when registering the activity type, that a task of an
   *       activity type can wait before being assigned to a worker. You can override this default when scheduling a task
   *       through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskScheduleToStartTimeout?: string;

  /**
   * <p>
   *          The default maximum duration for tasks of an activity type specified when registering the activity
   *       type. You can override this default when scheduling a task through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskStartToCloseTimeout?: string;
}

export namespace ActivityTypeConfiguration {
  export const filterSensitiveLog = (obj: ActivityTypeConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTypeConfiguration =>
    __isa(o, "ActivityTypeConfiguration");
}

/**
 * <p>Detailed information about an activity type.</p>
 */
export interface ActivityTypeDetail {
  __type?: "ActivityTypeDetail";
  /**
   * <p>The configuration settings registered with the activity type.</p>
   */
  configuration: ActivityTypeConfiguration | undefined;

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
   */
  typeInfo: ActivityTypeInfo | undefined;
}

export namespace ActivityTypeDetail {
  export const filterSensitiveLog = (obj: ActivityTypeDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTypeDetail =>
    __isa(o, "ActivityTypeDetail");
}

/**
 * <p>Detailed information about an activity type.</p>
 */
export interface ActivityTypeInfo {
  __type?: "ActivityTypeInfo";
  /**
   * <p>The <a>ActivityType</a> type structure representing the activity type.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The date and time this activity type was created through <a>RegisterActivityType</a>.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>If DEPRECATED, the date and time <a>DeprecateActivityType</a> was called.</p>
   */
  deprecationDate?: Date;

  /**
   * <p>The description of the activity type provided in <a>RegisterActivityType</a>.</p>
   */
  description?: string;

  /**
   * <p>The current status of the activity type.</p>
   */
  status: RegistrationStatus | string | undefined;
}

export namespace ActivityTypeInfo {
  export const filterSensitiveLog = (obj: ActivityTypeInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTypeInfo =>
    __isa(o, "ActivityTypeInfo");
}

/**
 * <p>Contains a paginated list of activity type information structures.</p>
 */
export interface ActivityTypeInfos {
  __type?: "ActivityTypeInfos";
  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;

  /**
   * <p>List of activity type information.</p>
   */
  typeInfos: ActivityTypeInfo[] | undefined;
}

export namespace ActivityTypeInfos {
  export const filterSensitiveLog = (obj: ActivityTypeInfos): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityTypeInfos =>
    __isa(o, "ActivityTypeInfos");
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
 */
export interface CancelTimerDecisionAttributes {
  __type?: "CancelTimerDecisionAttributes";
  /**
   * <p>
   *          The unique ID of the timer to cancel.</p>
   */
  timerId: string | undefined;
}

export namespace CancelTimerDecisionAttributes {
  export const filterSensitiveLog = (
    obj: CancelTimerDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelTimerDecisionAttributes =>
    __isa(o, "CancelTimerDecisionAttributes");
}

export type CancelTimerFailedCause =
  | "OPERATION_NOT_PERMITTED"
  | "TIMER_ID_UNKNOWN";

/**
 * <p>Provides the details of the <code>CancelTimerFailed</code> event.</p>
 */
export interface CancelTimerFailedEventAttributes {
  __type?: "CancelTimerFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: CancelTimerFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelTimer</code> decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The timerId provided in the <code>CancelTimer</code> decision that failed.</p>
   */
  timerId: string | undefined;
}

export namespace CancelTimerFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: CancelTimerFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelTimerFailedEventAttributes =>
    __isa(o, "CancelTimerFailedEventAttributes");
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
 */
export interface CancelWorkflowExecutionDecisionAttributes {
  __type?: "CancelWorkflowExecutionDecisionAttributes";
  /**
   * <p>
   *          Details of the cancellation.</p>
   */
  details?: string;
}

export namespace CancelWorkflowExecutionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: CancelWorkflowExecutionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelWorkflowExecutionDecisionAttributes =>
    __isa(o, "CancelWorkflowExecutionDecisionAttributes");
}

export type CancelWorkflowExecutionFailedCause =
  | "OPERATION_NOT_PERMITTED"
  | "UNHANDLED_DECISION";

/**
 * <p>Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.</p>
 */
export interface CancelWorkflowExecutionFailedEventAttributes {
  __type?: "CancelWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: CancelWorkflowExecutionFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;
}

export namespace CancelWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: CancelWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CancelWorkflowExecutionFailedEventAttributes =>
    __isa(o, "CancelWorkflowExecutionFailedEventAttributes");
}

export type ChildPolicy = "ABANDON" | "REQUEST_CANCEL" | "TERMINATE";

/**
 * <p>Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.</p>
 */
export interface ChildWorkflowExecutionCanceledEventAttributes {
  __type?: "ChildWorkflowExecutionCanceledEventAttributes";
  /**
   * <p>Details of the cancellation (if provided).</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The child workflow execution that was canceled.</p>
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace ChildWorkflowExecutionCanceledEventAttributes {
  export const filterSensitiveLog = (
    obj: ChildWorkflowExecutionCanceledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ChildWorkflowExecutionCanceledEventAttributes =>
    __isa(o, "ChildWorkflowExecutionCanceledEventAttributes");
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.</p>
 */
export interface ChildWorkflowExecutionCompletedEventAttributes {
  __type?: "ChildWorkflowExecutionCompletedEventAttributes";
  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The result of the child workflow execution.</p>
   */
  result?: string;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The child workflow execution that was completed.</p>
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace ChildWorkflowExecutionCompletedEventAttributes {
  export const filterSensitiveLog = (
    obj: ChildWorkflowExecutionCompletedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ChildWorkflowExecutionCompletedEventAttributes =>
    __isa(o, "ChildWorkflowExecutionCompletedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.</p>
 */
export interface ChildWorkflowExecutionFailedEventAttributes {
  __type?: "ChildWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The details of the failure (if provided).</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The reason for the failure (if provided).</p>
   */
  reason?: string;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The child workflow execution that failed.</p>
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace ChildWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: ChildWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ChildWorkflowExecutionFailedEventAttributes =>
    __isa(o, "ChildWorkflowExecutionFailedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.</p>
 */
export interface ChildWorkflowExecutionStartedEventAttributes {
  __type?: "ChildWorkflowExecutionStartedEventAttributes";
  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The child workflow execution that was started.</p>
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace ChildWorkflowExecutionStartedEventAttributes {
  export const filterSensitiveLog = (
    obj: ChildWorkflowExecutionStartedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ChildWorkflowExecutionStartedEventAttributes =>
    __isa(o, "ChildWorkflowExecutionStartedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.</p>
 */
export interface ChildWorkflowExecutionTerminatedEventAttributes {
  __type?: "ChildWorkflowExecutionTerminatedEventAttributes";
  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The child workflow execution that was terminated.</p>
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace ChildWorkflowExecutionTerminatedEventAttributes {
  export const filterSensitiveLog = (
    obj: ChildWorkflowExecutionTerminatedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ChildWorkflowExecutionTerminatedEventAttributes =>
    __isa(o, "ChildWorkflowExecutionTerminatedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.</p>
 */
export interface ChildWorkflowExecutionTimedOutEventAttributes {
  __type?: "ChildWorkflowExecutionTimedOutEventAttributes";
  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was
   *       started. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The type of the timeout that caused the child workflow execution to time out.</p>
   */
  timeoutType: WorkflowExecutionTimeoutType | string | undefined;

  /**
   * <p>The child workflow execution that timed out.</p>
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace ChildWorkflowExecutionTimedOutEventAttributes {
  export const filterSensitiveLog = (
    obj: ChildWorkflowExecutionTimedOutEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ChildWorkflowExecutionTimedOutEventAttributes =>
    __isa(o, "ChildWorkflowExecutionTimedOutEventAttributes");
}

export type CloseStatus =
  | "CANCELED"
  | "COMPLETED"
  | "CONTINUED_AS_NEW"
  | "FAILED"
  | "TERMINATED"
  | "TIMED_OUT";

/**
 * <p>Used to filter the closed workflow executions in visibility APIs by their close status.</p>
 */
export interface CloseStatusFilter {
  __type?: "CloseStatusFilter";
  /**
   * <p>
   *          The close status that must match the close status of an execution for it to meet the criteria of
   *       this filter.</p>
   */
  status: CloseStatus | string | undefined;
}

export namespace CloseStatusFilter {
  export const filterSensitiveLog = (obj: CloseStatusFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloseStatusFilter =>
    __isa(o, "CloseStatusFilter");
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
 */
export interface CompleteWorkflowExecutionDecisionAttributes {
  __type?: "CompleteWorkflowExecutionDecisionAttributes";
  /**
   * <p>The result of the workflow execution. The form of the result is implementation defined.</p>
   */
  result?: string;
}

export namespace CompleteWorkflowExecutionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: CompleteWorkflowExecutionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CompleteWorkflowExecutionDecisionAttributes =>
    __isa(o, "CompleteWorkflowExecutionDecisionAttributes");
}

export type CompleteWorkflowExecutionFailedCause =
  | "OPERATION_NOT_PERMITTED"
  | "UNHANDLED_DECISION";

/**
 * <p>Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.</p>
 */
export interface CompleteWorkflowExecutionFailedEventAttributes {
  __type?: "CompleteWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: CompleteWorkflowExecutionFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CompleteWorkflowExecution</code> decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;
}

export namespace CompleteWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: CompleteWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CompleteWorkflowExecutionFailedEventAttributes =>
    __isa(o, "CompleteWorkflowExecutionFailedEventAttributes");
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
 *               <ul>
 *                   <li>
 *                       <p>
 *                         <code>tag</code> – A tag used to identify the workflow execution</p>
 *                   </li>
 *                   <li>
 *                       <p>
 *                         <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p>
 *                   </li>
 *                   <li>
 *                       <p>
 *                         <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 */
export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
  __type?: "ContinueAsNewWorkflowExecutionDecisionAttributes";
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
   */
  childPolicy?: ChildPolicy | string;

  /**
   * <p>If set, specifies the total duration for this workflow execution. This overrides the
   *       <code>defaultExecutionStartToCloseTimeout</code> specified when registering the workflow type.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this field. If neither this field is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The input provided to the new workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The IAM role to attach to the new (continued) execution.</p>
   */
  lambdaRole?: string;

  /**
   * <p>The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can
   *       list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or
   *       <a>ListClosedWorkflowExecutions</a> and specifying a <a>TagFilter</a>.</p>
   */
  tagList?: string[];

  /**
   * <p>The task list to use for the decisions of the new (continued) workflow
   *       execution.</p>
   */
  taskList?: TaskList;

  /**
   * <p>
   *          The task priority that, if set, specifies the priority for the decision tasks for this workflow
   *       execution. This overrides the defaultTaskPriority specified when registering the workflow type.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a>  in the <i>Amazon SWF Developer Guide</i>.</p>
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
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The version of the workflow to start.</p>
   */
  workflowTypeVersion?: string;
}

export namespace ContinueAsNewWorkflowExecutionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: ContinueAsNewWorkflowExecutionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ContinueAsNewWorkflowExecutionDecisionAttributes =>
    __isa(o, "ContinueAsNewWorkflowExecutionDecisionAttributes");
}

export type ContinueAsNewWorkflowExecutionFailedCause =
  | "CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED"
  | "DEFAULT_CHILD_POLICY_UNDEFINED"
  | "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_TASK_LIST_UNDEFINED"
  | "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "OPERATION_NOT_PERMITTED"
  | "UNHANDLED_DECISION"
  | "WORKFLOW_TYPE_DEPRECATED"
  | "WORKFLOW_TYPE_DOES_NOT_EXIST";

/**
 * <p>Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.</p>
 */
export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
  __type?: "ContinueAsNewWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *         because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: ContinueAsNewWorkflowExecutionFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>ContinueAsNewWorkflowExecution</code> decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;
}

export namespace ContinueAsNewWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: ContinueAsNewWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ContinueAsNewWorkflowExecutionFailedEventAttributes =>
    __isa(o, "ContinueAsNewWorkflowExecutionFailedEventAttributes");
}

export interface CountClosedWorkflowExecutionsInput {
  __type?: "CountClosedWorkflowExecutionsInput";
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
   */
  closeStatusFilter?: CloseStatusFilter;

  /**
   * <p>If specified, only workflow executions that meet the close time criteria of the filter
   *       are counted.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   */
  closeTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>The name of the domain containing the workflow executions to count.</p>
   */
  domain: string | undefined;

  /**
   * <p>If specified, only workflow executions matching the <code>WorkflowId</code> in the
   *       filter are counted.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   */
  executionFilter?: WorkflowExecutionFilter;

  /**
   * <p>If specified, only workflow executions that meet the start time criteria of the filter
   *       are counted.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   */
  startTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>If specified, only executions that have a tag that matches the filter are
   *       counted.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   */
  tagFilter?: TagFilter;

  /**
   * <p>If specified, indicates the type of the workflow executions to be counted.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   */
  typeFilter?: WorkflowTypeFilter;
}

export namespace CountClosedWorkflowExecutionsInput {
  export const filterSensitiveLog = (
    obj: CountClosedWorkflowExecutionsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CountClosedWorkflowExecutionsInput =>
    __isa(o, "CountClosedWorkflowExecutionsInput");
}

export interface CountOpenWorkflowExecutionsInput {
  __type?: "CountOpenWorkflowExecutionsInput";
  /**
   * <p>The name of the domain containing the workflow executions to count.</p>
   */
  domain: string | undefined;

  /**
   * <p>If specified, only workflow executions matching the <code>WorkflowId</code> in the
   *       filter are counted.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   */
  executionFilter?: WorkflowExecutionFilter;

  /**
   * <p>Specifies the start time criteria that workflow executions must meet in order to be
   *       counted.</p>
   */
  startTimeFilter: ExecutionTimeFilter | undefined;

  /**
   * <p>If specified, only executions that have a tag that matches the filter are
   *       counted.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   */
  tagFilter?: TagFilter;

  /**
   * <p>Specifies the type of the workflow executions to be counted.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   */
  typeFilter?: WorkflowTypeFilter;
}

export namespace CountOpenWorkflowExecutionsInput {
  export const filterSensitiveLog = (
    obj: CountOpenWorkflowExecutionsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CountOpenWorkflowExecutionsInput =>
    __isa(o, "CountOpenWorkflowExecutionsInput");
}

export interface CountPendingActivityTasksInput {
  __type?: "CountPendingActivityTasksInput";
  /**
   * <p>The name of the domain that contains the task list.</p>
   */
  domain: string | undefined;

  /**
   * <p>The name of the task list.</p>
   */
  taskList: TaskList | undefined;
}

export namespace CountPendingActivityTasksInput {
  export const filterSensitiveLog = (
    obj: CountPendingActivityTasksInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CountPendingActivityTasksInput =>
    __isa(o, "CountPendingActivityTasksInput");
}

export interface CountPendingDecisionTasksInput {
  __type?: "CountPendingDecisionTasksInput";
  /**
   * <p>The name of the domain that contains the task list.</p>
   */
  domain: string | undefined;

  /**
   * <p>The name of the task list.</p>
   */
  taskList: TaskList | undefined;
}

export namespace CountPendingDecisionTasksInput {
  export const filterSensitiveLog = (
    obj: CountPendingDecisionTasksInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CountPendingDecisionTasksInput =>
    __isa(o, "CountPendingDecisionTasksInput");
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
 *
 *          <p>
 *             <b>Decision Failure</b>
 *          </p>
 *
 *          <p>Decisions can fail for several reasons</p>
 *
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
 *
 *          <p>One of the following events might be added to the history to indicate an error. The event attribute's
 *           <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
 *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
 *           in the <i>Amazon SWF Developer Guide</i>.</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the
 *         activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't
 *         properly configured.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>RequestCancelActivityTaskFailed</code> – A
 *                         <code>RequestCancelActivityTask</code> decision failed. This could happen if
 *                     there is no open activity task with the specified activityId.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This
 *                     could happen if there is another open timer with the same timerId.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed.
 *                     This could happen if there is no open timer with the specified
 *                     timerId.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>StartChildWorkflowExecutionFailed</code> – A
 *                         <code>StartChildWorkflowExecution</code> decision failed. This could happen
 *                     if the workflow type specified isn't registered, is deprecated, or the decision
 *                     isn't properly configured.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>SignalExternalWorkflowExecutionFailed</code> – A
 *                         <code>SignalExternalWorkflowExecution</code> decision failed. This could
 *                     happen if the <code>workflowID</code> specified in the decision was
 *                     incorrect.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>RequestCancelExternalWorkflowExecutionFailed</code> – A
 *                         <code>RequestCancelExternalWorkflowExecution</code> decision failed. This
 *                     could happen if the <code>workflowID</code> specified in the decision was
 *                     incorrect.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>CancelWorkflowExecutionFailed</code> – A
 *                         <code>CancelWorkflowExecution</code> decision failed. This could happen if
 *                     there is an unhandled decision task pending in the workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>CompleteWorkflowExecutionFailed</code> – A
 *                         <code>CompleteWorkflowExecution</code> decision failed. This could happen if
 *                     there is an unhandled decision task pending in the workflow execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>ContinueAsNewWorkflowExecutionFailed</code> – A
 *                         <code>ContinueAsNewWorkflowExecution</code> decision failed. This could
 *                     happen if there is an unhandled decision task pending in the workflow execution
 *                     or the ContinueAsNewWorkflowExecution decision was not configured
 *                     correctly.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code>
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
 *                     </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>RequestCancelActivityTaskDecisionAttributes</a>
 *                     </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>CompleteWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>FailWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>CancelWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>RecordMarkerDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>StartTimerDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>CancelTimerDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>SignalExternalWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>StartChildWorkflowExecutionDecisionAttributes</a>
 *                   </code>
 *                 </p>
 *             </li>
 *          </ul>
 */
export interface Decision {
  __type?: "Decision";
  /**
   * <p>Provides the details of the <code>CancelTimer</code> decision. It isn't set for other decision types.</p>
   */
  cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;

  /**
   * <p>Provides the details of the <code>CancelWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   */
  cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   */
  completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   */
  continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;

  /**
   * <p>Specifies the type of the decision.</p>
   */
  decisionType: DecisionType | string | undefined;

  /**
   * <p>Provides the details of the <code>FailWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   */
  failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>RecordMarker</code> decision. It isn't set for other decision types.</p>
   */
  recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;

  /**
   * <p>Provides the details of the <code>RequestCancelActivityTask</code> decision. It isn't set for other decision types.</p>
   */
  requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;

  /**
   * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.
   *       It isn't set for other decision types.</p>
   */
  requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>ScheduleActivityTask</code> decision. It isn't set for other decision types.</p>
   */
  scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;

  /**
   * <p>Provides the details of the <code>ScheduleLambdaFunction</code> decision. It isn't set
   *       for other decision types.</p>
   */
  scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   */
  signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision. It isn't set for other decision types.</p>
   */
  startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;

  /**
   * <p>Provides the details of the <code>StartTimer</code> decision. It isn't set for other decision types.</p>
   */
  startTimerDecisionAttributes?: StartTimerDecisionAttributes;
}

export namespace Decision {
  export const filterSensitiveLog = (obj: Decision): any => ({
    ...obj
  });
  export const isa = (o: any): o is Decision => __isa(o, "Decision");
}

/**
 * <p>A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.</p>
 */
export interface DecisionTask {
  __type?: "DecisionTask";
  /**
   * <p>A paginated list of history events of the workflow execution. The decider uses this during the processing of the decision task.</p>
   */
  events: HistoryEvent[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;

  /**
   * <p>The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was processed by the decider. This can be used to determine the events in the history new since the last decision task received by the decider.</p>
   */
  previousStartedEventId?: number;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded in the history.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.</p>
   */
  taskToken: string | undefined;

  /**
   * <p>The workflow execution for which this decision task was created.</p>
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * <p>The type of the workflow execution for which this decision task was created.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace DecisionTask {
  export const filterSensitiveLog = (obj: DecisionTask): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecisionTask => __isa(o, "DecisionTask");
}

/**
 * <p>Provides the details of the <code>DecisionTaskCompleted</code> event.</p>
 */
export interface DecisionTaskCompletedEventAttributes {
  __type?: "DecisionTaskCompletedEventAttributes";
  /**
   * <p>User defined context for the workflow execution.</p>
   */
  executionContext?: string;

  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded when this decision task was started.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;
}

export namespace DecisionTaskCompletedEventAttributes {
  export const filterSensitiveLog = (
    obj: DecisionTaskCompletedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecisionTaskCompletedEventAttributes =>
    __isa(o, "DecisionTaskCompletedEventAttributes");
}

/**
 * <p>Provides details about the <code>DecisionTaskScheduled</code> event.</p>
 */
export interface DecisionTaskScheduledEventAttributes {
  __type?: "DecisionTaskScheduledEventAttributes";
  /**
   * <p>The maximum duration for this decision task. The task is considered timed out if it doesn't completed within this duration.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  startToCloseTimeout?: string;

  /**
   * <p>The name of the task list in which the decision task was scheduled.</p>
   */
  taskList: TaskList | undefined;

  /**
   * <p>
   *          A task priority that, if set, specifies the priority for this decision task.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;
}

export namespace DecisionTaskScheduledEventAttributes {
  export const filterSensitiveLog = (
    obj: DecisionTaskScheduledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecisionTaskScheduledEventAttributes =>
    __isa(o, "DecisionTaskScheduledEventAttributes");
}

/**
 * <p>Provides the details of the <code>DecisionTaskStarted</code> event.</p>
 */
export interface DecisionTaskStartedEventAttributes {
  __type?: "DecisionTaskStartedEventAttributes";
  /**
   * <p>Identity of the decider making the request. This enables diagnostic tracing when problems arise. The form of this identity is user defined.</p>
   */
  identity?: string;

  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;
}

export namespace DecisionTaskStartedEventAttributes {
  export const filterSensitiveLog = (
    obj: DecisionTaskStartedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecisionTaskStartedEventAttributes =>
    __isa(o, "DecisionTaskStartedEventAttributes");
}

/**
 * <p>Provides the details of the <code>DecisionTaskTimedOut</code> event.</p>
 */
export interface DecisionTaskTimedOutEventAttributes {
  __type?: "DecisionTaskTimedOutEventAttributes";
  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded when this decision task was started. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The type of timeout that expired before the decision task could be completed.</p>
   */
  timeoutType: DecisionTaskTimeoutType | string | undefined;
}

export namespace DecisionTaskTimedOutEventAttributes {
  export const filterSensitiveLog = (
    obj: DecisionTaskTimedOutEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecisionTaskTimedOutEventAttributes =>
    __isa(o, "DecisionTaskTimedOutEventAttributes");
}

export type DecisionTaskTimeoutType = "START_TO_CLOSE";

export type DecisionType =
  | "CancelTimer"
  | "CancelWorkflowExecution"
  | "CompleteWorkflowExecution"
  | "ContinueAsNewWorkflowExecution"
  | "FailWorkflowExecution"
  | "RecordMarker"
  | "RequestCancelActivityTask"
  | "RequestCancelExternalWorkflowExecution"
  | "ScheduleActivityTask"
  | "ScheduleLambdaFunction"
  | "SignalExternalWorkflowExecution"
  | "StartChildWorkflowExecution"
  | "StartTimer";

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
 */
export interface DefaultUndefinedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DefaultUndefinedFault";
  $fault: "client";
  message?: string;
}

export namespace DefaultUndefinedFault {
  export const filterSensitiveLog = (obj: DefaultUndefinedFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefaultUndefinedFault =>
    __isa(o, "DefaultUndefinedFault");
}

export interface DeprecateActivityTypeInput {
  __type?: "DeprecateActivityTypeInput";
  /**
   * <p>The activity type to deprecate.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The name of the domain in which the activity type is registered.</p>
   */
  domain: string | undefined;
}

export namespace DeprecateActivityTypeInput {
  export const filterSensitiveLog = (obj: DeprecateActivityTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeprecateActivityTypeInput =>
    __isa(o, "DeprecateActivityTypeInput");
}

export interface DeprecateDomainInput {
  __type?: "DeprecateDomainInput";
  /**
   * <p>The name of the domain to deprecate.</p>
   */
  name: string | undefined;
}

export namespace DeprecateDomainInput {
  export const filterSensitiveLog = (obj: DeprecateDomainInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeprecateDomainInput =>
    __isa(o, "DeprecateDomainInput");
}

export interface DeprecateWorkflowTypeInput {
  __type?: "DeprecateWorkflowTypeInput";
  /**
   * <p>The name of the domain in which the workflow type is registered.</p>
   */
  domain: string | undefined;

  /**
   * <p>The workflow type to deprecate.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace DeprecateWorkflowTypeInput {
  export const filterSensitiveLog = (obj: DeprecateWorkflowTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeprecateWorkflowTypeInput =>
    __isa(o, "DeprecateWorkflowTypeInput");
}

export interface DescribeActivityTypeInput {
  __type?: "DescribeActivityTypeInput";
  /**
   * <p>The activity type to get information about. Activity types are identified by the
   *         <code>name</code> and <code>version</code> that were supplied when the activity was
   *       registered.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The name of the domain in which the activity type is registered.</p>
   */
  domain: string | undefined;
}

export namespace DescribeActivityTypeInput {
  export const filterSensitiveLog = (obj: DescribeActivityTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeActivityTypeInput =>
    __isa(o, "DescribeActivityTypeInput");
}

export interface DescribeDomainInput {
  __type?: "DescribeDomainInput";
  /**
   * <p>The name of the domain to describe.</p>
   */
  name: string | undefined;
}

export namespace DescribeDomainInput {
  export const filterSensitiveLog = (obj: DescribeDomainInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainInput =>
    __isa(o, "DescribeDomainInput");
}

export interface DescribeWorkflowExecutionInput {
  __type?: "DescribeWorkflowExecutionInput";
  /**
   * <p>The name of the domain containing the workflow execution.</p>
   */
  domain: string | undefined;

  /**
   * <p>The workflow execution to describe.</p>
   */
  execution: WorkflowExecution | undefined;
}

export namespace DescribeWorkflowExecutionInput {
  export const filterSensitiveLog = (
    obj: DescribeWorkflowExecutionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkflowExecutionInput =>
    __isa(o, "DescribeWorkflowExecutionInput");
}

export interface DescribeWorkflowTypeInput {
  __type?: "DescribeWorkflowTypeInput";
  /**
   * <p>The name of the domain in which this workflow type is registered.</p>
   */
  domain: string | undefined;

  /**
   * <p>The workflow type to describe.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace DescribeWorkflowTypeInput {
  export const filterSensitiveLog = (obj: DescribeWorkflowTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkflowTypeInput =>
    __isa(o, "DescribeWorkflowTypeInput");
}

/**
 * <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
 */
export interface DomainAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DomainAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace DomainAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DomainAlreadyExistsFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainAlreadyExistsFault =>
    __isa(o, "DomainAlreadyExistsFault");
}

/**
 * <p>Contains the configuration settings of a domain.</p>
 */
export interface DomainConfiguration {
  __type?: "DomainConfiguration";
  /**
   * <p>The retention period for workflow executions in this domain.</p>
   */
  workflowExecutionRetentionPeriodInDays: string | undefined;
}

export namespace DomainConfiguration {
  export const filterSensitiveLog = (obj: DomainConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainConfiguration =>
    __isa(o, "DomainConfiguration");
}

/**
 * <p>Returned when the specified domain has been deprecated.</p>
 */
export interface DomainDeprecatedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DomainDeprecatedFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace DomainDeprecatedFault {
  export const filterSensitiveLog = (obj: DomainDeprecatedFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainDeprecatedFault =>
    __isa(o, "DomainDeprecatedFault");
}

/**
 * <p>Contains details of a domain.</p>
 */
export interface DomainDetail {
  __type?: "DomainDetail";
  /**
   * <p>The domain configuration. Currently, this includes only the domain's retention
   *       period.</p>
   */
  configuration: DomainConfiguration | undefined;

  /**
   * <p>The basic information about a domain, such as its name, status, and
   *       description.</p>
   */
  domainInfo: DomainInfo | undefined;
}

export namespace DomainDetail {
  export const filterSensitiveLog = (obj: DomainDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainDetail => __isa(o, "DomainDetail");
}

/**
 * <p>Contains general information about a domain.</p>
 */
export interface DomainInfo {
  __type?: "DomainInfo";
  /**
   * <p>The ARN of the domain.</p>
   */
  arn?: string;

  /**
   * <p>The description of the domain provided through <a>RegisterDomain</a>.</p>
   */
  description?: string;

  /**
   * <p>The name of the domain. This name is unique within the account.</p>
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
   */
  status: RegistrationStatus | string | undefined;
}

export namespace DomainInfo {
  export const filterSensitiveLog = (obj: DomainInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainInfo => __isa(o, "DomainInfo");
}

/**
 * <p>Contains a paginated collection of DomainInfo structures.</p>
 */
export interface DomainInfos {
  __type?: "DomainInfos";
  /**
   * <p>A list of DomainInfo structures.</p>
   */
  domainInfos: DomainInfo[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;
}

export namespace DomainInfos {
  export const filterSensitiveLog = (obj: DomainInfos): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainInfos => __isa(o, "DomainInfos");
}

export type EventType =
  | "ActivityTaskCancelRequested"
  | "ActivityTaskCanceled"
  | "ActivityTaskCompleted"
  | "ActivityTaskFailed"
  | "ActivityTaskScheduled"
  | "ActivityTaskStarted"
  | "ActivityTaskTimedOut"
  | "CancelTimerFailed"
  | "CancelWorkflowExecutionFailed"
  | "ChildWorkflowExecutionCanceled"
  | "ChildWorkflowExecutionCompleted"
  | "ChildWorkflowExecutionFailed"
  | "ChildWorkflowExecutionStarted"
  | "ChildWorkflowExecutionTerminated"
  | "ChildWorkflowExecutionTimedOut"
  | "CompleteWorkflowExecutionFailed"
  | "ContinueAsNewWorkflowExecutionFailed"
  | "DecisionTaskCompleted"
  | "DecisionTaskScheduled"
  | "DecisionTaskStarted"
  | "DecisionTaskTimedOut"
  | "ExternalWorkflowExecutionCancelRequested"
  | "ExternalWorkflowExecutionSignaled"
  | "FailWorkflowExecutionFailed"
  | "LambdaFunctionCompleted"
  | "LambdaFunctionFailed"
  | "LambdaFunctionScheduled"
  | "LambdaFunctionStarted"
  | "LambdaFunctionTimedOut"
  | "MarkerRecorded"
  | "RecordMarkerFailed"
  | "RequestCancelActivityTaskFailed"
  | "RequestCancelExternalWorkflowExecutionFailed"
  | "RequestCancelExternalWorkflowExecutionInitiated"
  | "ScheduleActivityTaskFailed"
  | "ScheduleLambdaFunctionFailed"
  | "SignalExternalWorkflowExecutionFailed"
  | "SignalExternalWorkflowExecutionInitiated"
  | "StartChildWorkflowExecutionFailed"
  | "StartChildWorkflowExecutionInitiated"
  | "StartLambdaFunctionFailed"
  | "StartTimerFailed"
  | "TimerCanceled"
  | "TimerFired"
  | "TimerStarted"
  | "WorkflowExecutionCancelRequested"
  | "WorkflowExecutionCanceled"
  | "WorkflowExecutionCompleted"
  | "WorkflowExecutionContinuedAsNew"
  | "WorkflowExecutionFailed"
  | "WorkflowExecutionSignaled"
  | "WorkflowExecutionStarted"
  | "WorkflowExecutionTerminated"
  | "WorkflowExecutionTimedOut";

export type ExecutionStatus = "CLOSED" | "OPEN";

/**
 * <p>Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if
 *       specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example:
 *       <code>"oldestDate": 1325376070.</code>
 *          </p>
 */
export interface ExecutionTimeFilter {
  __type?: "ExecutionTimeFilter";
  /**
   * <p>Specifies the latest start or close date and time to return.</p>
   */
  latestDate?: Date;

  /**
   * <p>Specifies the oldest start or close date and time to return.</p>
   */
  oldestDate: Date | undefined;
}

export namespace ExecutionTimeFilter {
  export const filterSensitiveLog = (obj: ExecutionTimeFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExecutionTimeFilter =>
    __isa(o, "ExecutionTimeFilter");
}

/**
 * <p>Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.</p>
 */
export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
  __type?: "ExternalWorkflowExecutionCancelRequestedEventAttributes";
  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this external workflow execution. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The external workflow execution to which the cancellation request was delivered.</p>
   */
  workflowExecution: WorkflowExecution | undefined;
}

export namespace ExternalWorkflowExecutionCancelRequestedEventAttributes {
  export const filterSensitiveLog = (
    obj: ExternalWorkflowExecutionCancelRequestedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ExternalWorkflowExecutionCancelRequestedEventAttributes =>
    __isa(o, "ExternalWorkflowExecutionCancelRequestedEventAttributes");
}

/**
 * <p>Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.</p>
 */
export interface ExternalWorkflowExecutionSignaledEventAttributes {
  __type?: "ExternalWorkflowExecutionSignaledEventAttributes";
  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>SignalExternalWorkflowExecution</code> decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The external workflow execution that the signal was delivered to.</p>
   */
  workflowExecution: WorkflowExecution | undefined;
}

export namespace ExternalWorkflowExecutionSignaledEventAttributes {
  export const filterSensitiveLog = (
    obj: ExternalWorkflowExecutionSignaledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ExternalWorkflowExecutionSignaledEventAttributes =>
    __isa(o, "ExternalWorkflowExecutionSignaledEventAttributes");
}

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
 */
export interface FailWorkflowExecutionDecisionAttributes {
  __type?: "FailWorkflowExecutionDecisionAttributes";
  /**
   * <p>
   *          Details of the failure.</p>
   */
  details?: string;

  /**
   * <p>A descriptive reason for the failure that may help in diagnostics.</p>
   */
  reason?: string;
}

export namespace FailWorkflowExecutionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: FailWorkflowExecutionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailWorkflowExecutionDecisionAttributes =>
    __isa(o, "FailWorkflowExecutionDecisionAttributes");
}

export type FailWorkflowExecutionFailedCause =
  | "OPERATION_NOT_PERMITTED"
  | "UNHANDLED_DECISION";

/**
 * <p>Provides the details of the <code>FailWorkflowExecutionFailed</code> event.</p>
 */
export interface FailWorkflowExecutionFailedEventAttributes {
  __type?: "FailWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: FailWorkflowExecutionFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>FailWorkflowExecution</code> decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;
}

export namespace FailWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: FailWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is FailWorkflowExecutionFailedEventAttributes =>
    __isa(o, "FailWorkflowExecutionFailedEventAttributes");
}

export interface GetWorkflowExecutionHistoryInput {
  __type?: "GetWorkflowExecutionHistoryInput";
  /**
   * <p>The name of the domain containing the workflow execution.</p>
   */
  domain: string | undefined;

  /**
   * <p>Specifies the workflow execution for which to return the history.</p>
   */
  execution: WorkflowExecution | undefined;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>When set to <code>true</code>, returns the events in reverse order. By default the
   *       results are returned in ascending order of the <code>eventTimeStamp</code> of the
   *       events.</p>
   */
  reverseOrder?: boolean;
}

export namespace GetWorkflowExecutionHistoryInput {
  export const filterSensitiveLog = (
    obj: GetWorkflowExecutionHistoryInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowExecutionHistoryInput =>
    __isa(o, "GetWorkflowExecutionHistoryInput");
}

/**
 * <p>Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.</p>
 */
export interface History {
  __type?: "History";
  /**
   * <p>The list of history events.</p>
   */
  events: HistoryEvent[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;
}

export namespace History {
  export const filterSensitiveLog = (obj: History): any => ({
    ...obj
  });
  export const isa = (o: any): o is History => __isa(o, "History");
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
 */
export interface HistoryEvent {
  __type?: "HistoryEvent";
  /**
   * <p>If the event is of type <code>ActivityTaskcancelRequested</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskCanceled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskCompleted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskScheduled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;

  /**
   * <p>If the event is of type <code>ActivityTaskTimedOut</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;

  /**
   * <p>If the event is of type <code>CancelTimerFailed</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   */
  cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;

  /**
   * <p>If the event is of type <code>CancelWorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionCanceled</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionCompleted</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionTerminated</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;

  /**
   * <p>If the event is of type <code>ChildWorkflowExecutionTimedOut</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;

  /**
   * <p>If the event is of type <code>CompleteWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>ContinueAsNewWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskCompleted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskScheduled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskTimedOut</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;

  /**
   * <p>The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.</p>
   */
  eventId: number | undefined;

  /**
   * <p>The date and time when the event occurred.</p>
   */
  eventTimestamp: Date | undefined;

  /**
   * <p>The type of the history event.</p>
   */
  eventType: EventType | string | undefined;

  /**
   * <p>If the event is of type <code>ExternalWorkflowExecutionCancelRequested</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types. </p>
   */
  externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;

  /**
   * <p>If the event is of type <code>ExternalWorkflowExecutionSignaled</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;

  /**
   * <p>If the event is of type <code>FailWorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set
   *       for other event types.</p>
   */
  lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for
   *       other event types.</p>
   */
  lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set
   *       for other event types.</p>
   */
  lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for
   *       other event types.</p>
   */
  lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;

  /**
   * <p>Provides the details of the <code>LambdaFunctionTimedOut</code> event. It isn't set for
   *       other event types.</p>
   */
  lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;

  /**
   * <p>If the event is of type <code>MarkerRecorded</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   */
  markerRecordedEventAttributes?: MarkerRecordedEventAttributes;

  /**
   * <p>If the event is of type <code>DecisionTaskFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;

  /**
   * <p>If the event is of type <code>RequestCancelActivityTaskFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;

  /**
   * <p>If the event is of type <code>RequestCancelExternalWorkflowExecutionFailed</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types.</p>
   */
  requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>RequestCancelExternalWorkflowExecutionInitiated</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types.</p>
   */
  requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * <p>If the event is of type <code>ScheduleActivityTaskFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;

  /**
   * <p>Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't
   *       set for other event types.</p>
   */
  scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>SignalExternalWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>SignalExternalWorkflowExecutionInitiated</code> then this member is set and
   *       provides detailed information about the event. It isn't set for other event types.</p>
   */
  signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * <p>If the event is of type <code>StartChildWorkflowExecutionFailed</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>StartChildWorkflowExecutionInitiated</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;

  /**
   * <p>Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set
   *       for other event types.</p>
   */
  startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>StartTimerFailed</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   */
  startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;

  /**
   * <p>If the event is of type <code>TimerCanceled</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   */
  timerCanceledEventAttributes?: TimerCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>TimerFired</code> then this member is set and provides detailed information about
   *       the event. It isn't set for other event types.</p>
   */
  timerFiredEventAttributes?: TimerFiredEventAttributes;

  /**
   * <p>If the event is of type <code>TimerStarted</code> then this member is set and provides detailed information
   *       about the event. It isn't set for other event types.</p>
   */
  timerStartedEventAttributes?: TimerStartedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionCancelRequested</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionCanceled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionCompleted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionContinuedAsNew</code> then this member is set and provides
   *       detailed information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionFailed</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionSignaled</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionStarted</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionTerminated</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;

  /**
   * <p>If the event is of type <code>WorkflowExecutionTimedOut</code> then this member is set and provides detailed
   *       information about the event. It isn't set for other event types.</p>
   */
  workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
}

export namespace HistoryEvent {
  export const filterSensitiveLog = (obj: HistoryEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is HistoryEvent => __isa(o, "HistoryEvent");
}

/**
 * <p>Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set
 *       for other event types.</p>
 */
export interface LambdaFunctionCompletedEventAttributes {
  __type?: "LambdaFunctionCompletedEventAttributes";
  /**
   * <p>The results of the Lambda task.</p>
   */
  result?: string;

  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       Lambda task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task
   *       started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  startedEventId: number | undefined;
}

export namespace LambdaFunctionCompletedEventAttributes {
  export const filterSensitiveLog = (
    obj: LambdaFunctionCompletedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaFunctionCompletedEventAttributes =>
    __isa(o, "LambdaFunctionCompletedEventAttributes");
}

/**
 * <p>Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for
 *       other event types.</p>
 */
export interface LambdaFunctionFailedEventAttributes {
  __type?: "LambdaFunctionFailedEventAttributes";
  /**
   * <p>The details of the failure.</p>
   */
  details?: string;

  /**
   * <p>The reason provided for the failure.</p>
   */
  reason?: string;

  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task
   *       started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  startedEventId: number | undefined;
}

export namespace LambdaFunctionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: LambdaFunctionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaFunctionFailedEventAttributes =>
    __isa(o, "LambdaFunctionFailedEventAttributes");
}

/**
 * <p>Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set
 *       for other event types.</p>
 */
export interface LambdaFunctionScheduledEventAttributes {
  __type?: "LambdaFunctionScheduledEventAttributes";
  /**
   * <p>Data attached to the event that the decider can use in subsequent workflow tasks. This
   *       data isn't sent to the Lambda task.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision
   *       that resulted in scheduling this activity task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The unique ID of the Lambda task.</p>
   */
  id: string | undefined;

  /**
   * <p>The input provided to the Lambda task.</p>
   */
  input?: string;

  /**
   * <p>The name of the Lambda function.</p>
   */
  name: string | undefined;

  /**
   * <p>The maximum amount of time a worker can take to process the Lambda task.</p>
   */
  startToCloseTimeout?: string;
}

export namespace LambdaFunctionScheduledEventAttributes {
  export const filterSensitiveLog = (
    obj: LambdaFunctionScheduledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaFunctionScheduledEventAttributes =>
    __isa(o, "LambdaFunctionScheduledEventAttributes");
}

/**
 * <p>Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for
 *       other event types.</p>
 */
export interface LambdaFunctionStartedEventAttributes {
  __type?: "LambdaFunctionStartedEventAttributes";
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;
}

export namespace LambdaFunctionStartedEventAttributes {
  export const filterSensitiveLog = (
    obj: LambdaFunctionStartedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaFunctionStartedEventAttributes =>
    __isa(o, "LambdaFunctionStartedEventAttributes");
}

/**
 * <p>Provides details of the <code>LambdaFunctionTimedOut</code> event.</p>
 */
export interface LambdaFunctionTimedOutEventAttributes {
  __type?: "LambdaFunctionTimedOutEventAttributes";
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number | undefined;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event that was recorded when this
   *       activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The type of the timeout that caused this event.</p>
   */
  timeoutType?: LambdaFunctionTimeoutType | string;
}

export namespace LambdaFunctionTimedOutEventAttributes {
  export const filterSensitiveLog = (
    obj: LambdaFunctionTimedOutEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaFunctionTimedOutEventAttributes =>
    __isa(o, "LambdaFunctionTimedOutEventAttributes");
}

export type LambdaFunctionTimeoutType = "START_TO_CLOSE";

/**
 * <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 */
export interface LimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "LimitExceededFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace LimitExceededFault {
  export const filterSensitiveLog = (obj: LimitExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededFault =>
    __isa(o, "LimitExceededFault");
}

export interface ListActivityTypesInput {
  __type?: "ListActivityTypesInput";
  /**
   * <p>The name of the domain in which the activity types have been registered.</p>
   */
  domain: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>If specified, only lists the activity types that have this name.</p>
   */
  name?: string;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>Specifies the registration status of the activity types to list.</p>
   */
  registrationStatus: RegistrationStatus | string | undefined;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default, the
   *       results are returned in ascending alphabetical order by <code>name</code> of the activity
   *       types.</p>
   */
  reverseOrder?: boolean;
}

export namespace ListActivityTypesInput {
  export const filterSensitiveLog = (obj: ListActivityTypesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListActivityTypesInput =>
    __isa(o, "ListActivityTypesInput");
}

export interface ListClosedWorkflowExecutionsInput {
  __type?: "ListClosedWorkflowExecutionsInput";
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
   */
  closeStatusFilter?: CloseStatusFilter;

  /**
   * <p>If specified, the workflow executions are included in the returned results based on
   *       whether their close times are within the range specified by this filter. Also, if this
   *       parameter is specified, the returned results are ordered by their close times.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   */
  closeTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>The name of the domain that contains the workflow executions to list.</p>
   */
  domain: string | undefined;

  /**
   * <p>If specified, only workflow executions matching the workflow ID specified in the filter
   *       are returned.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   */
  executionFilter?: WorkflowExecutionFilter;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default the
   *       results are returned in descending order of the start or the close time of the
   *       executions.</p>
   */
  reverseOrder?: boolean;

  /**
   * <p>If specified, the workflow executions are included in the returned results based on
   *       whether their start times are within the range specified by this filter. Also, if this
   *       parameter is specified, the returned results are ordered by their start times.</p>
   *          <note>
   *             <p>
   *                <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You
   *         must specify one of these in a request but not both.</p>
   *          </note>
   */
  startTimeFilter?: ExecutionTimeFilter;

  /**
   * <p>If specified, only executions that have the matching tag are listed.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   */
  tagFilter?: TagFilter;

  /**
   * <p>If specified, only executions of the type specified in the filter are
   *       returned.</p>
   *          <note>
   *             <p>
   *                <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and
   *           <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a
   *         request.</p>
   *          </note>
   */
  typeFilter?: WorkflowTypeFilter;
}

export namespace ListClosedWorkflowExecutionsInput {
  export const filterSensitiveLog = (
    obj: ListClosedWorkflowExecutionsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListClosedWorkflowExecutionsInput =>
    __isa(o, "ListClosedWorkflowExecutionsInput");
}

export interface ListDomainsInput {
  __type?: "ListDomainsInput";
  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>Specifies the registration status of the domains to list.</p>
   */
  registrationStatus: RegistrationStatus | string | undefined;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default, the
   *       results are returned in ascending alphabetical order by <code>name</code> of the
   *       domains.</p>
   */
  reverseOrder?: boolean;
}

export namespace ListDomainsInput {
  export const filterSensitiveLog = (obj: ListDomainsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainsInput =>
    __isa(o, "ListDomainsInput");
}

export interface ListOpenWorkflowExecutionsInput {
  __type?: "ListOpenWorkflowExecutionsInput";
  /**
   * <p>The name of the domain that contains the workflow executions to list.</p>
   */
  domain: string | undefined;

  /**
   * <p>If specified, only workflow executions matching the workflow ID specified in the filter
   *       are returned.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   */
  executionFilter?: WorkflowExecutionFilter;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default the
   *       results are returned in descending order of the start time of the executions.</p>
   */
  reverseOrder?: boolean;

  /**
   * <p>Workflow executions are included in the returned results based on whether their start
   *       times are within the range specified by this filter.</p>
   */
  startTimeFilter: ExecutionTimeFilter | undefined;

  /**
   * <p>If specified, only executions that have the matching tag are listed.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   */
  tagFilter?: TagFilter;

  /**
   * <p>If specified, only executions of the type specified in the filter are
   *       returned.</p>
   *          <note>
   *             <p>
   *                <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are
   *         mutually exclusive. You can specify at most one of these in a request.</p>
   *          </note>
   */
  typeFilter?: WorkflowTypeFilter;
}

export namespace ListOpenWorkflowExecutionsInput {
  export const filterSensitiveLog = (
    obj: ListOpenWorkflowExecutionsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOpenWorkflowExecutionsInput =>
    __isa(o, "ListOpenWorkflowExecutionsInput");
}

export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon SWF domain.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceInput =>
    __isa(o, "ListTagsForResourceInput");
}

export interface ListTagsForResourceOutput {
  __type?: "ListTagsForResourceOutput";
  /**
   * <p>An array of tags associated with the domain.</p>
   */
  tags?: ResourceTag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceOutput =>
    __isa(o, "ListTagsForResourceOutput");
}

export interface ListWorkflowTypesInput {
  __type?: "ListWorkflowTypesInput";
  /**
   * <p>The name of the domain in which the workflow types have been registered.</p>
   */
  domain: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>If specified, lists the workflow type with this name.</p>
   */
  name?: string;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>Specifies the registration status of the workflow types to list.</p>
   */
  registrationStatus: RegistrationStatus | string | undefined;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default the
   *       results are returned in ascending alphabetical order of the <code>name</code> of the workflow
   *       types.</p>
   */
  reverseOrder?: boolean;
}

export namespace ListWorkflowTypesInput {
  export const filterSensitiveLog = (obj: ListWorkflowTypesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkflowTypesInput =>
    __isa(o, "ListWorkflowTypesInput");
}

/**
 * <p>Provides the details of the <code>MarkerRecorded</code> event.</p>
 */
export interface MarkerRecordedEventAttributes {
  __type?: "MarkerRecordedEventAttributes";
  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RecordMarker</code> decision that requested this marker. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The details of the marker.</p>
   */
  details?: string;

  /**
   * <p>The name of the marker.</p>
   */
  markerName: string | undefined;
}

export namespace MarkerRecordedEventAttributes {
  export const filterSensitiveLog = (
    obj: MarkerRecordedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MarkerRecordedEventAttributes =>
    __isa(o, "MarkerRecordedEventAttributes");
}

/**
 * <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 */
export interface OperationNotPermittedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationNotPermittedFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace OperationNotPermittedFault {
  export const filterSensitiveLog = (obj: OperationNotPermittedFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationNotPermittedFault =>
    __isa(o, "OperationNotPermittedFault");
}

/**
 * <p>Contains the count of tasks in a task list.</p>
 */
export interface PendingTaskCount {
  __type?: "PendingTaskCount";
  /**
   * <p>The number of tasks in the task list.</p>
   */
  count: number | undefined;

  /**
   * <p>If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.</p>
   */
  truncated?: boolean;
}

export namespace PendingTaskCount {
  export const filterSensitiveLog = (obj: PendingTaskCount): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingTaskCount =>
    __isa(o, "PendingTaskCount");
}

export interface PollForActivityTaskInput {
  __type?: "PollForActivityTaskInput";
  /**
   * <p>The name of the domain that contains the task lists being polled.</p>
   */
  domain: string | undefined;

  /**
   * <p>Identity of the worker making the request, recorded in the
   *         <code>ActivityTaskStarted</code> event in the workflow history. This enables diagnostic
   *       tracing when problems arise. The form of this identity is user defined.</p>
   */
  identity?: string;

  /**
   * <p>Specifies the task list to poll for activity tasks.</p>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  taskList: TaskList | undefined;
}

export namespace PollForActivityTaskInput {
  export const filterSensitiveLog = (obj: PollForActivityTaskInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PollForActivityTaskInput =>
    __isa(o, "PollForActivityTaskInput");
}

export interface PollForDecisionTaskInput {
  __type?: "PollForDecisionTaskInput";
  /**
   * <p>The name of the domain containing the task lists to poll.</p>
   */
  domain: string | undefined;

  /**
   * <p>Identity of the decider making the request, which is recorded in the
   *       DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when
   *       problems arise. The form of this identity is user defined.</p>
   */
  identity?: string;

  /**
   * <p>The maximum number of results that are returned per call.
   *   Use <code>nextPageToken</code> to obtain further pages of results. </p>
   *          <p>This
   *       is an upper limit only; the actual number of results returned per call may be fewer than the
   *       specified maximum.</p>
   */
  maximumPageSize?: number;

  /**
   * <p>If <code>NextPageToken</code> is returned there are more results
   *       available.  The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using
   *       the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires
   *       after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has
   *       exceeded its maximum lifetime</code>". </p>
   *
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned
   *       in a single call. </p>
   *          <note>
   *             <p>The <code>nextPageToken</code> returned by this action cannot be used with <a>GetWorkflowExecutionHistory</a> to get the next page. You must call <a>PollForDecisionTask</a> again (with the <code>nextPageToken</code>) to retrieve
   *         the next page of history records. Calling <a>PollForDecisionTask</a> with a
   *           <code>nextPageToken</code> doesn't return a new decision task.</p>
   *          </note>
   */
  nextPageToken?: string;

  /**
   * <p>When set to <code>true</code>, returns the events in reverse order. By default the
   *       results are returned in ascending order of the <code>eventTimestamp</code> of the
   *       events.</p>
   */
  reverseOrder?: boolean;

  /**
   * <p>Specifies the task list to poll for decision tasks.</p>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  taskList: TaskList | undefined;
}

export namespace PollForDecisionTaskInput {
  export const filterSensitiveLog = (obj: PollForDecisionTaskInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PollForDecisionTaskInput =>
    __isa(o, "PollForDecisionTaskInput");
}

export interface RecordActivityTaskHeartbeatInput {
  __type?: "RecordActivityTaskHeartbeatInput";
  /**
   * <p>If specified, contains details about the progress of the task.</p>
   */
  details?: string;

  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results. </p>
   *          </important>
   */
  taskToken: string | undefined;
}

export namespace RecordActivityTaskHeartbeatInput {
  export const filterSensitiveLog = (
    obj: RecordActivityTaskHeartbeatInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordActivityTaskHeartbeatInput =>
    __isa(o, "RecordActivityTaskHeartbeatInput");
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
 */
export interface RecordMarkerDecisionAttributes {
  __type?: "RecordMarkerDecisionAttributes";
  /**
   * <p>
   *          The details of the marker.</p>
   */
  details?: string;

  /**
   * <p>
   *          The name of the marker.</p>
   */
  markerName: string | undefined;
}

export namespace RecordMarkerDecisionAttributes {
  export const filterSensitiveLog = (
    obj: RecordMarkerDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordMarkerDecisionAttributes =>
    __isa(o, "RecordMarkerDecisionAttributes");
}

export type RecordMarkerFailedCause = "OPERATION_NOT_PERMITTED";

/**
 * <p>Provides the details of the <code>RecordMarkerFailed</code> event.</p>
 */
export interface RecordMarkerFailedEventAttributes {
  __type?: "RecordMarkerFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: RecordMarkerFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RecordMarkerFailed</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The marker's name.</p>
   */
  markerName: string | undefined;
}

export namespace RecordMarkerFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: RecordMarkerFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordMarkerFailedEventAttributes =>
    __isa(o, "RecordMarkerFailedEventAttributes");
}

export interface RegisterActivityTypeInput {
  __type?: "RegisterActivityTypeInput";
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
   */
  defaultTaskHeartbeatTimeout?: string;

  /**
   * <p>If set, specifies the default task list to use for scheduling tasks of this activity
   *       type. This default task list is used if a task list isn't provided when a task is scheduled
   *       through the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
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
   */
  defaultTaskPriority?: string;

  /**
   * <p>If set, specifies the default maximum duration for a task of this activity type. This
   *       default can be overridden when scheduling an activity task using the
   *         <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskScheduleToCloseTimeout?: string;

  /**
   * <p>If set, specifies the default maximum duration that a task of this activity type can
   *       wait before being assigned to a worker. This default can be overridden when scheduling an
   *       activity task using the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskScheduleToStartTimeout?: string;

  /**
   * <p>If set, specifies the default maximum duration that a worker can take to process tasks
   *       of this activity type. This default can be overridden when scheduling an activity task using
   *       the <code>ScheduleActivityTask</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskStartToCloseTimeout?: string;

  /**
   * <p>A textual description of the activity type.</p>
   */
  description?: string;

  /**
   * <p>The name of the domain in which this activity is to be registered.</p>
   */
  domain: string | undefined;

  /**
   * <p>The name of the activity type within the domain.</p>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the activity type.</p>
   *          <note>
   *             <p>The activity type consists of the name and version, the combination of which must be
   *         unique within the domain.</p>
   *          </note>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  version: string | undefined;
}

export namespace RegisterActivityTypeInput {
  export const filterSensitiveLog = (obj: RegisterActivityTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterActivityTypeInput =>
    __isa(o, "RegisterActivityTypeInput");
}

export interface RegisterDomainInput {
  __type?: "RegisterDomainInput";
  /**
   * <p>A text description of the domain.</p>
   */
  description?: string;

  /**
   * <p>Name of the domain to register. The name must be unique in the region that the domain
   *       is registered in.</p>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>Tags to be added when registering a domain.</p>
   *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
   */
  tags?: ResourceTag[];

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
   */
  workflowExecutionRetentionPeriodInDays: string | undefined;
}

export namespace RegisterDomainInput {
  export const filterSensitiveLog = (obj: RegisterDomainInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterDomainInput =>
    __isa(o, "RegisterDomainInput");
}

export interface RegisterWorkflowTypeInput {
  __type?: "RegisterWorkflowTypeInput";
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
   */
  defaultChildPolicy?: ChildPolicy | string;

  /**
   * <p>If set, specifies the default maximum duration for executions of this workflow type.
   *       You can override this default when starting an execution through the <a>StartWorkflowExecution</a> Action or <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *
   *          <p>The duration is specified in seconds; an integer greater than or equal to 0. Unlike
   *       some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for
   *         <code>defaultExecutionStartToCloseTimeout</code>; there is a one-year max limit on the time
   *       that a workflow execution can run. Exceeding this limit always causes the workflow execution
   *       to time out.</p>
   */
  defaultExecutionStartToCloseTimeout?: string;

  /**
   * <p>The default IAM role attached to this workflow type.</p>
   *          <note>
   *             <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you
   *         don't specify an IAM role when you start this workflow type, the default Lambda role is
   *         attached to the execution. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  defaultLambdaRole?: string;

  /**
   * <p>If set, specifies the default task list to use for scheduling decision tasks for
   *       executions of this workflow type. This default is used only if a task list isn't provided when
   *       starting the execution through the <a>StartWorkflowExecution</a> Action or
   *         <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   */
  defaultTaskList?: TaskList;

  /**
   * <p>The default task priority to assign to the workflow type. If not assigned, then
   *         <code>0</code> is used. Valid values are integers that range from Java's
   *         <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647).
   *       Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task
   *         Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  defaultTaskPriority?: string;

  /**
   * <p>If set, specifies the default maximum duration of decision tasks for this workflow
   *       type. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to
   *         <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskStartToCloseTimeout?: string;

  /**
   * <p>Textual description of the workflow type.</p>
   */
  description?: string;

  /**
   * <p>The name of the domain in which to register the workflow type.</p>
   */
  domain: string | undefined;

  /**
   * <p>The name of the workflow type.</p>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the workflow type.</p>
   *          <note>
   *             <p>The workflow type consists of the name and version, the combination of which must be
   *         unique within the domain. To get a list of all currently registered workflow types, use the
   *           <a>ListWorkflowTypes</a> action.</p>
   *          </note>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  version: string | undefined;
}

export namespace RegisterWorkflowTypeInput {
  export const filterSensitiveLog = (obj: RegisterWorkflowTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterWorkflowTypeInput =>
    __isa(o, "RegisterWorkflowTypeInput");
}

export type RegistrationStatus = "DEPRECATED" | "REGISTERED";

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
 */
export interface RequestCancelActivityTaskDecisionAttributes {
  __type?: "RequestCancelActivityTaskDecisionAttributes";
  /**
   * <p>The <code>activityId</code> of the activity task to be canceled.</p>
   */
  activityId: string | undefined;
}

export namespace RequestCancelActivityTaskDecisionAttributes {
  export const filterSensitiveLog = (
    obj: RequestCancelActivityTaskDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RequestCancelActivityTaskDecisionAttributes =>
    __isa(o, "RequestCancelActivityTaskDecisionAttributes");
}

export type RequestCancelActivityTaskFailedCause =
  | "ACTIVITY_ID_UNKNOWN"
  | "OPERATION_NOT_PERMITTED";

/**
 * <p>Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.</p>
 */
export interface RequestCancelActivityTaskFailedEventAttributes {
  __type?: "RequestCancelActivityTaskFailedEventAttributes";
  /**
   * <p>The activityId provided in the <code>RequestCancelActivityTask</code> decision that failed.</p>
   */
  activityId: string | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: RequestCancelActivityTaskFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelActivityTask</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;
}

export namespace RequestCancelActivityTaskFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: RequestCancelActivityTaskFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RequestCancelActivityTaskFailedEventAttributes =>
    __isa(o, "RequestCancelActivityTaskFailedEventAttributes");
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
 */
export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
  __type?: "RequestCancelExternalWorkflowExecutionDecisionAttributes";
  /**
   * <p>The data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   */
  control?: string;

  /**
   * <p>The <code>runId</code> of the external workflow execution to cancel.</p>
   */
  runId?: string;

  /**
   * <p>
   *          The <code>workflowId</code> of the external workflow execution to cancel.</p>
   */
  workflowId: string | undefined;
}

export namespace RequestCancelExternalWorkflowExecutionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: RequestCancelExternalWorkflowExecutionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RequestCancelExternalWorkflowExecutionDecisionAttributes =>
    __isa(o, "RequestCancelExternalWorkflowExecutionDecisionAttributes");
}

export type RequestCancelExternalWorkflowExecutionFailedCause =
  | "OPERATION_NOT_PERMITTED"
  | "REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"
  | "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION";

/**
 * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.</p>
 */
export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  __type?: "RequestCancelExternalWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: RequestCancelExternalWorkflowExecutionFailedCause | string | undefined;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the workflow execution.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this external workflow execution. This
   *       information can be useful for diagnosing problems by tracing back the chain of events leading up to this
   *       event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution.</p>
   */
  runId?: string;

  /**
   * <p>The <code>workflowId</code> of the external workflow to which the cancel request was to be delivered.</p>
   */
  workflowId: string | undefined;
}

export namespace RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: RequestCancelExternalWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RequestCancelExternalWorkflowExecutionFailedEventAttributes =>
    __isa(o, "RequestCancelExternalWorkflowExecutionFailedEventAttributes");
}

/**
 * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.</p>
 */
export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  __type?: "RequestCancelExternalWorkflowExecutionInitiatedEventAttributes";
  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision for this cancellation request.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution to be canceled.</p>
   */
  runId?: string;

  /**
   * <p>The <code>workflowId</code> of the external workflow execution to be canceled.</p>
   */
  workflowId: string | undefined;
}

export namespace RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  export const filterSensitiveLog = (
    obj: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RequestCancelExternalWorkflowExecutionInitiatedEventAttributes =>
    __isa(o, "RequestCancelExternalWorkflowExecutionInitiatedEventAttributes");
}

export interface RequestCancelWorkflowExecutionInput {
  __type?: "RequestCancelWorkflowExecutionInput";
  /**
   * <p>The name of the domain containing the workflow execution to cancel.</p>
   */
  domain: string | undefined;

  /**
   * <p>The runId of the workflow execution to cancel.</p>
   */
  runId?: string;

  /**
   * <p>The workflowId of the workflow execution to cancel.</p>
   */
  workflowId: string | undefined;
}

export namespace RequestCancelWorkflowExecutionInput {
  export const filterSensitiveLog = (
    obj: RequestCancelWorkflowExecutionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestCancelWorkflowExecutionInput =>
    __isa(o, "RequestCancelWorkflowExecutionInput");
}

/**
 * <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and
 *       activities.</p>
 *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
 */
export interface ResourceTag {
  __type?: "ResourceTag";
  /**
   * <p>The key of a tag.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of a tag.</p>
   */
  value?: string;
}

export namespace ResourceTag {
  export const filterSensitiveLog = (obj: ResourceTag): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceTag => __isa(o, "ResourceTag");
}

export interface RespondActivityTaskCanceledInput {
  __type?: "RespondActivityTaskCanceledInput";
  /**
   * <p> Information about the cancellation.</p>
   */
  details?: string;

  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   */
  taskToken: string | undefined;
}

export namespace RespondActivityTaskCanceledInput {
  export const filterSensitiveLog = (
    obj: RespondActivityTaskCanceledInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RespondActivityTaskCanceledInput =>
    __isa(o, "RespondActivityTaskCanceledInput");
}

export interface RespondActivityTaskCompletedInput {
  __type?: "RespondActivityTaskCompletedInput";
  /**
   * <p>The result of the activity task. It is a free form string that is implementation
   *       specific.</p>
   */
  result?: string;

  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   */
  taskToken: string | undefined;
}

export namespace RespondActivityTaskCompletedInput {
  export const filterSensitiveLog = (
    obj: RespondActivityTaskCompletedInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RespondActivityTaskCompletedInput =>
    __isa(o, "RespondActivityTaskCompletedInput");
}

export interface RespondActivityTaskFailedInput {
  __type?: "RespondActivityTaskFailedInput";
  /**
   * <p> Detailed information about the failure.</p>
   */
  details?: string;

  /**
   * <p>Description of the error that may assist in diagnostics.</p>
   */
  reason?: string;

  /**
   * <p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p>
   *
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   */
  taskToken: string | undefined;
}

export namespace RespondActivityTaskFailedInput {
  export const filterSensitiveLog = (
    obj: RespondActivityTaskFailedInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RespondActivityTaskFailedInput =>
    __isa(o, "RespondActivityTaskFailedInput");
}

/**
 * <p>Input data for a TaskCompleted response to a decision task.</p>
 */
export interface RespondDecisionTaskCompletedInput {
  __type?: "RespondDecisionTaskCompletedInput";
  /**
   * <p>The list of decisions (possibly empty) made by the decider while processing this
   *       decision task. See the docs for the <a>Decision</a> structure for
   *       details.</p>
   */
  decisions?: Decision[];

  /**
   * <p>User defined context to add to workflow execution.</p>
   */
  executionContext?: string;

  /**
   * <p>The <code>taskToken</code> from the <a>DecisionTask</a>.</p>
   *          <important>
   *             <p>
   *                <code>taskToken</code> is generated by the service and should be treated as an opaque value.
   *         If the task is passed to another process, its <code>taskToken</code> must also be passed.
   *         This enables it to provide its progress and respond with results.</p>
   *          </important>
   */
  taskToken: string | undefined;
}

export namespace RespondDecisionTaskCompletedInput {
  export const filterSensitiveLog = (
    obj: RespondDecisionTaskCompletedInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RespondDecisionTaskCompletedInput =>
    __isa(o, "RespondDecisionTaskCompletedInput");
}

/**
 * <p>Specifies the <code>runId</code> of a workflow execution.</p>
 */
export interface Run {
  __type?: "Run";
  /**
   * <p>The <code>runId</code> of a workflow execution. This ID is generated by the service and
   *       can be used to uniquely identify the workflow execution within a domain.</p>
   */
  runId?: string;
}

export namespace Run {
  export const filterSensitiveLog = (obj: Run): any => ({
    ...obj
  });
  export const isa = (o: any): o is Run => __isa(o, "Run");
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
 *               <p>Constrain the following parameters by using a <code>Condition</code> element with the
 *   appropriate keys.</p>
 *               <ul>
 *                   <li>
 *                      <p>
 *                         <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                       <p>
 *                         <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p>
 *                   </li>
 *                   <li>
 *                       <p>
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
 */
export interface ScheduleActivityTaskDecisionAttributes {
  __type?: "ScheduleActivityTaskDecisionAttributes";
  /**
   * <p>
   *          The <code>activityId</code> of the activity task.</p>
   *          <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code>
   *           (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>
   */
  activityId: string | undefined;

  /**
   * <p>
   *          The type of the activity task to schedule.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.</p>
   */
  control?: string;

  /**
   * <p>If set, specifies the maximum time before which a worker processing a task of this type must report progress by
   *       calling <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed
   *       out. If the worker subsequently attempts to record a heartbeat or returns a result, it is ignored. This
   *       overrides the default heartbeat timeout specified when registering the activity type using
   *       <a>RegisterActivityType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  heartbeatTimeout?: string;

  /**
   * <p>The input provided to the activity task.</p>
   */
  input?: string;

  /**
   * <p>The maximum duration for this activity task.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A schedule-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   */
  scheduleToCloseTimeout?: string;

  /**
   * <p>
   *          If set, specifies the maximum duration the activity task can wait to be assigned to a worker.
   *       This overrides the default schedule-to-start timeout specified when registering the activity type using
   *       <a>RegisterActivityType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A schedule-to-start timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-start timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   */
  scheduleToStartTimeout?: string;

  /**
   * <p>If set, specifies the maximum duration a worker may take to process this activity task. This overrides the
   *       default start-to-close timeout specified when registering the activity type using <a>RegisterActivityType</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>A start-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   */
  startToCloseTimeout?: string;

  /**
   * <p>If set, specifies the name of the task list in which to schedule the activity task. If not specified, the
   *       <code>defaultTaskList</code> registered with the activity type is used.</p>
   *          <note>
   *             <p>A task list for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default task list was specified at registration time then a fault is returned.</p>
   *          </note>
   *          <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code>
   *           (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>
   */
  taskList?: TaskList;

  /**
   * <p>
   *          If set, specifies the priority with which the activity task is to be assigned to a worker. This
   *       overrides the defaultTaskPriority specified when registering the activity type using <a>RegisterActivityType</a>.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a>  in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;
}

export namespace ScheduleActivityTaskDecisionAttributes {
  export const filterSensitiveLog = (
    obj: ScheduleActivityTaskDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduleActivityTaskDecisionAttributes =>
    __isa(o, "ScheduleActivityTaskDecisionAttributes");
}

export type ScheduleActivityTaskFailedCause =
  | "ACTIVITY_CREATION_RATE_EXCEEDED"
  | "ACTIVITY_ID_ALREADY_IN_USE"
  | "ACTIVITY_TYPE_DEPRECATED"
  | "ACTIVITY_TYPE_DOES_NOT_EXIST"
  | "DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED"
  | "DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED"
  | "DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_TASK_LIST_UNDEFINED"
  | "OPEN_ACTIVITIES_LIMIT_EXCEEDED"
  | "OPERATION_NOT_PERMITTED";

/**
 * <p>Provides the details of the <code>ScheduleActivityTaskFailed</code> event.</p>
 */
export interface ScheduleActivityTaskFailedEventAttributes {
  __type?: "ScheduleActivityTaskFailedEventAttributes";
  /**
   * <p>The activityId provided in the <code>ScheduleActivityTask</code> decision that failed.</p>
   */
  activityId: string | undefined;

  /**
   * <p>The activity type provided in the <code>ScheduleActivityTask</code> decision that failed.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: ScheduleActivityTaskFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision that resulted in the
   *       scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;
}

export namespace ScheduleActivityTaskFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: ScheduleActivityTaskFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduleActivityTaskFailedEventAttributes =>
    __isa(o, "ScheduleActivityTaskFailedEventAttributes");
}

/**
 * <p>Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of
 *       decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.</p>
 */
export interface ScheduleLambdaFunctionDecisionAttributes {
  __type?: "ScheduleLambdaFunctionDecisionAttributes";
  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the Lambda task.</p>
   */
  control?: string;

  /**
   * <p>A string that identifies the Lambda function execution in the event history.</p>
   */
  id: string | undefined;

  /**
   * <p>The optional input data to be supplied to the Lambda function.</p>
   */
  input?: string;

  /**
   * <p>The name, or ARN, of the Lambda function to schedule.</p>
   */
  name: string | undefined;

  /**
   * <p>The timeout value, in seconds, after which the Lambda function is considered to be failed once it has started. This can be any integer from 1-300 (1s-5m). If no value is supplied, than a default value of 300s is assumed.</p>
   */
  startToCloseTimeout?: string;
}

export namespace ScheduleLambdaFunctionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: ScheduleLambdaFunctionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduleLambdaFunctionDecisionAttributes =>
    __isa(o, "ScheduleLambdaFunctionDecisionAttributes");
}

export type ScheduleLambdaFunctionFailedCause =
  | "ID_ALREADY_IN_USE"
  | "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED"
  | "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION"
  | "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED";

/**
 * <p>Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't
 *       set for other event types.</p>
 */
export interface ScheduleLambdaFunctionFailedEventAttributes {
  __type?: "ScheduleLambdaFunctionFailedEventAttributes";
  /**
   * <p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision
   *         failed because it lacked sufficient permissions. For details and example IAM policies, see
   *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using
   *           IAM to Manage Access to Amazon SWF Workflows</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: ScheduleLambdaFunctionFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision
   *       that resulted in scheduling this Lambda task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The ID provided in the <code>ScheduleLambdaFunction</code> decision that failed.
   *     </p>
   */
  id: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   */
  name: string | undefined;
}

export namespace ScheduleLambdaFunctionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: ScheduleLambdaFunctionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ScheduleLambdaFunctionFailedEventAttributes =>
    __isa(o, "ScheduleLambdaFunctionFailedEventAttributes");
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
 */
export interface SignalExternalWorkflowExecutionDecisionAttributes {
  __type?: "SignalExternalWorkflowExecutionDecisionAttributes";
  /**
   * <p>The data attached to the event that can be used by the decider in subsequent decision tasks.</p>
   */
  control?: string;

  /**
   * <p>
   *          The input data to be provided with the signal. The target workflow execution uses the signal
   *       name and input data to process the signal.</p>
   */
  input?: string;

  /**
   * <p>The <code>runId</code> of the workflow execution to be signaled.</p>
   */
  runId?: string;

  /**
   * <p>
   *          The name of the signal.The target workflow execution uses the signal name and input to
   *       process the signal.</p>
   */
  signalName: string | undefined;

  /**
   * <p>
   *          The <code>workflowId</code> of the workflow execution to be signaled.</p>
   */
  workflowId: string | undefined;
}

export namespace SignalExternalWorkflowExecutionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: SignalExternalWorkflowExecutionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is SignalExternalWorkflowExecutionDecisionAttributes =>
    __isa(o, "SignalExternalWorkflowExecutionDecisionAttributes");
}

export type SignalExternalWorkflowExecutionFailedCause =
  | "OPERATION_NOT_PERMITTED"
  | "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"
  | "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION";

/**
 * <p>Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.</p>
 */
export interface SignalExternalWorkflowExecutionFailedEventAttributes {
  __type?: "SignalExternalWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: SignalExternalWorkflowExecutionFailedCause | string | undefined;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the workflow execution.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>SignalExternalWorkflowExecution</code> decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>SignalExternalWorkflowExecution</code> decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The <code>runId</code> of the external workflow execution that the signal was being delivered to.</p>
   */
  runId?: string;

  /**
   * <p>The <code>workflowId</code> of the external workflow execution that the signal was being delivered to.</p>
   */
  workflowId: string | undefined;
}

export namespace SignalExternalWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: SignalExternalWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is SignalExternalWorkflowExecutionFailedEventAttributes =>
    __isa(o, "SignalExternalWorkflowExecutionFailedEventAttributes");
}

/**
 * <p>Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.</p>
 */
export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
  __type?: "SignalExternalWorkflowExecutionInitiatedEventAttributes";
  /**
   * <p>Data attached to the event that can be used by the decider in subsequent decision tasks.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>SignalExternalWorkflowExecution</code> decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The input provided to the signal.</p>
   */
  input?: string;

  /**
   * <p>The <code>runId</code> of the external workflow execution to send the signal to.</p>
   */
  runId?: string;

  /**
   * <p>The name of the signal.</p>
   */
  signalName: string | undefined;

  /**
   * <p>The <code>workflowId</code> of the external workflow execution.</p>
   */
  workflowId: string | undefined;
}

export namespace SignalExternalWorkflowExecutionInitiatedEventAttributes {
  export const filterSensitiveLog = (
    obj: SignalExternalWorkflowExecutionInitiatedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is SignalExternalWorkflowExecutionInitiatedEventAttributes =>
    __isa(o, "SignalExternalWorkflowExecutionInitiatedEventAttributes");
}

export interface SignalWorkflowExecutionInput {
  __type?: "SignalWorkflowExecutionInput";
  /**
   * <p>The name of the domain containing the workflow execution to signal.</p>
   */
  domain: string | undefined;

  /**
   * <p>Data to attach to the <code>WorkflowExecutionSignaled</code> event in the target
   *       workflow execution's history.</p>
   */
  input?: string;

  /**
   * <p>The runId of the workflow execution to signal.</p>
   */
  runId?: string;

  /**
   * <p>The name of the signal. This name must be meaningful to the target workflow.</p>
   */
  signalName: string | undefined;

  /**
   * <p>The workflowId of the workflow execution to signal.</p>
   */
  workflowId: string | undefined;
}

export namespace SignalWorkflowExecutionInput {
  export const filterSensitiveLog = (
    obj: SignalWorkflowExecutionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SignalWorkflowExecutionInput =>
    __isa(o, "SignalWorkflowExecutionInput");
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
 *               <ul>
 *                   <li>
 *                       <p>
 *                         <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4,
 *             inclusive.</p>
 *                   </li>
 *                   <li>
 *                       <p>
 *                         <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p>
 *                   </li>
 *                   <li>
 *                       <p>
 *                         <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                       <p>
 *                         <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *   parameter values fall outside the specified constraints, the action fails. The associated event attribute's
 *           <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see
 *           <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 */
export interface StartChildWorkflowExecutionDecisionAttributes {
  __type?: "StartChildWorkflowExecutionDecisionAttributes";
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
   */
  childPolicy?: ChildPolicy | string;

  /**
   * <p>The data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the child workflow execution.</p>
   */
  control?: string;

  /**
   * <p>The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   *          <note>
   *             <p>An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.</p>
   *          </note>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The input to be provided to the workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The IAM role attached to the child workflow execution.</p>
   */
  lambdaRole?: string;

  /**
   * <p>The list of tags to associate with the child workflow execution. A maximum of 5 tags can be specified. You can
   *       list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or
   *       <a>ListClosedWorkflowExecutions</a> and specifying a <a>TagFilter</a>.</p>
   */
  tagList?: string[];

  /**
   * <p>The name of the task list to be used for decision tasks of the child workflow execution.</p>
   *          <note>
   *             <p>A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault is returned.</p>
   *          </note>
   *          <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code>
   *           (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>
   */
  taskList?: TaskList;

  /**
   * <p>
   *          A task priority that, if set, specifies the priority for a decision task of this workflow
   *       execution. This overrides the defaultTaskPriority specified when registering the workflow type.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
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
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>
   *          The <code>workflowId</code> of the workflow execution.</p>
   *          <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code>
   *           (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>
   *          The type of the workflow execution to be started.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace StartChildWorkflowExecutionDecisionAttributes {
  export const filterSensitiveLog = (
    obj: StartChildWorkflowExecutionDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is StartChildWorkflowExecutionDecisionAttributes =>
    __isa(o, "StartChildWorkflowExecutionDecisionAttributes");
}

export type StartChildWorkflowExecutionFailedCause =
  | "CHILD_CREATION_RATE_EXCEEDED"
  | "DEFAULT_CHILD_POLICY_UNDEFINED"
  | "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "DEFAULT_TASK_LIST_UNDEFINED"
  | "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"
  | "OPEN_CHILDREN_LIMIT_EXCEEDED"
  | "OPEN_WORKFLOWS_LIMIT_EXCEEDED"
  | "OPERATION_NOT_PERMITTED"
  | "WORKFLOW_ALREADY_RUNNING"
  | "WORKFLOW_TYPE_DEPRECATED"
  | "WORKFLOW_TYPE_DOES_NOT_EXIST";

/**
 * <p>Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.</p>
 */
export interface StartChildWorkflowExecutionFailedEventAttributes {
  __type?: "StartChildWorkflowExecutionFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>When <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision fails because it lacks sufficient permissions.
   *               For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">
   *                   Using IAM to Manage Access to Amazon SWF Workflows</a>  in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: StartChildWorkflowExecutionFailedCause | string | undefined;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks.
   *       This data isn't sent to the child workflow execution.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>When the <code>cause</code> is <code>WORKFLOW_ALREADY_RUNNING</code>, <code>initiatedEventId</code> is the ID of the <code>StartChildWorkflowExecutionInitiated</code>
   *           event that corresponds to the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start the workflow execution. You can use this information to diagnose
   *           problems by tracing back the chain of events leading up to this event.</p>
   *          <p>When the <code>cause</code> isn't <code>WORKFLOW_ALREADY_RUNNING</code>, <code>initiatedEventId</code> is set to <code>0</code> because the
   *           <code>StartChildWorkflowExecutionInitiated</code> event doesn't exist.</p>
   */
  initiatedEventId: number | undefined;

  /**
   * <p>The <code>workflowId</code> of the child workflow execution.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The workflow type provided in the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> that failed.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace StartChildWorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: StartChildWorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is StartChildWorkflowExecutionFailedEventAttributes =>
    __isa(o, "StartChildWorkflowExecutionFailedEventAttributes");
}

/**
 * <p>Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.</p>
 */
export interface StartChildWorkflowExecutionInitiatedEventAttributes {
  __type?: "StartChildWorkflowExecutionInitiatedEventAttributes";
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
   */
  childPolicy: ChildPolicy | string | undefined;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent decision tasks. This data isn't sent to the activity.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to request this child workflow execution. This
   *       information can be useful for diagnosing problems by tracing back the cause of events.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The maximum duration for the child workflow execution. If the workflow execution isn't closed within this duration, it is timed out and force-terminated.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The inputs provided to the child workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The IAM role to attach to the child workflow execution.</p>
   */
  lambdaRole?: string;

  /**
   * <p>The list of tags to associated with the child workflow execution.</p>
   */
  tagList?: string[];

  /**
   * <p>The name of the task list used for the decision tasks of the child workflow execution.</p>
   */
  taskList: TaskList | undefined;

  /**
   * <p>
   *          The priority assigned for the decision tasks for this workflow execution.
   *       Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration allowed for the decision tasks for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The <code>workflowId</code> of the child workflow execution.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace StartChildWorkflowExecutionInitiatedEventAttributes {
  export const filterSensitiveLog = (
    obj: StartChildWorkflowExecutionInitiatedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is StartChildWorkflowExecutionInitiatedEventAttributes =>
    __isa(o, "StartChildWorkflowExecutionInitiatedEventAttributes");
}

export type StartLambdaFunctionFailedCause = "ASSUME_ROLE_FAILED";

/**
 * <p>Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set
 *       for other event types.</p>
 */
export interface StartLambdaFunctionFailedEventAttributes {
  __type?: "StartLambdaFunctionFailedEventAttributes";
  /**
   * <p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision
   *         failed because the IAM role attached to the execution lacked sufficient permissions. For
   *         details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">Lambda Tasks</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause?: StartLambdaFunctionFailedCause | string;

  /**
   * <p>A description that can help diagnose the cause of the fault.</p>
   */
  message?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this
   *       activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId?: number;
}

export namespace StartLambdaFunctionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: StartLambdaFunctionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartLambdaFunctionFailedEventAttributes =>
    __isa(o, "StartLambdaFunctionFailedEventAttributes");
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
 */
export interface StartTimerDecisionAttributes {
  __type?: "StartTimerDecisionAttributes";
  /**
   * <p>The data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   */
  control?: string;

  /**
   * <p>
   *          The duration to wait before firing the timer.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>.</p>
   */
  startToFireTimeout: string | undefined;

  /**
   * <p>
   *          The unique ID of the timer.</p>
   *          <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code>
   *           (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>
   */
  timerId: string | undefined;
}

export namespace StartTimerDecisionAttributes {
  export const filterSensitiveLog = (
    obj: StartTimerDecisionAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartTimerDecisionAttributes =>
    __isa(o, "StartTimerDecisionAttributes");
}

export type StartTimerFailedCause =
  | "OPEN_TIMERS_LIMIT_EXCEEDED"
  | "OPERATION_NOT_PERMITTED"
  | "TIMER_CREATION_RATE_EXCEEDED"
  | "TIMER_ID_ALREADY_IN_USE";

/**
 * <p>Provides the details of the <code>StartTimerFailed</code> event.</p>
 */
export interface StartTimerFailedEventAttributes {
  __type?: "StartTimerFailedEventAttributes";
  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p>
   *          <note>
   *             <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed
   *   because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a>
   *           in the <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  cause: StartTimerFailedCause | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>StartTimer</code> decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The timerId provided in the <code>StartTimer</code> decision that failed.</p>
   */
  timerId: string | undefined;
}

export namespace StartTimerFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: StartTimerFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartTimerFailedEventAttributes =>
    __isa(o, "StartTimerFailedEventAttributes");
}

export interface StartWorkflowExecutionInput {
  __type?: "StartWorkflowExecutionInput";
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
   */
  childPolicy?: ChildPolicy | string;

  /**
   * <p>The name of the domain in which the workflow execution is created.</p>
   */
  domain: string | undefined;

  /**
   * <p>The total duration for this workflow execution. This overrides the
   *       defaultExecutionStartToCloseTimeout specified when registering the workflow type.</p>
   *
   *          <p>The duration is specified in seconds; an integer greater than or equal to
   *         <code>0</code>. Exceeding this limit causes the workflow execution to time out. Unlike some
   *       of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for this
   *       timeout; there is a one-year max limit on the time that a workflow execution can
   *       run.</p>
   *
   *          <note>
   *             <p>An execution start-to-close timeout must be specified either through this parameter
   *         or as a default when the workflow type is registered. If neither this parameter nor a
   *         default execution start-to-close timeout is specified, a fault is returned.</p>
   *          </note>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The input for the workflow execution. This is a free form string which should be
   *       meaningful to the workflow you are starting. This <code>input</code> is made available to the
   *       new workflow execution in the <code>WorkflowExecutionStarted</code> history event.</p>
   */
  input?: string;

  /**
   * <p>The IAM role to attach to this workflow execution.</p>
   *          <note>
   *             <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you
   *         don't attach an IAM role, any attempt to schedule a Lambda task fails. This results in a
   *           <code>ScheduleLambdaFunctionFailed</code> history event. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  lambdaRole?: string;

  /**
   * <p>The list of tags to associate with the workflow execution. You can specify a maximum of
   *       5 tags. You can list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or <a>ListClosedWorkflowExecutions</a> and
   *       specifying a <a>TagFilter</a>.</p>
   */
  tagList?: string[];

  /**
   * <p>The task list to use for the decision tasks generated for this workflow execution. This
   *       overrides the <code>defaultTaskList</code> specified when registering the workflow
   *       type.</p>
   *          <note>
   *             <p>A task list for this workflow execution must be specified either as a default for the
   *         workflow type or through this parameter. If neither this parameter is set nor a default task
   *         list was specified at registration time then a fault is returned.</p>
   *          </note>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
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
   */
  taskPriority?: string;

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
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The user defined identifier associated with the workflow execution. You can use this to
   *       associate a custom identifier with the workflow execution. You may specify the same identifier
   *       if a workflow execution is logically a <i>restart</i> of a previous execution.
   *       You cannot have two open workflow executions with the same <code>workflowId</code> at the same
   *       time within the same domain.</p>
   *
   *          <p>The specified string must not start or end with whitespace. It must not contain a
   *         <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any
   *       control characters (<code>\u0000-\u001f</code> | <code>\u007f-\u009f</code>). Also, it must
   *       not <i>be</i> the literal string <code>arn</code>.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The type of the workflow to start.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace StartWorkflowExecutionInput {
  export const filterSensitiveLog = (
    obj: StartWorkflowExecutionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartWorkflowExecutionInput =>
    __isa(o, "StartWorkflowExecutionInput");
}

/**
 * <p>Used to filter the workflow executions in visibility APIs based on a tag.</p>
 */
export interface TagFilter {
  __type?: "TagFilter";
  /**
   * <p>
   *          Specifies the tag that must be associated with the execution for it to meet the filter
   *       criteria.</p>
   *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
   */
  tag: string | undefined;
}

export namespace TagFilter {
  export const filterSensitiveLog = (obj: TagFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagFilter => __isa(o, "TagFilter");
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon SWF domain.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to add to a domain. </p>
   *          <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
   */
  tags: ResourceTag[] | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceInput =>
    __isa(o, "TagResourceInput");
}

/**
 * <p>Represents a task list.</p>
 */
export interface TaskList {
  __type?: "TaskList";
  /**
   * <p>The name of the task list.</p>
   */
  name: string | undefined;
}

export namespace TaskList {
  export const filterSensitiveLog = (obj: TaskList): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskList => __isa(o, "TaskList");
}

export interface TerminateWorkflowExecutionInput {
  __type?: "TerminateWorkflowExecutionInput";
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
   */
  childPolicy?: ChildPolicy | string;

  /**
   * <p> Details for terminating the workflow execution.</p>
   */
  details?: string;

  /**
   * <p>The domain of the workflow execution to terminate.</p>
   */
  domain: string | undefined;

  /**
   * <p> A descriptive reason for terminating the workflow execution.</p>
   */
  reason?: string;

  /**
   * <p>The runId of the workflow execution to terminate.</p>
   */
  runId?: string;

  /**
   * <p>The workflowId of the workflow execution to terminate.</p>
   */
  workflowId: string | undefined;
}

export namespace TerminateWorkflowExecutionInput {
  export const filterSensitiveLog = (
    obj: TerminateWorkflowExecutionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateWorkflowExecutionInput =>
    __isa(o, "TerminateWorkflowExecutionInput");
}

/**
 * <p>
 *       Provides the details of the <code>TimerCanceled</code> event.
 *    </p>
 */
export interface TimerCanceledEventAttributes {
  __type?: "TimerCanceledEventAttributes";
  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CancelTimer</code> decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The ID of the <code>TimerStarted</code> event that was recorded when this timer was started.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The unique ID of the timer that was canceled.</p>
   */
  timerId: string | undefined;
}

export namespace TimerCanceledEventAttributes {
  export const filterSensitiveLog = (
    obj: TimerCanceledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimerCanceledEventAttributes =>
    __isa(o, "TimerCanceledEventAttributes");
}

/**
 * <p>Provides the details of the <code>TimerFired</code> event.</p>
 */
export interface TimerFiredEventAttributes {
  __type?: "TimerFiredEventAttributes";
  /**
   * <p>The ID of the <code>TimerStarted</code> event that was recorded when this timer was started.
   *       This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  startedEventId: number | undefined;

  /**
   * <p>The unique ID of the timer that fired.</p>
   */
  timerId: string | undefined;
}

export namespace TimerFiredEventAttributes {
  export const filterSensitiveLog = (obj: TimerFiredEventAttributes): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimerFiredEventAttributes =>
    __isa(o, "TimerFiredEventAttributes");
}

/**
 * <p>Provides the details of the <code>TimerStarted</code> event.</p>
 */
export interface TimerStartedEventAttributes {
  __type?: "TimerStartedEventAttributes";
  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   */
  control?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>StartTimer</code> decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The duration of time after which the timer fires.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>.</p>
   */
  startToFireTimeout: string | undefined;

  /**
   * <p>The unique ID of the timer that was started.</p>
   */
  timerId: string | undefined;
}

export namespace TimerStartedEventAttributes {
  export const filterSensitiveLog = (
    obj: TimerStartedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimerStartedEventAttributes =>
    __isa(o, "TimerStartedEventAttributes");
}

/**
 * <p>You've exceeded the number of tags allowed for a domain.</p>
 */
export interface TooManyTagsFault extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsFault";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsFault {
  export const filterSensitiveLog = (obj: TooManyTagsFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsFault =>
    __isa(o, "TooManyTagsFault");
}

/**
 * <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
 */
export interface TypeAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "TypeAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace TypeAlreadyExistsFault {
  export const filterSensitiveLog = (obj: TypeAlreadyExistsFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is TypeAlreadyExistsFault =>
    __isa(o, "TypeAlreadyExistsFault");
}

/**
 * <p>Returned when the specified activity or workflow type was already deprecated.</p>
 */
export interface TypeDeprecatedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "TypeDeprecatedFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace TypeDeprecatedFault {
  export const filterSensitiveLog = (obj: TypeDeprecatedFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is TypeDeprecatedFault =>
    __isa(o, "TypeDeprecatedFault");
}

export interface UndeprecateActivityTypeInput {
  __type?: "UndeprecateActivityTypeInput";
  /**
   * <p>The activity type to undeprecate.</p>
   */
  activityType: ActivityType | undefined;

  /**
   * <p>The name of the domain of the deprecated activity type.</p>
   */
  domain: string | undefined;
}

export namespace UndeprecateActivityTypeInput {
  export const filterSensitiveLog = (
    obj: UndeprecateActivityTypeInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UndeprecateActivityTypeInput =>
    __isa(o, "UndeprecateActivityTypeInput");
}

export interface UndeprecateDomainInput {
  __type?: "UndeprecateDomainInput";
  /**
   * <p>The name of the domain of the deprecated workflow type.</p>
   */
  name: string | undefined;
}

export namespace UndeprecateDomainInput {
  export const filterSensitiveLog = (obj: UndeprecateDomainInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UndeprecateDomainInput =>
    __isa(o, "UndeprecateDomainInput");
}

export interface UndeprecateWorkflowTypeInput {
  __type?: "UndeprecateWorkflowTypeInput";
  /**
   * <p>The name of the domain of the deprecated workflow type.</p>
   */
  domain: string | undefined;

  /**
   * <p>The name of the domain of the deprecated workflow type.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace UndeprecateWorkflowTypeInput {
  export const filterSensitiveLog = (
    obj: UndeprecateWorkflowTypeInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UndeprecateWorkflowTypeInput =>
    __isa(o, "UndeprecateWorkflowTypeInput");
}

/**
 * <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 */
export interface UnknownResourceFault
  extends __SmithyException,
    $MetadataBearer {
  name: "UnknownResourceFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace UnknownResourceFault {
  export const filterSensitiveLog = (obj: UnknownResourceFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnknownResourceFault =>
    __isa(o, "UnknownResourceFault");
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon SWF domain.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tags to remove from the Amazon SWF domain.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceInput =>
    __isa(o, "UntagResourceInput");
}

/**
 * <p>Represents a workflow execution.</p>
 */
export interface WorkflowExecution {
  __type?: "WorkflowExecution";
  /**
   * <p>A system-generated unique identifier for the workflow execution.</p>
   */
  runId: string | undefined;

  /**
   * <p>The user defined identifier associated with the workflow execution.</p>
   */
  workflowId: string | undefined;
}

export namespace WorkflowExecution {
  export const filterSensitiveLog = (obj: WorkflowExecution): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecution =>
    __isa(o, "WorkflowExecution");
}

/**
 * <p>Returned by <a>StartWorkflowExecution</a> when an open execution with the same workflowId is already running in
 *       the specified domain.</p>
 */
export interface WorkflowExecutionAlreadyStartedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "WorkflowExecutionAlreadyStartedFault";
  $fault: "client";
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

export namespace WorkflowExecutionAlreadyStartedFault {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionAlreadyStartedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionAlreadyStartedFault =>
    __isa(o, "WorkflowExecutionAlreadyStartedFault");
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionCanceled</code> event.</p>
 */
export interface WorkflowExecutionCanceledEventAttributes {
  __type?: "WorkflowExecutionCanceledEventAttributes";
  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CancelWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The details of the cancellation.</p>
   */
  details?: string;
}

export namespace WorkflowExecutionCanceledEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionCanceledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionCanceledEventAttributes =>
    __isa(o, "WorkflowExecutionCanceledEventAttributes");
}

export type WorkflowExecutionCancelRequestedCause = "CHILD_POLICY_APPLIED";

/**
 * <p>Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.</p>
 */
export interface WorkflowExecutionCancelRequestedEventAttributes {
  __type?: "WorkflowExecutionCancelRequestedEventAttributes";
  /**
   * <p>If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to cancel child executions.</p>
   */
  cause?: WorkflowExecutionCancelRequestedCause | string;

  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this workflow execution.The source event
   *       with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  externalInitiatedEventId?: number;

  /**
   * <p>The external workflow execution for which the cancellation was requested.</p>
   */
  externalWorkflowExecution?: WorkflowExecution;
}

export namespace WorkflowExecutionCancelRequestedEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionCancelRequestedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is WorkflowExecutionCancelRequestedEventAttributes =>
    __isa(o, "WorkflowExecutionCancelRequestedEventAttributes");
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionCompleted</code> event.</p>
 */
export interface WorkflowExecutionCompletedEventAttributes {
  __type?: "WorkflowExecutionCompletedEventAttributes";
  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>CompleteWorkflowExecution</code> decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The result produced by the workflow execution upon successful completion.</p>
   */
  result?: string;
}

export namespace WorkflowExecutionCompletedEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionCompletedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionCompletedEventAttributes =>
    __isa(o, "WorkflowExecutionCompletedEventAttributes");
}

/**
 * <p>The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.</p>
 */
export interface WorkflowExecutionConfiguration {
  __type?: "WorkflowExecutionConfiguration";
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
   */
  childPolicy: ChildPolicy | string | undefined;

  /**
   * <p>The total duration for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout: string | undefined;

  /**
   * <p>The IAM role attached to the child workflow execution.</p>
   */
  lambdaRole?: string;

  /**
   * <p>The task list used for the decision tasks generated for this workflow execution.</p>
   */
  taskList: TaskList | undefined;

  /**
   * <p>The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code>
   *   (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p>
   *          <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration allowed for decision tasks for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout: string | undefined;
}

export namespace WorkflowExecutionConfiguration {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionConfiguration =>
    __isa(o, "WorkflowExecutionConfiguration");
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.</p>
 */
export interface WorkflowExecutionContinuedAsNewEventAttributes {
  __type?: "WorkflowExecutionContinuedAsNewEventAttributes";
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
   */
  childPolicy: ChildPolicy | string | undefined;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>ContinueAsNewWorkflowExecution</code> decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The total duration allowed for the new workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The input provided to the new workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The IAM role to attach to the new (continued) workflow execution.</p>
   */
  lambdaRole?: string;

  /**
   * <p>The <code>runId</code> of the new workflow execution.</p>
   */
  newExecutionRunId: string | undefined;

  /**
   * <p>The list of tags associated with the new workflow execution.</p>
   */
  tagList?: string[];

  /**
   * <p>The task list to use for the decisions of the new (continued) workflow
   *       execution.</p>
   */
  taskList: TaskList | undefined;

  /**
   * <p>The priority of the task to use for the decisions of the new (continued) workflow
   *       execution.</p>
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration of decision tasks for the new workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The workflow type of this execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace WorkflowExecutionContinuedAsNewEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionContinuedAsNewEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is WorkflowExecutionContinuedAsNewEventAttributes =>
    __isa(o, "WorkflowExecutionContinuedAsNewEventAttributes");
}

/**
 * <p>Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or
 *       <a>CountClosedWorkflowExecutions</a>
 *          </p>
 */
export interface WorkflowExecutionCount {
  __type?: "WorkflowExecutionCount";
  /**
   * <p>The number of workflow executions.</p>
   */
  count: number | undefined;

  /**
   * <p>If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.</p>
   */
  truncated?: boolean;
}

export namespace WorkflowExecutionCount {
  export const filterSensitiveLog = (obj: WorkflowExecutionCount): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionCount =>
    __isa(o, "WorkflowExecutionCount");
}

/**
 * <p>Contains details about a workflow execution.</p>
 */
export interface WorkflowExecutionDetail {
  __type?: "WorkflowExecutionDetail";
  /**
   * <p>The configuration settings for this workflow execution including timeout values, tasklist etc.</p>
   */
  executionConfiguration: WorkflowExecutionConfiguration | undefined;

  /**
   * <p>Information about the workflow execution.</p>
   */
  executionInfo: WorkflowExecutionInfo | undefined;

  /**
   * <p>The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.</p>
   */
  latestActivityTaskTimestamp?: Date;

  /**
   * <p>The latest executionContext provided by the decider for this workflow execution. A decider can provide an
   *       executionContext (a free-form string) when closing a decision task using <a>RespondDecisionTaskCompleted</a>.</p>
   */
  latestExecutionContext?: string;

  /**
   * <p>The number of tasks for this workflow execution. This includes open and closed tasks of all types.</p>
   */
  openCounts: WorkflowExecutionOpenCounts | undefined;
}

export namespace WorkflowExecutionDetail {
  export const filterSensitiveLog = (obj: WorkflowExecutionDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionDetail =>
    __isa(o, "WorkflowExecutionDetail");
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionFailed</code> event.</p>
 */
export interface WorkflowExecutionFailedEventAttributes {
  __type?: "WorkflowExecutionFailedEventAttributes";
  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the
   *       <code>FailWorkflowExecution</code> decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * <p>The details of the failure.</p>
   */
  details?: string;

  /**
   * <p>The descriptive reason provided for the failure.</p>
   */
  reason?: string;
}

export namespace WorkflowExecutionFailedEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionFailedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionFailedEventAttributes =>
    __isa(o, "WorkflowExecutionFailedEventAttributes");
}

/**
 * <p>Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.</p>
 */
export interface WorkflowExecutionFilter {
  __type?: "WorkflowExecutionFilter";
  /**
   * <p>The workflowId to pass of match the criteria of this filter.</p>
   */
  workflowId: string | undefined;
}

export namespace WorkflowExecutionFilter {
  export const filterSensitiveLog = (obj: WorkflowExecutionFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionFilter =>
    __isa(o, "WorkflowExecutionFilter");
}

/**
 * <p>Contains information about a workflow execution.</p>
 */
export interface WorkflowExecutionInfo {
  __type?: "WorkflowExecutionInfo";
  /**
   * <p>Set to true if a cancellation is requested for this workflow execution.</p>
   */
  cancelRequested?: boolean;

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
   */
  closeStatus?: CloseStatus | string;

  /**
   * <p>The time when the workflow execution was closed. Set only if the execution status is CLOSED.</p>
   */
  closeTimestamp?: Date;

  /**
   * <p>The workflow execution this information is about.</p>
   */
  execution: WorkflowExecution | undefined;

  /**
   * <p>The current status of the execution.</p>
   */
  executionStatus: ExecutionStatus | string | undefined;

  /**
   * <p>If this workflow execution is a child of another execution then contains the workflow execution that started this execution.</p>
   */
  parent?: WorkflowExecution;

  /**
   * <p>The time when the execution was started.</p>
   */
  startTimestamp: Date | undefined;

  /**
   * <p>The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.</p>
   */
  tagList?: string[];

  /**
   * <p>The type of the workflow execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace WorkflowExecutionInfo {
  export const filterSensitiveLog = (obj: WorkflowExecutionInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionInfo =>
    __isa(o, "WorkflowExecutionInfo");
}

/**
 * <p>Contains a paginated list of information about workflow executions.</p>
 */
export interface WorkflowExecutionInfos {
  __type?: "WorkflowExecutionInfos";
  /**
   * <p>The list of workflow information structures.</p>
   */
  executionInfos: WorkflowExecutionInfo[] | undefined;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;
}

export namespace WorkflowExecutionInfos {
  export const filterSensitiveLog = (obj: WorkflowExecutionInfos): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionInfos =>
    __isa(o, "WorkflowExecutionInfos");
}

/**
 * <p>Contains the counts of open tasks, child workflow executions and timers for a workflow execution.</p>
 */
export interface WorkflowExecutionOpenCounts {
  __type?: "WorkflowExecutionOpenCounts";
  /**
   * <p>The count of activity tasks whose status is <code>OPEN</code>.</p>
   */
  openActivityTasks: number | undefined;

  /**
   * <p>The count of child workflow executions whose status is <code>OPEN</code>.</p>
   */
  openChildWorkflowExecutions: number | undefined;

  /**
   * <p>The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision task.</p>
   */
  openDecisionTasks: number | undefined;

  /**
   * <p>The count of Lambda tasks whose status is <code>OPEN</code>.</p>
   */
  openLambdaFunctions?: number;

  /**
   * <p>The count of timers started by this workflow execution that have not fired yet.</p>
   */
  openTimers: number | undefined;
}

export namespace WorkflowExecutionOpenCounts {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionOpenCounts
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionOpenCounts =>
    __isa(o, "WorkflowExecutionOpenCounts");
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionSignaled</code> event.</p>
 */
export interface WorkflowExecutionSignaledEventAttributes {
  __type?: "WorkflowExecutionSignaledEventAttributes";
  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>SignalExternalWorkflow</code> decision to signal this workflow execution.The source event with this ID can
   *       be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event. This field is set only if
   *       the signal was initiated by another workflow execution.</p>
   */
  externalInitiatedEventId?: number;

  /**
   * <p>The workflow execution that sent the signal. This is set only of the signal was sent by another workflow execution.</p>
   */
  externalWorkflowExecution?: WorkflowExecution;

  /**
   * <p>The inputs provided with the signal. The decider can use the signal name and inputs to determine how to process the signal.</p>
   */
  input?: string;

  /**
   * <p>The name of the signal received. The decider can use the signal name and inputs to determine how to the process the signal.</p>
   */
  signalName: string | undefined;
}

export namespace WorkflowExecutionSignaledEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionSignaledEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionSignaledEventAttributes =>
    __isa(o, "WorkflowExecutionSignaledEventAttributes");
}

/**
 * <p>Provides details of <code>WorkflowExecutionStarted</code> event.</p>
 */
export interface WorkflowExecutionStartedEventAttributes {
  __type?: "WorkflowExecutionStartedEventAttributes";
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
   */
  childPolicy: ChildPolicy | string | undefined;

  /**
   * <p>If this workflow execution was started due to a <code>ContinueAsNewWorkflowExecution</code> decision, then it
   *       contains the <code>runId</code> of the previous workflow execution that was closed and continued as this
   *       execution.</p>
   */
  continuedExecutionRunId?: string;

  /**
   * <p>The maximum duration for this workflow execution.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The input provided to the workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The IAM role attached to the workflow execution.</p>
   */
  lambdaRole?: string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the
   *       <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a> to start this workflow execution. The source event with
   *       this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of
   *   events leading up to this event.</p>
   */
  parentInitiatedEventId?: number;

  /**
   * <p>The source workflow execution that started this workflow execution. The member isn't set if the workflow execution was not started by a workflow.</p>
   */
  parentWorkflowExecution?: WorkflowExecution;

  /**
   * <p>The list of tags associated with this workflow execution. An execution can have up to 5 tags.</p>
   */
  tagList?: string[];

  /**
   * <p>The name of the task list for scheduling the decision tasks for this workflow execution.</p>
   */
  taskList: TaskList | undefined;

  /**
   * <p>The priority of the decision tasks in the workflow execution.</p>
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration of decision tasks for this workflow type.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The workflow type of this execution.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace WorkflowExecutionStartedEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionStartedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionStartedEventAttributes =>
    __isa(o, "WorkflowExecutionStartedEventAttributes");
}

export type WorkflowExecutionTerminatedCause =
  | "CHILD_POLICY_APPLIED"
  | "EVENT_LIMIT_EXCEEDED"
  | "OPERATOR_INITIATED";

/**
 * <p>Provides the details of the <code>WorkflowExecutionTerminated</code> event.</p>
 */
export interface WorkflowExecutionTerminatedEventAttributes {
  __type?: "WorkflowExecutionTerminatedEventAttributes";
  /**
   * <p>If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.</p>
   */
  cause?: WorkflowExecutionTerminatedCause | string;

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
   */
  childPolicy: ChildPolicy | string | undefined;

  /**
   * <p>The details provided for the termination.</p>
   */
  details?: string;

  /**
   * <p>The reason provided for the termination.</p>
   */
  reason?: string;
}

export namespace WorkflowExecutionTerminatedEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionTerminatedEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is WorkflowExecutionTerminatedEventAttributes =>
    __isa(o, "WorkflowExecutionTerminatedEventAttributes");
}

/**
 * <p>Provides the details of the <code>WorkflowExecutionTimedOut</code> event.</p>
 */
export interface WorkflowExecutionTimedOutEventAttributes {
  __type?: "WorkflowExecutionTimedOutEventAttributes";
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
   */
  childPolicy: ChildPolicy | string | undefined;

  /**
   * <p>The type of timeout that caused this event.</p>
   */
  timeoutType: WorkflowExecutionTimeoutType | string | undefined;
}

export namespace WorkflowExecutionTimedOutEventAttributes {
  export const filterSensitiveLog = (
    obj: WorkflowExecutionTimedOutEventAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowExecutionTimedOutEventAttributes =>
    __isa(o, "WorkflowExecutionTimedOutEventAttributes");
}

export type WorkflowExecutionTimeoutType = "START_TO_CLOSE";

/**
 * <p>Represents a workflow type.</p>
 */
export interface WorkflowType {
  __type?: "WorkflowType";
  /**
   * <p>
   *          The name of the workflow type.</p>
   *          <note>
   *             <p>The combination of workflow type name and version must be unique with in a domain.</p>
   *          </note>
   */
  name: string | undefined;

  /**
   * <p>
   *          The version of the workflow type.</p>
   *          <note>
   *             <p>The combination of workflow type name and version must be unique with in a domain.</p>
   *          </note>
   */
  version: string | undefined;
}

export namespace WorkflowType {
  export const filterSensitiveLog = (obj: WorkflowType): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowType => __isa(o, "WorkflowType");
}

/**
 * <p>The configuration settings of a workflow type.</p>
 */
export interface WorkflowTypeConfiguration {
  __type?: "WorkflowTypeConfiguration";
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
   */
  defaultChildPolicy?: ChildPolicy | string;

  /**
   * <p>
   *          The default maximum duration, specified when registering the workflow type, for executions of
   *       this workflow type. This default can be overridden when starting a workflow execution using the
   *       <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultExecutionStartToCloseTimeout?: string;

  /**
   * <p>The default IAM role attached to this workflow type.</p>
   *          <note>
   *             <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you
   *         don't specify an IAM role when starting this workflow type, the default Lambda role is
   *         attached to the execution. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the
   *           <i>Amazon SWF Developer Guide</i>.</p>
   *          </note>
   */
  defaultLambdaRole?: string;

  /**
   * <p>
   *          The default task list, specified when registering the workflow type, for decisions tasks
   *       scheduled for workflow executions of this type. This default can be overridden when starting a workflow execution
   *       using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
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
   */
  defaultTaskPriority?: string;

  /**
   * <p>
   *          The default maximum duration, specified when registering the workflow type, that a decision task
   *       for executions of this workflow type might take before returning completion or failure. If the task doesn'tdo  close
   *       in the specified time then the task is automatically timed out and rescheduled. If the decider eventually reports
   *       a completion or failure, it is ignored. This default can be overridden when starting a workflow execution using
   *       the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code>
   *             <a>Decision</a>.</p>
   *          <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  defaultTaskStartToCloseTimeout?: string;
}

export namespace WorkflowTypeConfiguration {
  export const filterSensitiveLog = (obj: WorkflowTypeConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowTypeConfiguration =>
    __isa(o, "WorkflowTypeConfiguration");
}

/**
 * <p>Contains details about a workflow type.</p>
 */
export interface WorkflowTypeDetail {
  __type?: "WorkflowTypeDetail";
  /**
   * <p>Configuration settings of the workflow type registered through <a>RegisterWorkflowType</a>
   *          </p>
   */
  configuration: WorkflowTypeConfiguration | undefined;

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
   */
  typeInfo: WorkflowTypeInfo | undefined;
}

export namespace WorkflowTypeDetail {
  export const filterSensitiveLog = (obj: WorkflowTypeDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowTypeDetail =>
    __isa(o, "WorkflowTypeDetail");
}

/**
 * <p>Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.</p>
 */
export interface WorkflowTypeFilter {
  __type?: "WorkflowTypeFilter";
  /**
   * <p>
   *          Name of the workflow type.</p>
   */
  name: string | undefined;

  /**
   * <p>Version of the workflow type.</p>
   */
  version?: string;
}

export namespace WorkflowTypeFilter {
  export const filterSensitiveLog = (obj: WorkflowTypeFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowTypeFilter =>
    __isa(o, "WorkflowTypeFilter");
}

/**
 * <p>Contains information about a workflow type.</p>
 */
export interface WorkflowTypeInfo {
  __type?: "WorkflowTypeInfo";
  /**
   * <p>The date when this type was registered.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>If the type is in deprecated state, then it is set to the date when the type was deprecated.</p>
   */
  deprecationDate?: Date;

  /**
   * <p>The description of the type registered through <a>RegisterWorkflowType</a>.</p>
   */
  description?: string;

  /**
   * <p>The current status of the workflow type.</p>
   */
  status: RegistrationStatus | string | undefined;

  /**
   * <p>The workflow type this information is about.</p>
   */
  workflowType: WorkflowType | undefined;
}

export namespace WorkflowTypeInfo {
  export const filterSensitiveLog = (obj: WorkflowTypeInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowTypeInfo =>
    __isa(o, "WorkflowTypeInfo");
}

/**
 * <p>Contains a paginated list of information structures about workflow types.</p>
 */
export interface WorkflowTypeInfos {
  __type?: "WorkflowTypeInfos";
  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more
   *   results available. To retrieve the next page of results, make the call again using the returned token in
   *   <code>nextPageToken</code>. Keep all other arguments unchanged.</p>
   *          <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;

  /**
   * <p>The list of workflow type information.</p>
   */
  typeInfos: WorkflowTypeInfo[] | undefined;
}

export namespace WorkflowTypeInfos {
  export const filterSensitiveLog = (obj: WorkflowTypeInfos): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowTypeInfos =>
    __isa(o, "WorkflowTypeInfos");
}
