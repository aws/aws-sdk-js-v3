import {
  _ActivityFailedEventDetails,
  _UnmarshalledActivityFailedEventDetails
} from "./_ActivityFailedEventDetails";
import {
  _ActivityScheduleFailedEventDetails,
  _UnmarshalledActivityScheduleFailedEventDetails
} from "./_ActivityScheduleFailedEventDetails";
import {
  _ActivityScheduledEventDetails,
  _UnmarshalledActivityScheduledEventDetails
} from "./_ActivityScheduledEventDetails";
import {
  _ActivityStartedEventDetails,
  _UnmarshalledActivityStartedEventDetails
} from "./_ActivityStartedEventDetails";
import {
  _ActivitySucceededEventDetails,
  _UnmarshalledActivitySucceededEventDetails
} from "./_ActivitySucceededEventDetails";
import {
  _ActivityTimedOutEventDetails,
  _UnmarshalledActivityTimedOutEventDetails
} from "./_ActivityTimedOutEventDetails";
import {
  _TaskFailedEventDetails,
  _UnmarshalledTaskFailedEventDetails
} from "./_TaskFailedEventDetails";
import {
  _TaskScheduledEventDetails,
  _UnmarshalledTaskScheduledEventDetails
} from "./_TaskScheduledEventDetails";
import {
  _TaskStartFailedEventDetails,
  _UnmarshalledTaskStartFailedEventDetails
} from "./_TaskStartFailedEventDetails";
import {
  _TaskStartedEventDetails,
  _UnmarshalledTaskStartedEventDetails
} from "./_TaskStartedEventDetails";
import {
  _TaskSubmitFailedEventDetails,
  _UnmarshalledTaskSubmitFailedEventDetails
} from "./_TaskSubmitFailedEventDetails";
import {
  _TaskSubmittedEventDetails,
  _UnmarshalledTaskSubmittedEventDetails
} from "./_TaskSubmittedEventDetails";
import {
  _TaskSucceededEventDetails,
  _UnmarshalledTaskSucceededEventDetails
} from "./_TaskSucceededEventDetails";
import {
  _TaskTimedOutEventDetails,
  _UnmarshalledTaskTimedOutEventDetails
} from "./_TaskTimedOutEventDetails";
import {
  _ExecutionFailedEventDetails,
  _UnmarshalledExecutionFailedEventDetails
} from "./_ExecutionFailedEventDetails";
import {
  _ExecutionStartedEventDetails,
  _UnmarshalledExecutionStartedEventDetails
} from "./_ExecutionStartedEventDetails";
import {
  _ExecutionSucceededEventDetails,
  _UnmarshalledExecutionSucceededEventDetails
} from "./_ExecutionSucceededEventDetails";
import {
  _ExecutionAbortedEventDetails,
  _UnmarshalledExecutionAbortedEventDetails
} from "./_ExecutionAbortedEventDetails";
import {
  _ExecutionTimedOutEventDetails,
  _UnmarshalledExecutionTimedOutEventDetails
} from "./_ExecutionTimedOutEventDetails";
import {
  _LambdaFunctionFailedEventDetails,
  _UnmarshalledLambdaFunctionFailedEventDetails
} from "./_LambdaFunctionFailedEventDetails";
import {
  _LambdaFunctionScheduleFailedEventDetails,
  _UnmarshalledLambdaFunctionScheduleFailedEventDetails
} from "./_LambdaFunctionScheduleFailedEventDetails";
import {
  _LambdaFunctionScheduledEventDetails,
  _UnmarshalledLambdaFunctionScheduledEventDetails
} from "./_LambdaFunctionScheduledEventDetails";
import {
  _LambdaFunctionStartFailedEventDetails,
  _UnmarshalledLambdaFunctionStartFailedEventDetails
} from "./_LambdaFunctionStartFailedEventDetails";
import {
  _LambdaFunctionSucceededEventDetails,
  _UnmarshalledLambdaFunctionSucceededEventDetails
} from "./_LambdaFunctionSucceededEventDetails";
import {
  _LambdaFunctionTimedOutEventDetails,
  _UnmarshalledLambdaFunctionTimedOutEventDetails
} from "./_LambdaFunctionTimedOutEventDetails";
import {
  _StateEnteredEventDetails,
  _UnmarshalledStateEnteredEventDetails
} from "./_StateEnteredEventDetails";
import {
  _StateExitedEventDetails,
  _UnmarshalledStateExitedEventDetails
} from "./_StateExitedEventDetails";

