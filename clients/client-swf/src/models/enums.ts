// smithy-typescript generated code
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
