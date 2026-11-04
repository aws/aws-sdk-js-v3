// smithy-typescript generated code
import type {
  ActivityTaskTimeoutType,
  CancelTimerFailedCause,
  CancelWorkflowExecutionFailedCause,
  ChildPolicy,
  CloseStatus,
  CompleteWorkflowExecutionFailedCause,
  ContinueAsNewWorkflowExecutionFailedCause,
  DecisionTaskTimeoutType,
  DecisionType,
  EventType,
  ExecutionStatus,
  FailWorkflowExecutionFailedCause,
  LambdaFunctionTimeoutType,
  RecordMarkerFailedCause,
  RegistrationStatus,
  RequestCancelActivityTaskFailedCause,
  RequestCancelExternalWorkflowExecutionFailedCause,
  ScheduleActivityTaskFailedCause,
  ScheduleLambdaFunctionFailedCause,
  SignalExternalWorkflowExecutionFailedCause,
  StartChildWorkflowExecutionFailedCause,
  StartLambdaFunctionFailedCause,
  StartTimerFailedCause,
  WorkflowExecutionCancelRequestedCause,
  WorkflowExecutionTerminatedCause,
  WorkflowExecutionTimeoutType,
} from "./enums";

/**
 * Represents an activity type.
 *
 * @public
 */
export interface ActivityType {
  /**
   * The name of this activity.
   *
   * > **Note:** The combination of activity type name and version must be unique within a domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of this activity.
   *
   * > **Note:** The combination of activity type name and version must be unique with in a domain.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * Represents a workflow execution.
 *
 * @public
 */
export interface WorkflowExecution {
  /**
   * The user defined identifier associated with the workflow execution.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * A system-generated unique identifier for the workflow execution.
   *
   * @public
   */
  runId: string | undefined;
}

/**
 * Unit of work sent to an activity worker.
 *
 * @public
 */
export interface ActivityTask {
  /**
   * The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * The unique ID of the task.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * The ID of the `ActivityTaskStarted` event recorded in the history.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * The workflow execution that started this activity task.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of this activity task.
   *
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * The inputs provided when the activity task was scheduled. The form of the input is user defined and should be meaningful to the activity implementation.
   *
   * @public
   */
  input?: string | undefined;
}

/**
 * Provides the details of the `ActivityTaskCanceled` event.
 *
 * @public
 */
export interface ActivityTaskCanceledEventAttributes {
  /**
   * Details of the cancellation.
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The ID of the `ActivityTaskScheduled` event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `ActivityTaskStarted` event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * If set, contains the ID of the last `ActivityTaskCancelRequested` event recorded for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  latestCancelRequestedEventId?: number | undefined;
}

/**
 * Provides the details of the `ActivityTaskCancelRequested` event.
 *
 * @public
 */
export interface ActivityTaskCancelRequestedEventAttributes {
  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `RequestCancelActivityTask` decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * The unique ID of the task.
   *
   * @public
   */
  activityId: string | undefined;
}

/**
 * Provides the details of the `ActivityTaskCompleted` event.
 *
 * @public
 */
export interface ActivityTaskCompletedEventAttributes {
  /**
   * The results of the activity task.
   *
   * @public
   */
  result?: string | undefined;

  /**
   * The ID of the `ActivityTaskScheduled` event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `ActivityTaskStarted` event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Provides the details of the `ActivityTaskFailed` event.
 *
 * @public
 */
export interface ActivityTaskFailedEventAttributes {
  /**
   * The reason provided for the failure.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The details of the failure.
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The ID of the `ActivityTaskScheduled` event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `ActivityTaskStarted` event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Represents a task list.
 *
 * @public
 */
export interface TaskList {
  /**
   * The name of the task list.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Provides the details of the `ActivityTaskScheduled` event.
 *
 * @public
 */
export interface ActivityTaskScheduledEventAttributes {
  /**
   * The type of the activity task.
   *
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * The unique ID of the activity task.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * The input provided to the activity task.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The maximum amount of time the activity task can wait to be assigned to a worker.
   *
   * @public
   */
  scheduleToStartTimeout?: string | undefined;

  /**
   * The maximum amount of time for this activity task.
   *
   * @public
   */
  scheduleToCloseTimeout?: string | undefined;

  /**
   * The maximum amount of time a worker may take to process the activity task.
   *
   * @public
   */
  startToCloseTimeout?: string | undefined;

  /**
   * The task list in which the activity task has been scheduled.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * The priority to assign to the scheduled activity task. If set, this overrides any default priority value that was assigned when the activity type was registered.
   *
   * Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * The maximum time before which the worker processing this task must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or return a result, it is ignored.
   *
   * @public
   */
  heartbeatTimeout?: string | undefined;
}

/**
 * Provides the details of the `ActivityTaskStarted` event.
 *
 * @public
 */
export interface ActivityTaskStartedEventAttributes {
  /**
   * Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this identity is user defined.
   *
   * @public
   */
  identity?: string | undefined;

  /**
   * The ID of the `ActivityTaskScheduled` event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;
}

/**
 * Status information about an activity task.
 *
 * @public
 */
export interface ActivityTaskStatus {
  /**
   * Set to `true` if cancellation of the task is requested.
   *
   * @public
   */
  cancelRequested: boolean | undefined;
}

/**
 * Provides the details of the `ActivityTaskTimedOut` event.
 *
 * @public
 */
export interface ActivityTaskTimedOutEventAttributes {
  /**
   * The type of the timeout that caused this event.
   *
   * @public
   */
  timeoutType: ActivityTaskTimeoutType | undefined;

  /**
   * The ID of the `ActivityTaskScheduled` event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `ActivityTaskStarted` event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * Contains the content of the `details` parameter for the last call made by the activity to `RecordActivityTaskHeartbeat`.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * Configuration settings registered with the activity type.
 *
 * @public
 */
export interface ActivityTypeConfiguration {
  /**
   * The default maximum duration for tasks of an activity type specified when registering the activity type. You can override this default when scheduling a task through the `ScheduleActivityTask` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskStartToCloseTimeout?: string | undefined;

  /**
   * The default maximum time, in seconds, before which a worker processing a task must report progress by calling RecordActivityTaskHeartbeat.
   *
   * You can specify this value only when *registering* an activity type. The registered default value can be overridden when you schedule a task through the `ScheduleActivityTask` Decision. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an `UnknownResource` fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskHeartbeatTimeout?: string | undefined;

  /**
   * The default task list specified for this activity type at registration. This default is used if a task list isn't provided when a task is scheduled through the `ScheduleActivityTask` Decision. You can override the default registered task list when scheduling a task through the `ScheduleActivityTask` Decision.
   *
   * @public
   */
  defaultTaskList?: TaskList | undefined;

  /**
   * The default task priority for tasks of this activity type, specified at registration. If not set, then `0` is used as the default priority. This default can be overridden when scheduling an activity task.
   *
   * Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  defaultTaskPriority?: string | undefined;

  /**
   * The default maximum duration, specified when registering the activity type, that a task of an activity type can wait before being assigned to a worker. You can override this default when scheduling a task through the `ScheduleActivityTask` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskScheduleToStartTimeout?: string | undefined;

  /**
   * The default maximum duration, specified when registering the activity type, for tasks of this activity type. You can override this default when scheduling a task through the `ScheduleActivityTask` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskScheduleToCloseTimeout?: string | undefined;
}

/**
 * Detailed information about an activity type.
 *
 * @public
 */
export interface ActivityTypeInfo {
  /**
   * The ActivityType type structure representing the activity type.
   *
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * The current status of the activity type.
   *
   * @public
   */
  status: RegistrationStatus | undefined;

  /**
   * The description of the activity type provided in RegisterActivityType.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time this activity type was created through RegisterActivityType.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * If DEPRECATED, the date and time DeprecateActivityType was called.
   *
   * @public
   */
  deprecationDate?: Date | undefined;
}

/**
 * Detailed information about an activity type.
 *
 * @public
 */
export interface ActivityTypeDetail {
  /**
   * General information about the activity type.
   *
   * The status of activity type (returned in the ActivityTypeInfo structure) can be one of the following.
   *
   * - `REGISTERED` – The type is registered and available. Workers supporting this type should be running.
   * - `DEPRECATED` – The type was deprecated using DeprecateActivityType, but is still in use. You should keep workers supporting this type running. You cannot create new tasks of this type.
   *
   * @public
   */
  typeInfo: ActivityTypeInfo | undefined;

  /**
   * The configuration settings registered with the activity type.
   *
   * @public
   */
  configuration: ActivityTypeConfiguration | undefined;
}

/**
 * Contains a paginated list of activity type information structures.
 *
 * @public
 */
export interface ActivityTypeInfos {
  /**
   * List of activity type information.
   *
   * @public
   */
  typeInfos: ActivityTypeInfo[] | undefined;