/**
 * <p>Contains details about the events of an execution.</p>
 */
export interface _HistoryEvent {
  /**
   * <p>The date and time the event occurred.</p>
   */
  timestamp: Date | string | number;

  /**
   * <p>The type of the event.</p>
   */
  type:
    | "ActivityFailed"
    | "ActivityScheduleFailed"
    | "ActivityScheduled"
    | "ActivityStarted"
    | "ActivitySucceeded"
    | "ActivityTimedOut"
    | "ChoiceStateEntered"
    | "ChoiceStateExited"
    | "TaskFailed"
    | "TaskScheduled"
    | "TaskStartFailed"
    | "TaskStarted"
    | "TaskSubmitFailed"
    | "TaskSubmitted"
    | "TaskSucceeded"
    | "TaskTimedOut"
    | "ExecutionFailed"
    | "ExecutionStarted"
    | "ExecutionSucceeded"
    | "ExecutionAborted"
    | "ExecutionTimedOut"
    | "FailStateEntered"
    | "LambdaFunctionFailed"
    | "LambdaFunctionScheduleFailed"
    | "LambdaFunctionScheduled"
    | "LambdaFunctionStartFailed"
    | "LambdaFunctionStarted"
    | "LambdaFunctionSucceeded"
    | "LambdaFunctionTimedOut"
    | "SucceedStateEntered"
    | "SucceedStateExited"
    | "TaskStateAborted"
    | "TaskStateEntered"
    | "TaskStateExited"
    | "PassStateEntered"
    | "PassStateExited"
    | "ParallelStateAborted"
    | "ParallelStateEntered"
    | "ParallelStateExited"
    | "ParallelStateFailed"
    | "ParallelStateStarted"
    | "ParallelStateSucceeded"
    | "WaitStateAborted"
    | "WaitStateEntered"
    | "WaitStateExited"
    | string;

  /**
   * <p>The id of the event. Events are numbered sequentially, starting at one.</p>
   */
  id: number;

  /**
   * <p>The id of the previous event.</p>
   */
  previousEventId?: number;

  /**
   * <p>Contains details about an activity that failed during an execution.</p>
   */
  activityFailedEventDetails?: _ActivityFailedEventDetails;

  /**
   * <p>Contains details about an activity schedule event that failed during an execution.</p>
   */
  activityScheduleFailedEventDetails?: _ActivityScheduleFailedEventDetails;

  /**
   * <p>Contains details about an activity scheduled during an execution.</p>
   */
  activityScheduledEventDetails?: _ActivityScheduledEventDetails;

  /**
   * <p>Contains details about the start of an activity during an execution.</p>
   */
  activityStartedEventDetails?: _ActivityStartedEventDetails;

  /**
   * <p>Contains details about an activity that successfully terminated during an execution.</p>
   */
  activitySucceededEventDetails?: _ActivitySucceededEventDetails;

  /**
   * <p>Contains details about an activity timeout that occurred during an execution.</p>
   */
  activityTimedOutEventDetails?: _ActivityTimedOutEventDetails;

  /**
   * <p>Contains details about the failure of a task.</p>
   */
  taskFailedEventDetails?: _TaskFailedEventDetails;

  /**
   * <p>Contains details about a task that was scheduled.</p>
   */
  taskScheduledEventDetails?: _TaskScheduledEventDetails;

  /**
   * <p>Contains details about a task that failed to start.</p>
   */
  taskStartFailedEventDetails?: _TaskStartFailedEventDetails;

  /**
   * <p>Contains details about a task that was started.</p>
   */
  taskStartedEventDetails?: _TaskStartedEventDetails;

  /**
   * <p>Contains details about a task that where the submit failed.</p>
   */
  taskSubmitFailedEventDetails?: _TaskSubmitFailedEventDetails;

  /**
   * <p>Contains details about a submitted task.</p>
   */
  taskSubmittedEventDetails?: _TaskSubmittedEventDetails;

  /**
   * <p>Contains details about a task that succeeded.</p>
   */
  taskSucceededEventDetails?: _TaskSucceededEventDetails;

  /**
   * <p>Contains details about a task that timed out.</p>
   */
  taskTimedOutEventDetails?: _TaskTimedOutEventDetails;

  /**
   * <p>Contains details about an execution failure event.</p>
   */
  executionFailedEventDetails?: _ExecutionFailedEventDetails;

  /**
   * <p>Contains details about the start of the execution.</p>
   */
  executionStartedEventDetails?: _ExecutionStartedEventDetails;

  /**
   * <p>Contains details about the successful termination of the execution.</p>
   */
  executionSucceededEventDetails?: _ExecutionSucceededEventDetails;

  /**
   * <p>Contains details about an abort of an execution.</p>
   */
  executionAbortedEventDetails?: _ExecutionAbortedEventDetails;

  /**
   * <p>Contains details about the execution timeout that occurred during the execution.</p>
   */
  executionTimedOutEventDetails?: _ExecutionTimedOutEventDetails;

  /**
   * <p>Contains details about a lambda function that failed during an execution.</p>
   */
  lambdaFunctionFailedEventDetails?: _LambdaFunctionFailedEventDetails;

  /**
   * <p>Contains details about a failed lambda function schedule event that occurred during an execution.</p>
   */
  lambdaFunctionScheduleFailedEventDetails?: _LambdaFunctionScheduleFailedEventDetails;

  /**
   * <p>Contains details about a lambda function scheduled during an execution.</p>
   */
  lambdaFunctionScheduledEventDetails?: _LambdaFunctionScheduledEventDetails;

  /**
   * <p>Contains details about a lambda function that failed to start during an execution.</p>
   */
  lambdaFunctionStartFailedEventDetails?: _LambdaFunctionStartFailedEventDetails;

  /**
   * <p>Contains details about a lambda function that terminated successfully during an execution.</p>
   */
  lambdaFunctionSucceededEventDetails?: _LambdaFunctionSucceededEventDetails;

  /**
   * <p>Contains details about a lambda function timeout that occurred during an execution.</p>
   */
  lambdaFunctionTimedOutEventDetails?: _LambdaFunctionTimedOutEventDetails;

  /**
   * <p>Contains details about a state entered during an execution.</p>
   */
  stateEnteredEventDetails?: _StateEnteredEventDetails;

  /**
   * <p>Contains details about an exit from a state during an execution.</p>
   */
  stateExitedEventDetails?: _StateExitedEventDetails;
}

export interface _UnmarshalledHistoryEvent extends _HistoryEvent {
  /**
   * <p>The date and time the event occurred.</p>
   */
  timestamp: Date;

  /**
   * <p>Contains details about an activity that failed during an execution.</p>
   */
  activityFailedEventDetails?: _UnmarshalledActivityFailedEventDetails;

  /**
   * <p>Contains details about an activity schedule event that failed during an execution.</p>
   */
  activityScheduleFailedEventDetails?: _UnmarshalledActivityScheduleFailedEventDetails;

  /**
   * <p>Contains details about an activity scheduled during an execution.</p>
   */
  activityScheduledEventDetails?: _UnmarshalledActivityScheduledEventDetails;

  /**
   * <p>Contains details about the start of an activity during an execution.</p>
   */
  activityStartedEventDetails?: _UnmarshalledActivityStartedEventDetails;

  /**
   * <p>Contains details about an activity that successfully terminated during an execution.</p>
   */
  activitySucceededEventDetails?: _UnmarshalledActivitySucceededEventDetails;