  /**
   * If a `NextPageToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `nextPageToken`. Keep all other arguments unchanged.
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * Provides the details of the `CancelTimer` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface CancelTimerDecisionAttributes {
  /**
   * The unique ID of the timer to cancel.
   *
   * @public
   */
  timerId: string | undefined;
}

/**
 * Provides the details of the `CancelTimerFailed` event.
 *
 * @public
 */
export interface CancelTimerFailedEventAttributes {
  /**
   * The timerId provided in the `CancelTimer` decision that failed.
   *
   * @public
   */
  timerId: string | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: CancelTimerFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `CancelTimer` decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `CancelWorkflowExecution` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface CancelWorkflowExecutionDecisionAttributes {
  /**
   * Details of the cancellation.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * Provides the details of the `CancelWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface CancelWorkflowExecutionFailedEventAttributes {
  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: CancelWorkflowExecutionFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `CancelWorkflowExecution` decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Represents a workflow type.
 *
 * @public
 */
export interface WorkflowType {
  /**
   * The name of the workflow type.
   *
   * > **Note:** The combination of workflow type name and version must be unique with in a domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the workflow type.
   *
   * > **Note:** The combination of workflow type name and version must be unique with in a domain.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * Provide details of the `ChildWorkflowExecutionCanceled` event.
 *
 * @public
 */
export interface ChildWorkflowExecutionCanceledEventAttributes {
  /**
   * The child workflow execution that was canceled.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of the child workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * Details of the cancellation (if provided).
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The ID of the `StartChildWorkflowExecutionInitiated` event corresponding to the `StartChildWorkflowExecution` Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `ChildWorkflowExecutionStarted` event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Provides the details of the `ChildWorkflowExecutionCompleted` event.
 *
 * @public
 */
export interface ChildWorkflowExecutionCompletedEventAttributes {
  /**
   * The child workflow execution that was completed.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of the child workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The result of the child workflow execution.
   *
   * @public
   */
  result?: string | undefined;

  /**
   * The ID of the `StartChildWorkflowExecutionInitiated` event corresponding to the `StartChildWorkflowExecution` Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `ChildWorkflowExecutionStarted` event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Provides the details of the `ChildWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface ChildWorkflowExecutionFailedEventAttributes {
  /**
   * The child workflow execution that failed.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of the child workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The reason for the failure (if provided).
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The details of the failure (if provided).
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The ID of the `StartChildWorkflowExecutionInitiated` event corresponding to the `StartChildWorkflowExecution` Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `ChildWorkflowExecutionStarted` event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Provides the details of the `ChildWorkflowExecutionStarted` event.
 *
 * @public
 */
export interface ChildWorkflowExecutionStartedEventAttributes {
  /**
   * The child workflow execution that was started.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of the child workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The ID of the `StartChildWorkflowExecutionInitiated` event corresponding to the `StartChildWorkflowExecution` Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;
}

/**
 * Provides the details of the `ChildWorkflowExecutionTerminated` event.
 *
 * @public
 */
export interface ChildWorkflowExecutionTerminatedEventAttributes {
  /**
   * The child workflow execution that was terminated.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of the child workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The ID of the `StartChildWorkflowExecutionInitiated` event corresponding to the `StartChildWorkflowExecution` Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `ChildWorkflowExecutionStarted` event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Provides the details of the `ChildWorkflowExecutionTimedOut` event.
 *
 * @public
 */
export interface ChildWorkflowExecutionTimedOutEventAttributes {
  /**
   * The child workflow execution that timed out.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of the child workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The type of the timeout that caused the child workflow execution to time out.
   *
   * @public
   */
  timeoutType: WorkflowExecutionTimeoutType | undefined;

  /**
   * The ID of the `StartChildWorkflowExecutionInitiated` event corresponding to the `StartChildWorkflowExecution` Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `ChildWorkflowExecutionStarted` event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Used to filter the closed workflow executions in visibility APIs by their close status.
 *
 * @public
 */
export interface CloseStatusFilter {
  /**
   * The close status that must match the close status of an execution for it to meet the criteria of this filter.
   *
   * @public
   */
  status: CloseStatus | undefined;
}

/**
 * Provides the details of the `CompleteWorkflowExecution` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface CompleteWorkflowExecutionDecisionAttributes {
  /**
   * The result of the workflow execution. The form of the result is implementation defined.
   *
   * @public
   */
  result?: string | undefined;
}

/**
 * Provides the details of the `CompleteWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface CompleteWorkflowExecutionFailedEventAttributes {
  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: CompleteWorkflowExecutionFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `CompleteWorkflowExecution` decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `ContinueAsNewWorkflowExecution` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `tag` – A tag used to identify the workflow execution
 *   - `taskList` – String constraint. The key is `swf:taskList.name`.
 *   - `workflowType.version` – String constraint. The key is `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
  /**
   * The input provided to the new workflow execution.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * If set, specifies the total duration for this workflow execution. This overrides the `defaultExecutionStartToCloseTimeout` specified when registering the workflow type.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this field. If neither this field is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  executionStartToCloseTimeout?: string | undefined;

  /**
   * The task list to use for the decisions of the new (continued) workflow execution.
   *
   * @public
   */
  taskList?: TaskList | undefined;

  /**
   * The task priority that, if set, specifies the priority for the decision tasks for this workflow execution. This overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * Specifies the maximum duration of decision tasks for the new workflow execution. This parameter overrides the `defaultTaskStartToCloseTimout` specified when registering the workflow type using RegisterWorkflowType.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** A task start-to-close timeout for the new workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  taskStartToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * > **Note:** A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.
   *
   * @public
   */
  childPolicy?: ChildPolicy | undefined;

  /**
   * The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
   *
   * @public
   */
  tagList?: string[] | undefined;

  /**
   * The version of the workflow to start.
   *
   * @public
   */
  workflowTypeVersion?: string | undefined;

  /**
   * The IAM role to attach to the new (continued) execution.
   *
   * @public
   */
  lambdaRole?: string | undefined;
}

/**
 * Provides the details of the `ContinueAsNewWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: ContinueAsNewWorkflowExecutionFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `ContinueAsNewWorkflowExecution` decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the [Unix Time format](https://en.wikipedia.org/wiki/Unix_time). For example: `"oldestDate": 1325376070.`
 *
 * @public
 */
export interface ExecutionTimeFilter {
  /**
   * Specifies the oldest start or close date and time to return.
   *
   * @public
   */
  oldestDate: Date | undefined;

  /**
   * Specifies the latest start or close date and time to return.
   *
   * @public
   */
  latestDate?: Date | undefined;
}

/**
 * Used to filter the workflow executions in visibility APIs by their `workflowId`.
 *
 * @public
 */
export interface WorkflowExecutionFilter {
  /**
   * The workflowId to pass of match the criteria of this filter.
   *
   * @public
   */
  workflowId: string | undefined;
}

/**
 * Used to filter the workflow executions in visibility APIs based on a tag.
 *
 * @public
 */
export interface TagFilter {
  /**
   * Specifies the tag that must be associated with the execution for it to meet the filter criteria.
   *
   * Tags may only contain unicode letters, digits, whitespace, or these symbols: `_ . : / = + - @`.
   *
   * @public
   */
  tag: string | undefined;
}

/**
 * Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.
 *
 * @public
 */
export interface WorkflowTypeFilter {
  /**
   * Name of the workflow type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Version of the workflow type.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface CountClosedWorkflowExecutionsInput {
  /**
   * The name of the domain containing the workflow executions to count.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * If specified, only workflow executions that meet the start time criteria of the filter are counted.
   *
   * > **Note:** `startTimeFilter` and `closeTimeFilter` are mutually exclusive. You must specify one of these in a request but not both.
   *
   * @public
   */
  startTimeFilter?: ExecutionTimeFilter | undefined;

  /**
   * If specified, only workflow executions that meet the close time criteria of the filter are counted.
   *
   * > **Note:** `startTimeFilter` and `closeTimeFilter` are mutually exclusive. You must specify one of these in a request but not both.
   *
   * @public
   */
  closeTimeFilter?: ExecutionTimeFilter | undefined;

  /**
   * If specified, only workflow executions matching the `WorkflowId` in the filter are counted.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  executionFilter?: WorkflowExecutionFilter | undefined;

  /**
   * If specified, indicates the type of the workflow executions to be counted.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  typeFilter?: WorkflowTypeFilter | undefined;

  /**
   * If specified, only executions that have a tag that matches the filter are counted.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * If specified, only workflow executions that match this close status are counted. This filter has an affect only if `executionStatus` is specified as `CLOSED`.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  closeStatusFilter?: CloseStatusFilter | undefined;
}

/**
 * Contains the count of workflow executions returned from CountOpenWorkflowExecutions or CountClosedWorkflowExecutions
 *
 * @public
 */
export interface WorkflowExecutionCount {
  /**
   * The number of workflow executions.
   *
   * @public
   */
  count: number | undefined;

  /**
   * If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.
   *
   * @public
   */
  truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface CountOpenWorkflowExecutionsInput {
  /**
   * The name of the domain containing the workflow executions to count.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * Specifies the start time criteria that workflow executions must meet in order to be counted.
   *
   * @public
   */
  startTimeFilter: ExecutionTimeFilter | undefined;

  /**
   * Specifies the type of the workflow executions to be counted.
   *
   * > **Note:** `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  typeFilter?: WorkflowTypeFilter | undefined;

  /**
   * If specified, only executions that have a tag that matches the filter are counted.
   *
   * > **Note:** `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * If specified, only workflow executions matching the `WorkflowId` in the filter are counted.
   *
   * > **Note:** `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  executionFilter?: WorkflowExecutionFilter | undefined;
}

/**
 * @public
 */
export interface CountPendingActivityTasksInput {
  /**
   * The name of the domain that contains the task list.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The name of the task list.
   *
   * @public
   */
  taskList: TaskList | undefined;
}

/**
 * Contains the count of tasks in a task list.
 *
 * @public
 */
export interface PendingTaskCount {
  /**
   * The number of tasks in the task list.
   *
   * @public
   */
  count: number | undefined;

  /**
   * If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.
   *
   * @public
   */
  truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface CountPendingDecisionTasksInput {
  /**
   * The name of the domain that contains the task list.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The name of the task list.
   *
   * @public
   */
  taskList: TaskList | undefined;
}

/**
 * Provides the details of the `FailWorkflowExecution` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface FailWorkflowExecutionDecisionAttributes {
  /**
   * A descriptive reason for the failure that may help in diagnostics.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * Details of the failure.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * Provides the details of the `RecordMarker` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface RecordMarkerDecisionAttributes {
  /**
   * The name of the marker.
   *
   * @public
   */
  markerName: string | undefined;

  /**
   * The details of the marker.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * Provides the details of the `RequestCancelActivityTask` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface RequestCancelActivityTaskDecisionAttributes {
  /**
   * The `activityId` of the activity task to be canceled.
   *
   * @public
   */
  activityId: string | undefined;
}

/**
 * Provides the details of the `RequestCancelExternalWorkflowExecution` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
  /**
   * The `workflowId` of the external workflow execution to cancel.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The `runId` of the external workflow execution to cancel.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The data attached to the event that can be used by the decider in subsequent workflow tasks.
   *
   * @public
   */
  control?: string | undefined;
}

/**
 * Provides the details of the `ScheduleActivityTask` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `activityType.name` – String constraint. The key is `swf:activityType.name`.
 *   - `activityType.version` – String constraint. The key is `swf:activityType.version`.
 *   - `taskList` – String constraint. The key is `swf:taskList.name`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface ScheduleActivityTaskDecisionAttributes {
  /**
   * The type of the activity task to schedule.
   *
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * The `activityId` of the activity task.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The input provided to the activity task.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The maximum duration for this activity task.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** A schedule-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-close timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  scheduleToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the name of the task list in which to schedule the activity task. If not specified, the `defaultTaskList` registered with the activity type is used.
   *
   * > **Note:** A task list for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default task list was specified at registration time then a fault is returned.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  taskList?: TaskList | undefined;

  /**
   * If set, specifies the priority with which the activity task is to be assigned to a worker. This overrides the defaultTaskPriority specified when registering the activity type using RegisterActivityType. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * If set, specifies the maximum duration the activity task can wait to be assigned to a worker. This overrides the default schedule-to-start timeout specified when registering the activity type using RegisterActivityType.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** A schedule-to-start timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-start timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  scheduleToStartTimeout?: string | undefined;

  /**
   * If set, specifies the maximum duration a worker may take to process this activity task. This overrides the default start-to-close timeout specified when registering the activity type using RegisterActivityType.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** A start-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default start-to-close timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  startToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the maximum time before which a worker processing a task of this type must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or returns a result, it is ignored. This overrides the default heartbeat timeout specified when registering the activity type using RegisterActivityType.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  heartbeatTimeout?: string | undefined;
}

/**
 * Decision attributes specified in `scheduleLambdaFunctionDecisionAttributes` within the list of decisions `decisions` passed to RespondDecisionTaskCompleted.
 *
 * @public
 */
export interface ScheduleLambdaFunctionDecisionAttributes {
  /**
   * A string that identifies the Lambda function execution in the event history.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name, or ARN, of the Lambda function to schedule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The optional input data to be supplied to the Lambda function.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The timeout value, in seconds, after which the Lambda function is considered to be failed once it has started. This can be any integer from 1-900 (1s-15m).
   *
   * If no value is supplied, then a default value of 900s is assumed.
   *
   * @public
   */
  startToCloseTimeout?: string | undefined;
}

/**
 * Provides the details of the `SignalExternalWorkflowExecution` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface SignalExternalWorkflowExecutionDecisionAttributes {
  /**
   * The `workflowId` of the workflow execution to be signaled.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The `runId` of the workflow execution to be signaled.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The name of the signal.The target workflow execution uses the signal name and input to process the signal.
   *
   * @public
   */
  signalName: string | undefined;

  /**
   * The input data to be provided with the signal. The target workflow execution uses the signal name and input data to process the signal.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The data attached to the event that can be used by the decider in subsequent decision tasks.
   *
   * @public
   */
  control?: string | undefined;
}

/**
 * Provides the details of the `StartChildWorkflowExecution` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `tagList.member.N` – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.
 *   - `taskList` – String constraint. The key is `swf:taskList.name`.
 *   - `workflowType.name` – String constraint. The key is `swf:workflowType.name`.
 *   - `workflowType.version` – String constraint. The key is `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface StartChildWorkflowExecutionDecisionAttributes {
  /**
   * The type of the workflow execution to be started.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The `workflowId` of the workflow execution.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the child workflow execution.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The input to be provided to the workflow execution.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  executionStartToCloseTimeout?: string | undefined;

  /**
   * The name of the task list to be used for decision tasks of the child workflow execution.
   *
   * > **Note:** A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault is returned.
   *
   * The specified string must not start or end with whitespace. It must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  taskList?: TaskList | undefined;

  /**
   * A task priority that, if set, specifies the priority for a decision task of this workflow execution. This overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the `defaultTaskStartToCloseTimout` specified when registering the workflow type using RegisterWorkflowType.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  taskStartToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the policy to use for the child workflow executions if the workflow execution being started is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * > **Note:** A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.
   *
   * @public
   */
  childPolicy?: ChildPolicy | undefined;

  /**
   * The list of tags to associate with the child workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
   *
   * @public
   */
  tagList?: string[] | undefined;

  /**
   * The IAM role attached to the child workflow execution.
   *
   * @public
   */
  lambdaRole?: string | undefined;
}

/**
 * Provides the details of the `StartTimer` decision.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this decision's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @public
 */
export interface StartTimerDecisionAttributes {
  /**
   * The unique ID of the timer.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  timerId: string | undefined;

  /**
   * The data attached to the event that can be used by the decider in subsequent workflow tasks.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The duration to wait before firing the timer.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`.
   *
   * @public
   */
  startToFireTimeout: string | undefined;
}

/**
 * Specifies a decision made by the decider. A decision can be one of these types:
 *
 * - `CancelTimer` – Cancels a previously started timer and records a `TimerCanceled` event in the history.
 * - `CancelWorkflowExecution` – Closes the workflow execution and records a `WorkflowExecutionCanceled` event in the history.
 * - `CompleteWorkflowExecution` – Closes the workflow execution and records a `WorkflowExecutionCompleted` event in the history .
 * - `ContinueAsNewWorkflowExecution` – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A `WorkflowExecutionContinuedAsNew` event is recorded in the history.
 * - `FailWorkflowExecution` – Closes the workflow execution and records a `WorkflowExecutionFailed` event in the history.
 * - `RecordMarker` – Records a `MarkerRecorded` event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.
 * - `RequestCancelActivityTask` – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to RecordActivityTaskHeartbeat.
 * - `RequestCancelExternalWorkflowExecution` – Requests that a request be made to cancel the specified external workflow execution and records a `RequestCancelExternalWorkflowExecutionInitiated` event in the history.
 * - `ScheduleActivityTask` – Schedules an activity task.
 * - `SignalExternalWorkflowExecution` – Requests a signal to be delivered to the specified external workflow execution and records a `SignalExternalWorkflowExecutionInitiated` event in the history.
 * - `StartChildWorkflowExecution` – Requests that a child workflow execution be started and records a `StartChildWorkflowExecutionInitiated` event in the history. The child workflow execution is a separate workflow execution with its own history.
 * - `StartTimer` – Starts a timer for this workflow execution and records a `TimerStarted` event in the history. This timer fires after the specified delay and record a `TimerFired` event.
 *
 * **Access Control**
 *
 * If you grant permission to use `RespondDecisionTaskCompleted`, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * **Decision Failure**
 *
 * Decisions can fail for several reasons
 *
 * - The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.
 * - A limit on your account was reached.
 * - The decision lacks sufficient permissions.
 *
 * One of the following events might be added to the history to indicate an error. The event attribute's `cause` parameter indicates the cause. If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * - `ScheduleActivityTaskFailed` – A `ScheduleActivityTask` decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.
 * - `RequestCancelActivityTaskFailed` – A `RequestCancelActivityTask` decision failed. This could happen if there is no open activity task with the specified activityId.
 * - `StartTimerFailed` – A `StartTimer` decision failed. This could happen if there is another open timer with the same timerId.
 * - `CancelTimerFailed` – A `CancelTimer` decision failed. This could happen if there is no open timer with the specified timerId.
 * - `StartChildWorkflowExecutionFailed` – A `StartChildWorkflowExecution` decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.
 * - `SignalExternalWorkflowExecutionFailed` – A `SignalExternalWorkflowExecution` decision failed. This could happen if the `workflowID` specified in the decision was incorrect.
 * - `RequestCancelExternalWorkflowExecutionFailed` – A `RequestCancelExternalWorkflowExecution` decision failed. This could happen if the `workflowID` specified in the decision was incorrect.
 * - `CancelWorkflowExecutionFailed` – A `CancelWorkflowExecution` decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.
 * - `CompleteWorkflowExecutionFailed` – A `CompleteWorkflowExecution` decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.
 * - `ContinueAsNewWorkflowExecutionFailed` – A `ContinueAsNewWorkflowExecution` decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.
 * - `FailWorkflowExecutionFailed` – A `FailWorkflowExecution` decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.
 *
 * The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.
 *
 * > **Note:** A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: `CompleteWorkflowExecution`, `FailWorkflowExecution`, `CancelWorkflowExecution` and `ContinueAsNewWorkflowExecution`. An `UnhandledDecision` fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call RespondDecisionTaskCompleted without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.
 *
 * **How to Code a Decision**
 *
 * You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:
 *
 * - `ScheduleActivityTaskDecisionAttributes`
 * - `RequestCancelActivityTaskDecisionAttributes`
 * - `CompleteWorkflowExecutionDecisionAttributes`
 * - `FailWorkflowExecutionDecisionAttributes`
 * - `CancelWorkflowExecutionDecisionAttributes`
 * - `ContinueAsNewWorkflowExecutionDecisionAttributes`
 * - `RecordMarkerDecisionAttributes`
 * - `StartTimerDecisionAttributes`
 * - `CancelTimerDecisionAttributes`
 * - `SignalExternalWorkflowExecutionDecisionAttributes`
 * - `RequestCancelExternalWorkflowExecutionDecisionAttributes`
 * - `StartChildWorkflowExecutionDecisionAttributes`
 *
 * @public
 */
export interface Decision {
  /**
   * Specifies the type of the decision.
   *
   * @public
   */
  decisionType: DecisionType | undefined;

  /**
   * Provides the details of the `ScheduleActivityTask` decision. It isn't set for other decision types.
   *
   * @public
   */
  scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes | undefined;

  /**
   * Provides the details of the `RequestCancelActivityTask` decision. It isn't set for other decision types.
   *
   * @public
   */
  requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes | undefined;

  /**
   * Provides the details of the `CompleteWorkflowExecution` decision. It isn't set for other decision types.
   *
   * @public
   */
  completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes | undefined;

  /**
   * Provides the details of the `FailWorkflowExecution` decision. It isn't set for other decision types.
   *
   * @public
   */
  failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes | undefined;

  /**
   * Provides the details of the `CancelWorkflowExecution` decision. It isn't set for other decision types.
   *
   * @public
   */
  cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes | undefined;

  /**
   * Provides the details of the `ContinueAsNewWorkflowExecution` decision. It isn't set for other decision types.
   *
   * @public
   */
  continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes | undefined;

  /**
   * Provides the details of the `RecordMarker` decision. It isn't set for other decision types.
   *
   * @public
   */
  recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes | undefined;

  /**
   * Provides the details of the `StartTimer` decision. It isn't set for other decision types.
   *
   * @public
   */
  startTimerDecisionAttributes?: StartTimerDecisionAttributes | undefined;

  /**
   * Provides the details of the `CancelTimer` decision. It isn't set for other decision types.
   *
   * @public
   */
  cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes | undefined;

  /**
   * Provides the details of the `SignalExternalWorkflowExecution` decision. It isn't set for other decision types.
   *
   * @public
   */
  signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes | undefined;

  /**
   * Provides the details of the `RequestCancelExternalWorkflowExecution` decision. It isn't set for other decision types.
   *
   * @public
   */
  requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes | undefined;

  /**
   * Provides the details of the `StartChildWorkflowExecution` decision. It isn't set for other decision types.
   *
   * @public
   */
  startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes | undefined;

  /**
   * Provides the details of the `ScheduleLambdaFunction` decision. It isn't set for other decision types.
   *
   * @public
   */
  scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes | undefined;
}

/**
 * Provides the details of the `DecisionTaskCompleted` event.
 *
 * @public
 */
export interface DecisionTaskCompletedEventAttributes {
  /**
   * User defined context for the workflow execution.
   *
   * @public
   */
  executionContext?: string | undefined;

  /**
   * The ID of the `DecisionTaskScheduled` event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `DecisionTaskStarted` event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * Represents a task list.
   *
   * @public
   */
  taskList?: TaskList | undefined;

  /**
   * The maximum amount of time the decision task can wait to be assigned to a worker.
   *
   * @public
   */
  taskListScheduleToStartTimeout?: string | undefined;
}

/**
 * Provides details about the `DecisionTaskScheduled` event.
 *
 * @public
 */
export interface DecisionTaskScheduledEventAttributes {
  /**
   * The name of the task list in which the decision task was scheduled.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * A task priority that, if set, specifies the priority for this decision task. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * The maximum duration for this decision task. The task is considered timed out if it doesn't completed within this duration.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  startToCloseTimeout?: string | undefined;

  /**
   * The maximum amount of time the decision task can wait to be assigned to a worker.
   *
   * @public
   */
  scheduleToStartTimeout?: string | undefined;
}

/**
 * Provides the details of the `DecisionTaskStarted` event.
 *
 * @public
 */
export interface DecisionTaskStartedEventAttributes {
  /**
   * Identity of the decider making the request. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
   *
   * @public
   */
  identity?: string | undefined;

  /**
   * The ID of the `DecisionTaskScheduled` event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;
}

/**
 * Provides the details of the `DecisionTaskTimedOut` event.
 *
 * @public
 */
export interface DecisionTaskTimedOutEventAttributes {
  /**
   * The type of timeout that expired before the decision task could be completed.
   *
   * @public
   */
  timeoutType: DecisionTaskTimeoutType | undefined;

  /**
   * The ID of the `DecisionTaskScheduled` event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `DecisionTaskStarted` event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Provides the details of the `ExternalWorkflowExecutionCancelRequested` event.
 *
 * @public
 */
export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
  /**
   * The external workflow execution to which the cancellation request was delivered.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The ID of the `RequestCancelExternalWorkflowExecutionInitiated` event corresponding to the `RequestCancelExternalWorkflowExecution` decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;
}

/**
 * Provides the details of the `ExternalWorkflowExecutionSignaled` event.
 *
 * @public
 */
export interface ExternalWorkflowExecutionSignaledEventAttributes {
  /**
   * The external workflow execution that the signal was delivered to.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The ID of the `SignalExternalWorkflowExecutionInitiated` event corresponding to the `SignalExternalWorkflowExecution` decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;
}

/**
 * Provides the details of the `FailWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface FailWorkflowExecutionFailedEventAttributes {
  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: FailWorkflowExecutionFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `FailWorkflowExecution` decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `LambdaFunctionCompleted` event. It isn't set for other event types.
 *
 * @public
 */
export interface LambdaFunctionCompletedEventAttributes {
  /**
   * The ID of the `LambdaFunctionScheduled` event that was recorded when this Lambda task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `LambdaFunctionStarted` event recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * The results of the Lambda task.
   *
   * @public
   */
  result?: string | undefined;
}

/**
 * Provides the details of the `LambdaFunctionFailed` event. It isn't set for other event types.
 *
 * @public
 */
export interface LambdaFunctionFailedEventAttributes {
  /**
   * The ID of the `LambdaFunctionScheduled` event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `LambdaFunctionStarted` event recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * The reason provided for the failure.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The details of the failure.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * Provides the details of the `LambdaFunctionScheduled` event. It isn't set for other event types.
 *
 * @public
 */
export interface LambdaFunctionScheduledEventAttributes {
  /**
   * The unique ID of the Lambda task.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the Lambda function.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The input provided to the Lambda task.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The maximum amount of time a worker can take to process the Lambda task.
   *
   * @public
   */
  startToCloseTimeout?: string | undefined;

  /**
   * The ID of the `LambdaFunctionCompleted` event corresponding to the decision that resulted in scheduling this activity task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `LambdaFunctionStarted` event. It isn't set for other event types.
 *
 * @public
 */
export interface LambdaFunctionStartedEventAttributes {
  /**
   * The ID of the `LambdaFunctionScheduled` event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;
}

/**
 * Provides details of the `LambdaFunctionTimedOut` event.
 *
 * @public
 */
export interface LambdaFunctionTimedOutEventAttributes {
  /**
   * The ID of the `LambdaFunctionScheduled` event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId: number | undefined;

  /**
   * The ID of the `ActivityTaskStarted` event that was recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * The type of the timeout that caused this event.
   *
   * @public
   */
  timeoutType?: LambdaFunctionTimeoutType | undefined;
}

/**
 * Provides the details of the `MarkerRecorded` event.
 *
 * @public
 */
export interface MarkerRecordedEventAttributes {
  /**
   * The name of the marker.
   *
   * @public
   */
  markerName: string | undefined;

  /**
   * The details of the marker.
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `RecordMarker` decision that requested this marker. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `RecordMarkerFailed` event.
 *
 * @public
 */
export interface RecordMarkerFailedEventAttributes {
  /**
   * The marker's name.
   *
   * @public
   */
  markerName: string | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: RecordMarkerFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `RecordMarkerFailed` decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `RequestCancelActivityTaskFailed` event.
 *
 * @public
 */
export interface RequestCancelActivityTaskFailedEventAttributes {
  /**
   * The activityId provided in the `RequestCancelActivityTask` decision that failed.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: RequestCancelActivityTaskFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `RequestCancelActivityTask` decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `RequestCancelExternalWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  /**
   * The `workflowId` of the external workflow to which the cancel request was to be delivered.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The `runId` of the external workflow execution.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: RequestCancelExternalWorkflowExecutionFailedCause | undefined;

  /**
   * The ID of the `RequestCancelExternalWorkflowExecutionInitiated` event corresponding to the `RequestCancelExternalWorkflowExecution` decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `RequestCancelExternalWorkflowExecution` decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the workflow execution.
   *
   * @public
   */
  control?: string | undefined;
}

/**
 * Provides the details of the `RequestCancelExternalWorkflowExecutionInitiated` event.
 *
 * @public
 */
export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * The `workflowId` of the external workflow execution to be canceled.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The `runId` of the external workflow execution to be canceled.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `RequestCancelExternalWorkflowExecution` decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * Data attached to the event that can be used by the decider in subsequent workflow tasks.
   *
   * @public
   */
  control?: string | undefined;
}

/**
 * Provides the details of the `ScheduleActivityTaskFailed` event.
 *
 * @public
 */
export interface ScheduleActivityTaskFailedEventAttributes {
  /**
   * The activity type provided in the `ScheduleActivityTask` decision that failed.
   *
   * @public
   */
  activityType: ActivityType | undefined;

  /**
   * The activityId provided in the `ScheduleActivityTask` decision that failed.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: ScheduleActivityTaskFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `ScheduleLambdaFunctionFailed` event. It isn't set for other event types.
 *
 * @public
 */
export interface ScheduleLambdaFunctionFailedEventAttributes {
  /**
   * The ID provided in the `ScheduleLambdaFunction` decision that failed.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the Lambda function.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: ScheduleLambdaFunctionFailedCause | undefined;

  /**
   * The ID of the `LambdaFunctionCompleted` event corresponding to the decision that resulted in scheduling this Lambda task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `SignalExternalWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface SignalExternalWorkflowExecutionFailedEventAttributes {
  /**
   * The `workflowId` of the external workflow execution that the signal was being delivered to.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The `runId` of the external workflow execution that the signal was being delivered to.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: SignalExternalWorkflowExecutionFailedCause | undefined;

  /**
   * The ID of the `SignalExternalWorkflowExecutionInitiated` event corresponding to the `SignalExternalWorkflowExecution` decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `SignalExternalWorkflowExecution` decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the workflow execution.
   *
   * @public
   */
  control?: string | undefined;
}

/**
 * Provides the details of the `SignalExternalWorkflowExecutionInitiated` event.
 *
 * @public
 */
export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * The `workflowId` of the external workflow execution.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The `runId` of the external workflow execution to send the signal to.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The name of the signal.
   *
   * @public
   */
  signalName: string | undefined;

  /**
   * The input provided to the signal.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `SignalExternalWorkflowExecution` decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * Data attached to the event that can be used by the decider in subsequent decision tasks.
   *
   * @public
   */
  control?: string | undefined;
}

/**
 * Provides the details of the `StartChildWorkflowExecutionFailed` event.
 *
 * @public
 */
export interface StartChildWorkflowExecutionFailedEventAttributes {
  /**
   * The workflow type provided in the `StartChildWorkflowExecution` Decision that failed.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** When `cause` is set to `OPERATION_NOT_PERMITTED`, the decision fails because it lacks sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: StartChildWorkflowExecutionFailedCause | undefined;

  /**
   * The `workflowId` of the child workflow execution.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * When the `cause` is `WORKFLOW_ALREADY_RUNNING`, `initiatedEventId` is the ID of the `StartChildWorkflowExecutionInitiated` event that corresponds to the `StartChildWorkflowExecution` Decision to start the workflow execution. You can use this information to diagnose problems by tracing back the chain of events leading up to this event.
   *
   * When the `cause` isn't `WORKFLOW_ALREADY_RUNNING`, `initiatedEventId` is set to `0` because the `StartChildWorkflowExecutionInitiated` event doesn't exist.
   *
   * @public
   */
  initiatedEventId: number | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `StartChildWorkflowExecution` Decision to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the child workflow execution.
   *
   * @public
   */
  control?: string | undefined;
}

/**
 * Provides the details of the `StartChildWorkflowExecutionInitiated` event.
 *
 * @public
 */
export interface StartChildWorkflowExecutionInitiatedEventAttributes {
  /**
   * The `workflowId` of the child workflow execution.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The type of the child workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * Data attached to the event that can be used by the decider in subsequent decision tasks. This data isn't sent to the activity.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The inputs provided to the child workflow execution.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The maximum duration for the child workflow execution. If the workflow execution isn't closed within this duration, it is timed out and force-terminated.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  executionStartToCloseTimeout?: string | undefined;

  /**
   * The name of the task list used for the decision tasks of the child workflow execution.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * The priority assigned for the decision tasks for this workflow execution. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `StartChildWorkflowExecution` Decision to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the cause of events.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * The policy to use for the child workflow executions if this execution gets terminated by explicitly calling the TerminateWorkflowExecution action or due to an expired timeout.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * The maximum duration allowed for the decision tasks for this workflow execution.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  taskStartToCloseTimeout?: string | undefined;

  /**
   * The list of tags to associated with the child workflow execution.
   *
   * @public
   */
  tagList?: string[] | undefined;

  /**
   * The IAM role to attach to the child workflow execution.
   *
   * @public
   */
  lambdaRole?: string | undefined;
}

/**
 * Provides the details of the `StartLambdaFunctionFailed` event. It isn't set for other event types.
 *
 * @public
 */
export interface StartLambdaFunctionFailedEventAttributes {
  /**
   * The ID of the `ActivityTaskScheduled` event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * @public
   */
  scheduledEventId?: number | undefined;

  /**
   * The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because the IAM role attached to the execution lacked sufficient permissions. For details and example IAM policies, see [Lambda Tasks](https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause?: StartLambdaFunctionFailedCause | undefined;

  /**
   * A description that can help diagnose the cause of the fault.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Provides the details of the `StartTimerFailed` event.
 *
 * @public
 */
export interface StartTimerFailedEventAttributes {
  /**
   * The timerId provided in the `StartTimer` decision that failed.
   *
   * @public
   */
  timerId: string | undefined;

  /**
   * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.
   *
   * > **Note:** If `cause` is set to `OPERATION_NOT_PERMITTED`, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  cause: StartTimerFailedCause | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `StartTimer` decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `TimerCanceled` event.
 *
 * @public
 */
export interface TimerCanceledEventAttributes {
  /**
   * The unique ID of the timer that was canceled.
   *
   * @public
   */
  timerId: string | undefined;

  /**
   * The ID of the `TimerStarted` event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `CancelTimer` decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `TimerFired` event.
 *
 * @public
 */
export interface TimerFiredEventAttributes {
  /**
   * The unique ID of the timer that fired.
   *
   * @public
   */
  timerId: string | undefined;

  /**
   * The ID of the `TimerStarted` event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  startedEventId: number | undefined;
}

/**
 * Provides the details of the `TimerStarted` event.
 *
 * @public
 */
export interface TimerStartedEventAttributes {
  /**
   * The unique ID of the timer that was started.
   *
   * @public
   */
  timerId: string | undefined;

  /**
   * Data attached to the event that can be used by the decider in subsequent workflow tasks.
   *
   * @public
   */
  control?: string | undefined;

  /**
   * The duration of time after which the timer fires.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`.
   *
   * @public
   */
  startToFireTimeout: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `StartTimer` decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionCanceled` event.
 *
 * @public
 */
export interface WorkflowExecutionCanceledEventAttributes {
  /**
   * The details of the cancellation.
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `CancelWorkflowExecution` decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionCancelRequested` event.
 *
 * @public
 */
export interface WorkflowExecutionCancelRequestedEventAttributes {
  /**
   * The external workflow execution for which the cancellation was requested.
   *
   * @public
   */
  externalWorkflowExecution?: WorkflowExecution | undefined;

  /**
   * The ID of the `RequestCancelExternalWorkflowExecutionInitiated` event corresponding to the `RequestCancelExternalWorkflowExecution` decision to cancel this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  externalInitiatedEventId?: number | undefined;

  /**
   * If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to cancel child executions.
   *
   * @public
   */
  cause?: WorkflowExecutionCancelRequestedCause | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionCompleted` event.
 *
 * @public
 */
export interface WorkflowExecutionCompletedEventAttributes {
  /**
   * The result produced by the workflow execution upon successful completion.
   *
   * @public
   */
  result?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `CompleteWorkflowExecution` decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionContinuedAsNew` event.
 *
 * @public
 */
export interface WorkflowExecutionContinuedAsNewEventAttributes {
  /**
   * The input provided to the new workflow execution.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `ContinueAsNewWorkflowExecution` decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;

  /**
   * The `runId` of the new workflow execution.
   *
   * @public
   */
  newExecutionRunId: string | undefined;

  /**
   * The total duration allowed for the new workflow execution.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  executionStartToCloseTimeout?: string | undefined;

  /**
   * The task list to use for the decisions of the new (continued) workflow execution.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * The priority of the task to use for the decisions of the new (continued) workflow execution.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * The maximum duration of decision tasks for the new workflow execution.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  taskStartToCloseTimeout?: string | undefined;

  /**
   * The policy to use for the child workflow executions of the new execution if it is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * The list of tags associated with the new workflow execution.
   *
   * @public
   */
  tagList?: string[] | undefined;

  /**
   * The workflow type of this execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The IAM role to attach to the new (continued) workflow execution.
   *
   * @public
   */
  lambdaRole?: string | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionFailed` event.
 *
 * @public
 */
export interface WorkflowExecutionFailedEventAttributes {
  /**
   * The descriptive reason provided for the failure.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The details of the failure.
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The ID of the `DecisionTaskCompleted` event corresponding to the decision task that resulted in the `FailWorkflowExecution` decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  decisionTaskCompletedEventId: number | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionSignaled` event.
 *
 * @public
 */
export interface WorkflowExecutionSignaledEventAttributes {
  /**
   * The name of the signal received. The decider can use the signal name and inputs to determine how to the process the signal.
   *
   * @public
   */
  signalName: string | undefined;

  /**
   * The inputs provided with the signal. The decider can use the signal name and inputs to determine how to process the signal.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The workflow execution that sent the signal. This is set only of the signal was sent by another workflow execution.
   *
   * @public
   */
  externalWorkflowExecution?: WorkflowExecution | undefined;

  /**
   * The ID of the `SignalExternalWorkflowExecutionInitiated` event corresponding to the `SignalExternalWorkflow` decision to signal this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event. This field is set only if the signal was initiated by another workflow execution.
   *
   * @public
   */
  externalInitiatedEventId?: number | undefined;
}

/**
 * Provides details of `WorkflowExecutionStarted` event.
 *
 * @public
 */
export interface WorkflowExecutionStartedEventAttributes {
  /**
   * The input provided to the workflow execution.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The maximum duration for this workflow execution.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  executionStartToCloseTimeout?: string | undefined;

  /**
   * The maximum duration of decision tasks for this workflow type.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  taskStartToCloseTimeout?: string | undefined;

  /**
   * The policy to use for the child workflow executions if this workflow execution is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * The name of the task list for scheduling the decision tasks for this workflow execution.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * The priority of the decision tasks in the workflow execution.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * The workflow type of this execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The list of tags associated with this workflow execution. An execution can have up to 5 tags.
   *
   * @public
   */
  tagList?: string[] | undefined;

  /**
   * If this workflow execution was started due to a `ContinueAsNewWorkflowExecution` decision, then it contains the `runId` of the previous workflow execution that was closed and continued as this execution.
   *
   * @public
   */
  continuedExecutionRunId?: string | undefined;

  /**
   * The source workflow execution that started this workflow execution. The member isn't set if the workflow execution was not started by a workflow.
   *
   * @public
   */
  parentWorkflowExecution?: WorkflowExecution | undefined;

  /**
   * The ID of the `StartChildWorkflowExecutionInitiated` event corresponding to the `StartChildWorkflowExecution` Decision to start this workflow execution. The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   *
   * @public
   */
  parentInitiatedEventId?: number | undefined;

  /**
   * The IAM role attached to the workflow execution.
   *
   * @public
   */
  lambdaRole?: string | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionTerminated` event.
 *
 * @public
 */
export interface WorkflowExecutionTerminatedEventAttributes {
  /**
   * The reason provided for the termination.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The details provided for the termination.
   *
   * @public
   */
  details?: string | undefined;

  /**
   * The policy used for the child workflow executions of this workflow execution.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.
   *
   * @public
   */
  cause?: WorkflowExecutionTerminatedCause | undefined;
}

/**
 * Provides the details of the `WorkflowExecutionTimedOut` event.
 *
 * @public
 */
export interface WorkflowExecutionTimedOutEventAttributes {
  /**
   * The type of timeout that caused this event.
   *
   * @public
   */
  timeoutType: WorkflowExecutionTimeoutType | undefined;

  /**
   * The policy used for the child workflow executions of this workflow execution.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  childPolicy: ChildPolicy | undefined;
}

/**
 * Event within a workflow execution. A history event can be one of these types:
 *
 * - `ActivityTaskCancelRequested` – A `RequestCancelActivityTask` decision was received by the system.
 * - `ActivityTaskCanceled` – The activity task was successfully canceled.
 * - `ActivityTaskCompleted` – An activity worker successfully completed an activity task by calling RespondActivityTaskCompleted.
 * - `ActivityTaskFailed` – An activity worker failed an activity task by calling RespondActivityTaskFailed.
 * - `ActivityTaskScheduled` – An activity task was scheduled for execution.
 * - `ActivityTaskStarted` – The scheduled activity task was dispatched to a worker.
 * - `ActivityTaskTimedOut` – The activity task timed out.
 * - `CancelTimerFailed` – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.
 * - `CancelWorkflowExecutionFailed` – A request to cancel a workflow execution failed.
 * - `ChildWorkflowExecutionCanceled` – A child workflow execution, started by this workflow execution, was canceled and closed.
 * - `ChildWorkflowExecutionCompleted` – A child workflow execution, started by this workflow execution, completed successfully and was closed.
 * - `ChildWorkflowExecutionFailed` – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.
 * - `ChildWorkflowExecutionStarted` – A child workflow execution was successfully started.
 * - `ChildWorkflowExecutionTerminated` – A child workflow execution, started by this workflow execution, was terminated.
 * - `ChildWorkflowExecutionTimedOut` – A child workflow execution, started by this workflow execution, timed out and was closed.
 * - `CompleteWorkflowExecutionFailed` – The workflow execution failed to complete.
 * - `ContinueAsNewWorkflowExecutionFailed` – The workflow execution failed to complete after being continued as a new workflow execution.
 * - `DecisionTaskCompleted` – The decider successfully completed a decision task by calling RespondDecisionTaskCompleted.
 * - `DecisionTaskScheduled` – A decision task was scheduled for the workflow execution.
 * - `DecisionTaskStarted` – The decision task was dispatched to a decider.
 * - `DecisionTaskTimedOut` – The decision task timed out.
 * - `ExternalWorkflowExecutionCancelRequested` – Request to cancel an external workflow execution was successfully delivered to the target execution.
 * - `ExternalWorkflowExecutionSignaled` – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.
 * - `FailWorkflowExecutionFailed` – A request to mark a workflow execution as failed, itself failed.
 * - `MarkerRecorded` – A marker was recorded in the workflow history as the result of a `RecordMarker` decision.
 * - `RecordMarkerFailed` – A `RecordMarker` decision was returned as failed.
 * - `RequestCancelActivityTaskFailed` – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.
 * - `RequestCancelExternalWorkflowExecutionFailed` – Request to cancel an external workflow execution failed.
 * - `RequestCancelExternalWorkflowExecutionInitiated` – A request was made to request the cancellation of an external workflow execution.
 * - `ScheduleActivityTaskFailed` – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.
 * - `SignalExternalWorkflowExecutionFailed` – The request to signal an external workflow execution failed.
 * - `SignalExternalWorkflowExecutionInitiated` – A request to signal an external workflow was made.
 * - `StartActivityTaskFailed` – A scheduled activity task failed to start.
 * - `StartChildWorkflowExecutionFailed` – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.
 * - `StartChildWorkflowExecutionInitiated` – A request was made to start a child workflow execution.
 * - `StartTimerFailed` – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.
 * - `TimerCanceled` – A timer, previously started for this workflow execution, was successfully canceled.
 * - `TimerFired` – A timer, previously started for this workflow execution, fired.
 * - `TimerStarted` – A timer was started for the workflow execution due to a `StartTimer` decision.
 * - `WorkflowExecutionCancelRequested` – A request to cancel this workflow execution was made.
 * - `WorkflowExecutionCanceled` – The workflow execution was successfully canceled and closed.
 * - `WorkflowExecutionCompleted` – The workflow execution was closed due to successful completion.
 * - `WorkflowExecutionContinuedAsNew` – The workflow execution was closed and a new execution of the same type was created with the same workflowId.
 * - `WorkflowExecutionFailed` – The workflow execution closed due to a failure.
 * - `WorkflowExecutionSignaled` – An external signal was received for the workflow execution.
 * - `WorkflowExecutionStarted` – The workflow execution was started.
 * - `WorkflowExecutionTerminated` – The workflow execution was terminated.
 * - `WorkflowExecutionTimedOut` – The workflow execution was closed because a time out was exceeded.
 *
 * @public
 */
export interface HistoryEvent {
  /**
   * The date and time when the event occurred.
   *
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * The type of the history event.
   *
   * @public
   */
  eventType: EventType | undefined;

  /**
   * The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.
   *
   * @public
   */
  eventId: number | undefined;

  /**
   * If the event is of type `WorkflowExecutionStarted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionCompleted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes | undefined;

  /**
   * If the event is of type `CompleteWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `FailWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionTimedOut` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionCanceled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes | undefined;

  /**
   * If the event is of type `CancelWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionContinuedAsNew` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes | undefined;

  /**
   * If the event is of type `ContinueAsNewWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionTerminated` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionCancelRequested` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes | undefined;

  /**
   * If the event is of type `DecisionTaskScheduled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes | undefined;

  /**
   * If the event is of type `DecisionTaskStarted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes | undefined;

  /**
   * If the event is of type `DecisionTaskCompleted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes | undefined;

  /**
   * If the event is of type `DecisionTaskTimedOut` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes | undefined;

  /**
   * If the event is of type `ActivityTaskScheduled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes | undefined;

  /**
   * If the event is of type `ActivityTaskStarted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes | undefined;

  /**
   * If the event is of type `ActivityTaskCompleted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes | undefined;

  /**
   * If the event is of type `ActivityTaskFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes | undefined;

  /**
   * If the event is of type `ActivityTaskTimedOut` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes | undefined;

  /**
   * If the event is of type `ActivityTaskCanceled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes | undefined;

  /**
   * If the event is of type `ActivityTaskcancelRequested` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes | undefined;

  /**
   * If the event is of type `WorkflowExecutionSignaled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes | undefined;

  /**
   * If the event is of type `MarkerRecorded` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  markerRecordedEventAttributes?: MarkerRecordedEventAttributes | undefined;

  /**
   * If the event is of type `DecisionTaskFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes | undefined;

  /**
   * If the event is of type `TimerStarted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  timerStartedEventAttributes?: TimerStartedEventAttributes | undefined;

  /**
   * If the event is of type `TimerFired` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  timerFiredEventAttributes?: TimerFiredEventAttributes | undefined;

  /**
   * If the event is of type `TimerCanceled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  timerCanceledEventAttributes?: TimerCanceledEventAttributes | undefined;

  /**
   * If the event is of type `StartChildWorkflowExecutionInitiated` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes | undefined;

  /**
   * If the event is of type `ChildWorkflowExecutionStarted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes | undefined;

  /**
   * If the event is of type `ChildWorkflowExecutionCompleted` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes | undefined;

  /**
   * If the event is of type `ChildWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `ChildWorkflowExecutionTimedOut` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes | undefined;

  /**
   * If the event is of type `ChildWorkflowExecutionCanceled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes | undefined;

  /**
   * If the event is of type `ChildWorkflowExecutionTerminated` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes | undefined;

  /**
   * If the event is of type `SignalExternalWorkflowExecutionInitiated` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes | undefined;

  /**
   * If the event is of type `ExternalWorkflowExecutionSignaled` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes | undefined;

  /**
   * If the event is of type `SignalExternalWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `ExternalWorkflowExecutionCancelRequested` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes | undefined;

  /**
   * If the event is of type `RequestCancelExternalWorkflowExecutionInitiated` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | undefined;

  /**
   * If the event is of type `RequestCancelExternalWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * If the event is of type `ScheduleActivityTaskFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes | undefined;

  /**
   * If the event is of type `RequestCancelActivityTaskFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes | undefined;

  /**
   * If the event is of type `StartTimerFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  startTimerFailedEventAttributes?: StartTimerFailedEventAttributes | undefined;

  /**
   * If the event is of type `CancelTimerFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes | undefined;

  /**
   * If the event is of type `StartChildWorkflowExecutionFailed` then this member is set and provides detailed information about the event. It isn't set for other event types.
   *
   * @public
   */
  startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes | undefined;

  /**
   * Provides the details of the `LambdaFunctionScheduled` event. It isn't set for other event types.
   *
   * @public
   */
  lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes | undefined;

  /**
   * Provides the details of the `LambdaFunctionStarted` event. It isn't set for other event types.
   *
   * @public
   */
  lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes | undefined;

  /**
   * Provides the details of the `LambdaFunctionCompleted` event. It isn't set for other event types.
   *
   * @public
   */
  lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes | undefined;

  /**
   * Provides the details of the `LambdaFunctionFailed` event. It isn't set for other event types.
   *
   * @public
   */
  lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes | undefined;

  /**
   * Provides the details of the `LambdaFunctionTimedOut` event. It isn't set for other event types.
   *
   * @public
   */
  lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes | undefined;

  /**
   * Provides the details of the `ScheduleLambdaFunctionFailed` event. It isn't set for other event types.
   *
   * @public
   */
  scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes | undefined;

  /**
   * Provides the details of the `StartLambdaFunctionFailed` event. It isn't set for other event types.
   *
   * @public
   */
  startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes | undefined;
}

/**
 * A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
 *
 * @public
 */
export interface DecisionTask {
  /**
   * The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * The ID of the `DecisionTaskStarted` event recorded in the history.
   *
   * @public
   */
  startedEventId: number | undefined;

  /**
   * The workflow execution for which this decision task was created.
   *
   * @public
   */
  workflowExecution: WorkflowExecution | undefined;

  /**
   * The type of the workflow execution for which this decision task was created.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * A paginated list of history events of the workflow execution. The decider uses this during the processing of the decision task.
   *
   * @public
   */
  events: HistoryEvent[] | undefined;

  /**
   * If a `NextPageToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `nextPageToken`. Keep all other arguments unchanged.
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was processed by the decider. This can be used to determine the events in the history new since the last decision task received by the decider.
   *
   * @public
   */
  previousStartedEventId?: number | undefined;
}

/**
 * @public
 */
export interface DeleteActivityTypeInput {
  /**
   * The name of the domain in which the activity type is registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The activity type to delete.
   *
   * @public
   */
  activityType: ActivityType | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowTypeInput {
  /**
   * The name of the domain in which the workflow type is registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The workflow type to delete.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;
}

/**
 * @public
 */
export interface DeprecateActivityTypeInput {
  /**
   * The name of the domain in which the activity type is registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The activity type to deprecate.
   *
   * @public
   */
  activityType: ActivityType | undefined;
}

/**
 * @public
 */
export interface DeprecateDomainInput {
  /**
   * The name of the domain to deprecate.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeprecateWorkflowTypeInput {
  /**
   * The name of the domain in which the workflow type is registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The workflow type to deprecate.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;
}

/**
 * @public
 */
export interface DescribeActivityTypeInput {
  /**
   * The name of the domain in which the activity type is registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The activity type to get information about. Activity types are identified by the `name` and `version` that were supplied when the activity was registered.
   *
   * @public
   */
  activityType: ActivityType | undefined;
}

/**
 * @public
 */
export interface DescribeDomainInput {
  /**
   * The name of the domain to describe.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Contains the configuration settings of a domain.
 *
 * @public
 */
export interface DomainConfiguration {
  /**
   * The retention period for workflow executions in this domain.
   *
   * @public
   */
  workflowExecutionRetentionPeriodInDays: string | undefined;
}

/**
 * Contains general information about a domain.
 *
 * @public
 */
export interface DomainInfo {
  /**
   * The name of the domain. This name is unique within the account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the domain:
   *
   * - `REGISTERED` – The domain is properly registered and available. You can use this domain for registering types and creating new workflow executions.
   * - `DEPRECATED` – The domain was deprecated using DeprecateDomain, but is still in use. You should not create new workflow executions in this domain.
   *
   * @public
   */
  status: RegistrationStatus | undefined;

  /**
   * The description of the domain provided through RegisterDomain.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the domain.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * Contains details of a domain.
 *
 * @public
 */
export interface DomainDetail {
  /**
   * The basic information about a domain, such as its name, status, and description.
   *
   * @public
   */
  domainInfo: DomainInfo | undefined;

  /**
   * The domain configuration. Currently, this includes only the domain's retention period.
   *
   * @public
   */
  configuration: DomainConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeWorkflowExecutionInput {
  /**
   * The name of the domain containing the workflow execution.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The workflow execution to describe.
   *
   * @public
   */
  execution: WorkflowExecution | undefined;
}

/**
 * The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
 *
 * @public
 */
export interface WorkflowExecutionConfiguration {
  /**
   * The maximum duration allowed for decision tasks for this workflow execution.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  taskStartToCloseTimeout: string | undefined;

  /**
   * The total duration for this workflow execution.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  executionStartToCloseTimeout: string | undefined;

  /**
   * The task list used for the decision tasks generated for this workflow execution.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * The policy to use for the child workflow executions if this workflow execution is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  childPolicy: ChildPolicy | undefined;

  /**
   * The IAM role attached to the child workflow execution.
   *
   * @public
   */
  lambdaRole?: string | undefined;
}

/**
 * Contains information about a workflow execution.
 *
 * @public
 */
export interface WorkflowExecutionInfo {
  /**
   * The workflow execution this information is about.
   *
   * @public
   */
  execution: WorkflowExecution | undefined;

  /**
   * The type of the workflow execution.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The time when the execution was started.
   *
   * @public
   */
  startTimestamp: Date | undefined;

  /**
   * The time when the workflow execution was closed. Set only if the execution status is CLOSED.
   *
   * @public
   */
  closeTimestamp?: Date | undefined;

  /**
   * The current status of the execution.
   *
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * If the execution status is closed then this specifies how the execution was closed:
   *
   * - `COMPLETED` – the execution was successfully completed.
   * - `CANCELED` – the execution was canceled.Cancellation allows the implementation to gracefully clean up before the execution is closed.
   * - `TERMINATED` – the execution was force terminated.
   * - `FAILED` – the execution failed to complete.
   * - `TIMED_OUT` – the execution did not complete in the alloted time and was automatically timed out.
   * - `CONTINUED_AS_NEW` – the execution is logically continued. This means the current execution was completed and a new execution was started to carry on the workflow.
   *
   * @public
   */
  closeStatus?: CloseStatus | undefined;

  /**
   * If this workflow execution is a child of another execution then contains the workflow execution that started this execution.
   *
   * @public
   */
  parent?: WorkflowExecution | undefined;

  /**
   * The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.
   *
   * @public
   */
  tagList?: string[] | undefined;

  /**
   * Set to true if a cancellation is requested for this workflow execution.
   *
   * @public
   */
  cancelRequested?: boolean | undefined;
}

/**
 * Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
 *
 * @public
 */
export interface WorkflowExecutionOpenCounts {
  /**
   * The count of activity tasks whose status is `OPEN`.
   *
   * @public
   */
  openActivityTasks: number | undefined;

  /**
   * The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision task.
   *
   * @public
   */
  openDecisionTasks: number | undefined;

  /**
   * The count of timers started by this workflow execution that have not fired yet.
   *
   * @public
   */
  openTimers: number | undefined;

  /**
   * The count of child workflow executions whose status is `OPEN`.
   *
   * @public
   */
  openChildWorkflowExecutions: number | undefined;

  /**
   * The count of Lambda tasks whose status is `OPEN`.
   *
   * @public
   */
  openLambdaFunctions?: number | undefined;
}

/**
 * Contains details about a workflow execution.
 *
 * @public
 */
export interface WorkflowExecutionDetail {
  /**
   * Information about the workflow execution.
   *
   * @public
   */
  executionInfo: WorkflowExecutionInfo | undefined;

  /**
   * The configuration settings for this workflow execution including timeout values, tasklist etc.
   *
   * @public
   */
  executionConfiguration: WorkflowExecutionConfiguration | undefined;

  /**
   * The number of tasks for this workflow execution. This includes open and closed tasks of all types.
   *
   * @public
   */
  openCounts: WorkflowExecutionOpenCounts | undefined;

  /**
   * The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.
   *
   * @public
   */
  latestActivityTaskTimestamp?: Date | undefined;

  /**
   * The latest executionContext provided by the decider for this workflow execution. A decider can provide an executionContext (a free-form string) when closing a decision task using RespondDecisionTaskCompleted.
   *
   * @public
   */
  latestExecutionContext?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkflowTypeInput {
  /**
   * The name of the domain in which this workflow type is registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The workflow type to describe.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;
}

/**
 * The configuration settings of a workflow type.
 *
 * @public
 */
export interface WorkflowTypeConfiguration {
  /**
   * The default maximum duration, specified when registering the workflow type, that a decision task for executions of this workflow type might take before returning completion or failure. If the task doesn'tdo close in the specified time then the task is automatically timed out and rescheduled. If the decider eventually reports a completion or failure, it is ignored. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the `StartChildWorkflowExecution` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskStartToCloseTimeout?: string | undefined;

  /**
   * The default maximum duration, specified when registering the workflow type, for executions of this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the `StartChildWorkflowExecution` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultExecutionStartToCloseTimeout?: string | undefined;

  /**
   * The default task list, specified when registering the workflow type, for decisions tasks scheduled for workflow executions of this type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the `StartChildWorkflowExecution` Decision.
   *
   * @public
   */
  defaultTaskList?: TaskList | undefined;

  /**
   * The default task priority, specified when registering the workflow type, for all decision tasks of this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the `StartChildWorkflowExecution` decision.
   *
   * Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  defaultTaskPriority?: string | undefined;

  /**
   * The default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the `StartChildWorkflowExecution` Decision.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  defaultChildPolicy?: ChildPolicy | undefined;

  /**
   * The default IAM role attached to this workflow type.
   *
   * > **Note:** Executions of this workflow type need IAM roles to invoke Lambda functions. If you don't specify an IAM role when starting this workflow type, the default Lambda role is attached to the execution. For more information, see [https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html](https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  defaultLambdaRole?: string | undefined;
}

/**
 * Contains information about a workflow type.
 *
 * @public
 */
export interface WorkflowTypeInfo {
  /**
   * The workflow type this information is about.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The current status of the workflow type.
   *
   * @public
   */
  status: RegistrationStatus | undefined;

  /**
   * The description of the type registered through RegisterWorkflowType.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date when this type was registered.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * If the type is in deprecated state, then it is set to the date when the type was deprecated.
   *
   * @public
   */
  deprecationDate?: Date | undefined;
}

/**
 * Contains details about a workflow type.
 *
 * @public
 */
export interface WorkflowTypeDetail {
  /**
   * General information about the workflow type.
   *
   * The status of the workflow type (returned in the WorkflowTypeInfo structure) can be one of the following.
   *
   * - `REGISTERED` – The type is registered and available. Workers supporting this type should be running.
   * - `DEPRECATED` – The type was deprecated using DeprecateWorkflowType, but is still in use. You should keep workers supporting this type running. You cannot create new workflow executions of this type.
   *
   * @public
   */
  typeInfo: WorkflowTypeInfo | undefined;

  /**
   * Configuration settings of the workflow type registered through RegisterWorkflowType
   *
   * @public
   */
  configuration: WorkflowTypeConfiguration | undefined;
}

/**
 * Contains a paginated collection of DomainInfo structures.
 *
 * @public
 */
export interface DomainInfos {
  /**
   * A list of DomainInfo structures.
   *
   * @public
   */
  domainInfos: DomainInfo[] | undefined;

  /**
   * If a `NextPageToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `nextPageToken`. Keep all other arguments unchanged.
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowExecutionHistoryInput {
  /**
   * The name of the domain containing the workflow execution.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * Specifies the workflow execution for which to return the history.
   *
   * @public
   */
  execution: WorkflowExecution | undefined;

  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a `400` error: "`Specified token has exceeded its maximum lifetime`".
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. Use `nextPageToken` to obtain further pages of results.
   *
   * @public
   */
  maximumPageSize?: number | undefined;

  /**
   * When set to `true`, returns the events in reverse order. By default the results are returned in ascending order of the `eventTimeStamp` of the events.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;
}

/**
 * Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
 *
 * @public
 */
export interface History {
  /**
   * The list of history events.
   *
   * @public
   */
  events: HistoryEvent[] | undefined;

  /**
   * If a `NextPageToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `nextPageToken`. Keep all other arguments unchanged.
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActivityTypesInput {
  /**
   * The name of the domain in which the activity types have been registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * If specified, only lists the activity types that have this name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies the registration status of the activity types to list.
   *
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a `400` error: "`Specified token has exceeded its maximum lifetime`".
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. Use `nextPageToken` to obtain further pages of results.
   *
   * @public
   */
  maximumPageSize?: number | undefined;

  /**
   * When set to `true`, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by `name` of the activity types.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;
}

/**
 * @public
 */
export interface ListClosedWorkflowExecutionsInput {
  /**
   * The name of the domain that contains the workflow executions to list.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * If specified, the workflow executions are included in the returned results based on whether their start times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their start times.
   *
   * > **Note:** `startTimeFilter` and `closeTimeFilter` are mutually exclusive. You must specify one of these in a request but not both.
   *
   * @public
   */
  startTimeFilter?: ExecutionTimeFilter | undefined;

  /**
   * If specified, the workflow executions are included in the returned results based on whether their close times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their close times.
   *
   * > **Note:** `startTimeFilter` and `closeTimeFilter` are mutually exclusive. You must specify one of these in a request but not both.
   *
   * @public
   */
  closeTimeFilter?: ExecutionTimeFilter | undefined;

  /**
   * If specified, only workflow executions matching the workflow ID specified in the filter are returned.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  executionFilter?: WorkflowExecutionFilter | undefined;

  /**
   * If specified, only workflow executions that match this *close status* are listed. For example, if TERMINATED is specified, then only TERMINATED workflow executions are listed.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  closeStatusFilter?: CloseStatusFilter | undefined;

  /**
   * If specified, only executions of the type specified in the filter are returned.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  typeFilter?: WorkflowTypeFilter | undefined;

  /**
   * If specified, only executions that have the matching tag are listed.
   *
   * > **Note:** `closeStatusFilter`, `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a `400` error: "`Specified token has exceeded its maximum lifetime`".
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. Use `nextPageToken` to obtain further pages of results.
   *
   * @public
   */
  maximumPageSize?: number | undefined;

  /**
   * When set to `true`, returns the results in reverse order. By default the results are returned in descending order of the start or the close time of the executions.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;
}

/**
 * Contains a paginated list of information about workflow executions.
 *
 * @public
 */
export interface WorkflowExecutionInfos {
  /**
   * The list of workflow information structures.
   *
   * @public
   */
  executionInfos: WorkflowExecutionInfo[] | undefined;

  /**
   * If a `NextPageToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `nextPageToken`. Keep all other arguments unchanged.
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a `400` error: "`Specified token has exceeded its maximum lifetime`".
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * Specifies the registration status of the domains to list.
   *
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * The maximum number of results that are returned per call. Use `nextPageToken` to obtain further pages of results.
   *
   * @public
   */
  maximumPageSize?: number | undefined;

  /**
   * When set to `true`, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by `name` of the domains.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;
}

/**
 * @public
 */
export interface ListOpenWorkflowExecutionsInput {
  /**
   * The name of the domain that contains the workflow executions to list.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * Workflow executions are included in the returned results based on whether their start times are within the range specified by this filter.
   *
   * @public
   */
  startTimeFilter: ExecutionTimeFilter | undefined;

  /**
   * If specified, only executions of the type specified in the filter are returned.
   *
   * > **Note:** `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  typeFilter?: WorkflowTypeFilter | undefined;

  /**
   * If specified, only executions that have the matching tag are listed.
   *
   * > **Note:** `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a `400` error: "`Specified token has exceeded its maximum lifetime`".
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. Use `nextPageToken` to obtain further pages of results.
   *
   * @public
   */
  maximumPageSize?: number | undefined;

  /**
   * When set to `true`, returns the results in reverse order. By default the results are returned in descending order of the start time of the executions.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;

  /**
   * If specified, only workflow executions matching the workflow ID specified in the filter are returned.
   *
   * > **Note:** `executionFilter`, `typeFilter` and `tagFilter` are mutually exclusive. You can specify at most one of these in a request.
   *
   * @public
   */
  executionFilter?: WorkflowExecutionFilter | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) for the Amazon SWF domain.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.
 *
 * Tags may only contain unicode letters, digits, whitespace, or these symbols: `_ . : / = + - @`.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The key of a tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of a tag.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * An array of tags associated with the domain.
   *
   * @public
   */
  tags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowTypesInput {
  /**
   * The name of the domain in which the workflow types have been registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * If specified, lists the workflow type with this name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies the registration status of the workflow types to list.
   *
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a `400` error: "`Specified token has exceeded its maximum lifetime`".
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. Use `nextPageToken` to obtain further pages of results.
   *
   * @public
   */
  maximumPageSize?: number | undefined;

  /**
   * When set to `true`, returns the results in reverse order. By default the results are returned in ascending alphabetical order of the `name` of the workflow types.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;
}

/**
 * Contains a paginated list of information structures about workflow types.
 *
 * @public
 */
export interface WorkflowTypeInfos {
  /**
   * The list of workflow type information.
   *
   * @public
   */
  typeInfos: WorkflowTypeInfo[] | undefined;

  /**
   * If a `NextPageToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `nextPageToken`. Keep all other arguments unchanged.
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface PollForActivityTaskInput {
  /**
   * The name of the domain that contains the task lists being polled.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * Specifies the task list to poll for activity tasks.
   *
   * The specified string must not start or end with whitespace. It must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * Identity of the worker making the request, recorded in the `ActivityTaskStarted` event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
   *
   * @public
   */
  identity?: string | undefined;
}

/**
 * @public
 */
export interface PollForDecisionTaskInput {
  /**
   * The name of the domain containing the task lists to poll.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * Specifies the task list to poll for decision tasks.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  taskList: TaskList | undefined;

  /**
   * Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
   *
   * @public
   */
  identity?: string | undefined;

  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a `400` error: "`Specified token has exceeded its maximum lifetime`".
   *
   * The configured `maximumPageSize` determines how many results can be returned in a single call.
   *
   * > **Note:** The `nextPageToken` returned by this action cannot be used with GetWorkflowExecutionHistory to get the next page. You must call PollForDecisionTask again (with the `nextPageToken`) to retrieve the next page of history records. Calling PollForDecisionTask with a `nextPageToken` doesn't return a new decision task.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. Use `nextPageToken` to obtain further pages of results.
   *
   * This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
   *
   * @public
   */
  maximumPageSize?: number | undefined;

  /**
   * When set to `true`, returns the events in reverse order. By default the results are returned in ascending order of the `eventTimestamp` of the events.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;

  /**
   * When set to `true`, returns the events with `eventTimestamp` greater than or equal to `eventTimestamp` of the most recent `DecisionTaskStarted` event. By default, this parameter is set to `false`.
   *
   * @public
   */
  startAtPreviousStartedEvent?: boolean | undefined;
}

/**
 * @public
 */
export interface RecordActivityTaskHeartbeatInput {
  /**
   * The `taskToken` of the ActivityTask.
   *
   * > **Important:** `taskToken` is generated by the service and should be treated as an opaque value. If the task is passed to another process, its `taskToken` must also be passed. This enables it to provide its progress and respond with results.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * If specified, contains details about the progress of the task.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * @public
 */
export interface RegisterActivityTypeInput {
  /**
   * The name of the domain in which this activity is to be registered.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The name of the activity type within the domain.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the activity type.
   *
   * > **Note:** The activity type consists of the name and version, the combination of which must be unique within the domain.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A textual description of the activity type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * If set, specifies the default maximum duration that a worker can take to process tasks of this activity type. This default can be overridden when scheduling an activity task using the `ScheduleActivityTask` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskStartToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the default maximum time before which a worker processing a task of this type must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. This default can be overridden when scheduling an activity task using the `ScheduleActivityTask` Decision. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an `UnknownResource` fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskHeartbeatTimeout?: string | undefined;

  /**
   * If set, specifies the default task list to use for scheduling tasks of this activity type. This default task list is used if a task list isn't provided when a task is scheduled through the `ScheduleActivityTask` Decision.
   *
   * @public
   */
  defaultTaskList?: TaskList | undefined;

  /**
   * The default task priority to assign to the activity type. If not assigned, then `0` is used. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *in the *Amazon SWF Developer Guide*.*.
   *
   * @public
   */
  defaultTaskPriority?: string | undefined;

  /**
   * If set, specifies the default maximum duration that a task of this activity type can wait before being assigned to a worker. This default can be overridden when scheduling an activity task using the `ScheduleActivityTask` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskScheduleToStartTimeout?: string | undefined;

  /**
   * If set, specifies the default maximum duration for a task of this activity type. This default can be overridden when scheduling an activity task using the `ScheduleActivityTask` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskScheduleToCloseTimeout?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDomainInput {
  /**
   * Name of the domain to register. The name must be unique in the region that the domain is registered in.
   *
   * The specified string must not start or end with whitespace. It must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A text description of the domain.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The duration (in days) that records and histories of workflow executions on the domain should be kept by the service. After the retention period, the workflow execution isn't available in the results of visibility calls.
   *
   * If you pass the value `NONE` or `0` (zero), then the workflow execution history isn't retained. As soon as the workflow execution completes, the execution record and its history are deleted.
   *
   * The maximum workflow execution retention period is 90 days. For more information about Amazon SWF service limits, see: [Amazon SWF Service Limits](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-limits.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  workflowExecutionRetentionPeriodInDays: string | undefined;

  /**
   * Tags to be added when registering a domain.
   *
   * Tags may only contain unicode letters, digits, whitespace, or these symbols: `_ . : / = + - @`.
   *
   * @public
   */
  tags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface RegisterWorkflowTypeInput {
  /**
   * The name of the domain in which to register the workflow type.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The name of the workflow type.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the workflow type.
   *
   * > **Note:** The workflow type consists of the name and version, the combination of which must be unique within the domain. To get a list of all currently registered workflow types, use the ListWorkflowTypes action.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  version: string | undefined;

  /**
   * Textual description of the workflow type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * If set, specifies the default maximum duration of decision tasks for this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the `StartChildWorkflowExecution` Decision.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * @public
   */
  defaultTaskStartToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the default maximum duration for executions of this workflow type. You can override this default when starting an execution through the StartWorkflowExecution Action or `StartChildWorkflowExecution` Decision.
   *
   * The duration is specified in seconds; an integer greater than or equal to 0. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for `defaultExecutionStartToCloseTimeout`; there is a one-year max limit on the time that a workflow execution can run. Exceeding this limit always causes the workflow execution to time out.
   *
   * @public
   */
  defaultExecutionStartToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the default task list to use for scheduling decision tasks for executions of this workflow type. This default is used only if a task list isn't provided when starting the execution through the StartWorkflowExecution Action or `StartChildWorkflowExecution` Decision.
   *
   * @public
   */
  defaultTaskList?: TaskList | undefined;

  /**
   * The default task priority to assign to the workflow type. If not assigned, then `0` is used. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  defaultTaskPriority?: string | undefined;

  /**
   * If set, specifies the default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the `StartChildWorkflowExecution` Decision.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * @public
   */
  defaultChildPolicy?: ChildPolicy | undefined;

  /**
   * The default IAM role attached to this workflow type.
   *
   * > **Note:** Executions of this workflow type need IAM roles to invoke Lambda functions. If you don't specify an IAM role when you start this workflow type, the default Lambda role is attached to the execution. For more information, see [https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html](https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  defaultLambdaRole?: string | undefined;
}

/**
 * @public
 */
export interface RequestCancelWorkflowExecutionInput {
  /**
   * The name of the domain containing the workflow execution to cancel.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The workflowId of the workflow execution to cancel.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The runId of the workflow execution to cancel.
   *
   * @public
   */
  runId?: string | undefined;
}

/**
 * @public
 */
export interface RespondActivityTaskCanceledInput {
  /**
   * The `taskToken` of the ActivityTask.
   *
   * > **Important:** `taskToken` is generated by the service and should be treated as an opaque value. If the task is passed to another process, its `taskToken` must also be passed. This enables it to provide its progress and respond with results.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * Information about the cancellation.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * @public
 */
export interface RespondActivityTaskCompletedInput {
  /**
   * The `taskToken` of the ActivityTask.
   *
   * > **Important:** `taskToken` is generated by the service and should be treated as an opaque value. If the task is passed to another process, its `taskToken` must also be passed. This enables it to provide its progress and respond with results.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * The result of the activity task. It is a free form string that is implementation specific.
   *
   * @public
   */
  result?: string | undefined;
}

/**
 * @public
 */
export interface RespondActivityTaskFailedInput {
  /**
   * The `taskToken` of the ActivityTask.
   *
   * > **Important:** `taskToken` is generated by the service and should be treated as an opaque value. If the task is passed to another process, its `taskToken` must also be passed. This enables it to provide its progress and respond with results.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * Description of the error that may assist in diagnostics.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * Detailed information about the failure.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * Input data for a TaskCompleted response to a decision task.
 *
 * @public
 */
export interface RespondDecisionTaskCompletedInput {
  /**
   * The `taskToken` from the DecisionTask.
   *
   * > **Important:** `taskToken` is generated by the service and should be treated as an opaque value. If the task is passed to another process, its `taskToken` must also be passed. This enables it to provide its progress and respond with results.
   *
   * @public
   */
  taskToken: string | undefined;

  /**
   * The list of decisions (possibly empty) made by the decider while processing this decision task. See the docs for the Decision structure for details.
   *
   * @public
   */
  decisions?: Decision[] | undefined;

  /**
   * User defined context to add to workflow execution.
   *
   * @public
   */
  executionContext?: string | undefined;

  /**
   * The task list to use for the future decision tasks of this workflow execution. This list overrides the original task list you specified while starting the workflow execution.
   *
   * @public
   */
  taskList?: TaskList | undefined;

  /**
   * Specifies a timeout (in seconds) for the task list override. When this parameter is missing, the task list override is permanent. This parameter makes it possible to temporarily override the task list. If a decision task scheduled on the override task list is not started within the timeout, the decision task will time out. Amazon SWF will revert the override and schedule a new decision task to the original task list.
   *
   * If a decision task scheduled on the override task list is started within the timeout, but not completed within the start-to-close timeout, Amazon SWF will also revert the override and schedule a new decision task to the original task list.
   *
   * @public
   */
  taskListScheduleToStartTimeout?: string | undefined;
}

/**
 * Specifies the `runId` of a workflow execution.
 *
 * @public
 */
export interface Run {
  /**
   * The `runId` of a workflow execution. This ID is generated by the service and can be used to uniquely identify the workflow execution within a domain.
   *
   * @public
   */
  runId?: string | undefined;
}

/**
 * @public
 */
export interface SignalWorkflowExecutionInput {
  /**
   * The name of the domain containing the workflow execution to signal.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The workflowId of the workflow execution to signal.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The runId of the workflow execution to signal.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The name of the signal. This name must be meaningful to the target workflow.
   *
   * @public
   */
  signalName: string | undefined;

  /**
   * Data to attach to the `WorkflowExecutionSignaled` event in the target workflow execution's history.
   *
   * @public
   */
  input?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowExecutionInput {
  /**
   * The name of the domain in which the workflow execution is created.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The user defined identifier associated with the workflow execution. You can use this to associate a custom identifier with the workflow execution. You may specify the same identifier if a workflow execution is logically a *restart* of a previous execution. You cannot have two open workflow executions with the same `workflowId` at the same time within the same domain.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The type of the workflow to start.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;

  /**
   * The task list to use for the decision tasks generated for this workflow execution. This overrides the `defaultTaskList` specified when registering the workflow type.
   *
   * > **Note:** A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault is returned.
   *
   * The specified string must not contain a `:` (colon), `/` (slash), `|` (vertical bar), or any control characters (`\u0000-\u001f` | `\u007f-\u009f`). Also, it must *not* be the literal string `arn`.
   *
   * @public
   */
  taskList?: TaskList | undefined;

  /**
   * The task priority to use for this workflow execution. This overrides any default priority that was assigned when the workflow type was registered. If not set, then the default task priority for the workflow type is used. Valid values are integers that range from Java's `Integer.MIN_VALUE` (-2147483648) to `Integer.MAX_VALUE` (2147483647). Higher numbers indicate higher priority.
   *
   * For more information about setting task priority, see [Setting Task Priority](https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  taskPriority?: string | undefined;

  /**
   * The input for the workflow execution. This is a free form string which should be meaningful to the workflow you are starting. This `input` is made available to the new workflow execution in the `WorkflowExecutionStarted` history event.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type.
   *
   * The duration is specified in seconds; an integer greater than or equal to `0`. Exceeding this limit causes the workflow execution to time out. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for this timeout; there is a one-year max limit on the time that a workflow execution can run.
   *
   * > **Note:** An execution start-to-close timeout must be specified either through this parameter or as a default when the workflow type is registered. If neither this parameter nor a default execution start-to-close timeout is specified, a fault is returned.
   *
   * @public
   */
  executionStartToCloseTimeout?: string | undefined;

  /**
   * The list of tags to associate with the workflow execution. You can specify a maximum of 5 tags. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
   *
   * @public
   */
  tagList?: string[] | undefined;

  /**
   * Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the `defaultTaskStartToCloseTimout` specified when registering the workflow type using RegisterWorkflowType.
   *
   * The duration is specified in seconds, an integer greater than or equal to `0`. You can use `NONE` to specify unlimited duration.
   *
   * > **Note:** A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.
   *
   * @public
   */
  taskStartToCloseTimeout?: string | undefined;

  /**
   * If set, specifies the policy to use for the child workflow executions of this workflow execution if it is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * > **Note:** A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.
   *
   * @public
   */
  childPolicy?: ChildPolicy | undefined;

  /**
   * The IAM role to attach to this workflow execution.
   *
   * > **Note:** Executions of this workflow type need IAM roles to invoke Lambda functions. If you don't attach an IAM role, any attempt to schedule a Lambda task fails. This results in a `ScheduleLambdaFunctionFailed` history event. For more information, see [https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html](https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html) in the *Amazon SWF Developer Guide*.
   *
   * @public
   */
  lambdaRole?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) for the Amazon SWF domain.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tags to add to a domain.
   *
   * Tags may only contain unicode letters, digits, whitespace, or these symbols: `_ . : / = + - @`.
   *
   * @public
   */
  tags: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkflowExecutionInput {
  /**
   * The domain of the workflow execution to terminate.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The workflowId of the workflow execution to terminate.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The runId of the workflow execution to terminate.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * A descriptive reason for terminating the workflow execution.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * Details for terminating the workflow execution.
   *
   * @public
   */
  details?: string | undefined;

  /**
   * If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated. This policy overrides the child policy specified for the workflow execution at registration time or when starting the execution.
   *
   * The supported child policies are:
   *
   * - `TERMINATE` – The child executions are terminated.
   * - `REQUEST_CANCEL` – A request to cancel is attempted for each child execution by recording a `WorkflowExecutionCancelRequested` event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
   * - `ABANDON` – No action is taken. The child executions continue to run.
   *
   * > **Note:** A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.
   *
   * @public
   */
  childPolicy?: ChildPolicy | undefined;
}

/**
 * @public
 */
export interface UndeprecateActivityTypeInput {
  /**
   * The name of the domain of the deprecated activity type.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The activity type to undeprecate.
   *
   * @public
   */
  activityType: ActivityType | undefined;
}

/**
 * @public
 */
export interface UndeprecateDomainInput {
  /**
   * The name of the domain of the deprecated workflow type.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface UndeprecateWorkflowTypeInput {
  /**
   * The name of the domain of the deprecated workflow type.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The name of the domain of the deprecated workflow type.
   *
   * @public
   */
  workflowType: WorkflowType | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) for the Amazon SWF domain.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tags to remove from the Amazon SWF domain.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}