  /**
   * <p>Contains details about an activity timeout that occurred during an execution.</p>
   */
  activityTimedOutEventDetails?: _UnmarshalledActivityTimedOutEventDetails;

  /**
   * <p>Contains details about the failure of a task.</p>
   */
  taskFailedEventDetails?: _UnmarshalledTaskFailedEventDetails;

  /**
   * <p>Contains details about a task that was scheduled.</p>
   */
  taskScheduledEventDetails?: _UnmarshalledTaskScheduledEventDetails;

  /**
   * <p>Contains details about a task that failed to start.</p>
   */
  taskStartFailedEventDetails?: _UnmarshalledTaskStartFailedEventDetails;

  /**
   * <p>Contains details about a task that was started.</p>
   */
  taskStartedEventDetails?: _UnmarshalledTaskStartedEventDetails;

  /**
   * <p>Contains details about a task that where the submit failed.</p>
   */
  taskSubmitFailedEventDetails?: _UnmarshalledTaskSubmitFailedEventDetails;

  /**
   * <p>Contains details about a submitted task.</p>
   */
  taskSubmittedEventDetails?: _UnmarshalledTaskSubmittedEventDetails;

  /**
   * <p>Contains details about a task that succeeded.</p>
   */
  taskSucceededEventDetails?: _UnmarshalledTaskSucceededEventDetails;

  /**
   * <p>Contains details about a task that timed out.</p>
   */
  taskTimedOutEventDetails?: _UnmarshalledTaskTimedOutEventDetails;

  /**
   * <p>Contains details about an execution failure event.</p>
   */
  executionFailedEventDetails?: _UnmarshalledExecutionFailedEventDetails;

  /**
   * <p>Contains details about the start of the execution.</p>
   */
  executionStartedEventDetails?: _UnmarshalledExecutionStartedEventDetails;

  /**
   * <p>Contains details about the successful termination of the execution.</p>
   */
  executionSucceededEventDetails?: _UnmarshalledExecutionSucceededEventDetails;

  /**
   * <p>Contains details about an abort of an execution.</p>
   */
  executionAbortedEventDetails?: _UnmarshalledExecutionAbortedEventDetails;

  /**
   * <p>Contains details about the execution timeout that occurred during the execution.</p>
   */
  executionTimedOutEventDetails?: _UnmarshalledExecutionTimedOutEventDetails;

  /**
   * <p>Contains details about a lambda function that failed during an execution.</p>
   */
  lambdaFunctionFailedEventDetails?: _UnmarshalledLambdaFunctionFailedEventDetails;

  /**
   * <p>Contains details about a failed lambda function schedule event that occurred during an execution.</p>
   */
  lambdaFunctionScheduleFailedEventDetails?: _UnmarshalledLambdaFunctionScheduleFailedEventDetails;

  /**
   * <p>Contains details about a lambda function scheduled during an execution.</p>
   */
  lambdaFunctionScheduledEventDetails?: _UnmarshalledLambdaFunctionScheduledEventDetails;

  /**
   * <p>Contains details about a lambda function that failed to start during an execution.</p>
   */
  lambdaFunctionStartFailedEventDetails?: _UnmarshalledLambdaFunctionStartFailedEventDetails;

  /**
   * <p>Contains details about a lambda function that terminated successfully during an execution.</p>
   */
  lambdaFunctionSucceededEventDetails?: _UnmarshalledLambdaFunctionSucceededEventDetails;

  /**
   * <p>Contains details about a lambda function timeout that occurred during an execution.</p>
   */
  lambdaFunctionTimedOutEventDetails?: _UnmarshalledLambdaFunctionTimedOutEventDetails;

  /**
   * <p>Contains details about a state entered during an execution.</p>
   */
  stateEnteredEventDetails?: _UnmarshalledStateEnteredEventDetails;

  /**
   * <p>Contains details about an exit from a state during an execution.</p>
   */
  stateExitedEventDetails?: _UnmarshalledStateExitedEventDetails;
}
