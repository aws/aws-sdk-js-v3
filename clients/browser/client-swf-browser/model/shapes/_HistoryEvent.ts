import { _WorkflowExecutionStartedEventAttributes } from "./_WorkflowExecutionStartedEventAttributes";
import { _WorkflowExecutionCompletedEventAttributes } from "./_WorkflowExecutionCompletedEventAttributes";
import { _CompleteWorkflowExecutionFailedEventAttributes } from "./_CompleteWorkflowExecutionFailedEventAttributes";
import { _WorkflowExecutionFailedEventAttributes } from "./_WorkflowExecutionFailedEventAttributes";
import { _FailWorkflowExecutionFailedEventAttributes } from "./_FailWorkflowExecutionFailedEventAttributes";
import { _WorkflowExecutionTimedOutEventAttributes } from "./_WorkflowExecutionTimedOutEventAttributes";
import { _WorkflowExecutionCanceledEventAttributes } from "./_WorkflowExecutionCanceledEventAttributes";
import { _CancelWorkflowExecutionFailedEventAttributes } from "./_CancelWorkflowExecutionFailedEventAttributes";
import { _WorkflowExecutionContinuedAsNewEventAttributes } from "./_WorkflowExecutionContinuedAsNewEventAttributes";
import { _ContinueAsNewWorkflowExecutionFailedEventAttributes } from "./_ContinueAsNewWorkflowExecutionFailedEventAttributes";
import { _WorkflowExecutionTerminatedEventAttributes } from "./_WorkflowExecutionTerminatedEventAttributes";
import { _WorkflowExecutionCancelRequestedEventAttributes } from "./_WorkflowExecutionCancelRequestedEventAttributes";
import { _DecisionTaskScheduledEventAttributes } from "./_DecisionTaskScheduledEventAttributes";
import { _DecisionTaskStartedEventAttributes } from "./_DecisionTaskStartedEventAttributes";
import { _DecisionTaskCompletedEventAttributes } from "./_DecisionTaskCompletedEventAttributes";
import { _DecisionTaskTimedOutEventAttributes } from "./_DecisionTaskTimedOutEventAttributes";
import { _ActivityTaskScheduledEventAttributes } from "./_ActivityTaskScheduledEventAttributes";
import { _ActivityTaskStartedEventAttributes } from "./_ActivityTaskStartedEventAttributes";
import { _ActivityTaskCompletedEventAttributes } from "./_ActivityTaskCompletedEventAttributes";
import { _ActivityTaskFailedEventAttributes } from "./_ActivityTaskFailedEventAttributes";
import { _ActivityTaskTimedOutEventAttributes } from "./_ActivityTaskTimedOutEventAttributes";
import { _ActivityTaskCanceledEventAttributes } from "./_ActivityTaskCanceledEventAttributes";
import { _ActivityTaskCancelRequestedEventAttributes } from "./_ActivityTaskCancelRequestedEventAttributes";
import { _WorkflowExecutionSignaledEventAttributes } from "./_WorkflowExecutionSignaledEventAttributes";
import { _MarkerRecordedEventAttributes } from "./_MarkerRecordedEventAttributes";
import { _RecordMarkerFailedEventAttributes } from "./_RecordMarkerFailedEventAttributes";
import { _TimerStartedEventAttributes } from "./_TimerStartedEventAttributes";
import { _TimerFiredEventAttributes } from "./_TimerFiredEventAttributes";
import { _TimerCanceledEventAttributes } from "./_TimerCanceledEventAttributes";
import { _StartChildWorkflowExecutionInitiatedEventAttributes } from "./_StartChildWorkflowExecutionInitiatedEventAttributes";
import { _ChildWorkflowExecutionStartedEventAttributes } from "./_ChildWorkflowExecutionStartedEventAttributes";
import { _ChildWorkflowExecutionCompletedEventAttributes } from "./_ChildWorkflowExecutionCompletedEventAttributes";
import { _ChildWorkflowExecutionFailedEventAttributes } from "./_ChildWorkflowExecutionFailedEventAttributes";
import { _ChildWorkflowExecutionTimedOutEventAttributes } from "./_ChildWorkflowExecutionTimedOutEventAttributes";
import { _ChildWorkflowExecutionCanceledEventAttributes } from "./_ChildWorkflowExecutionCanceledEventAttributes";
import { _ChildWorkflowExecutionTerminatedEventAttributes } from "./_ChildWorkflowExecutionTerminatedEventAttributes";
import { _SignalExternalWorkflowExecutionInitiatedEventAttributes } from "./_SignalExternalWorkflowExecutionInitiatedEventAttributes";
import { _ExternalWorkflowExecutionSignaledEventAttributes } from "./_ExternalWorkflowExecutionSignaledEventAttributes";
import { _SignalExternalWorkflowExecutionFailedEventAttributes } from "./_SignalExternalWorkflowExecutionFailedEventAttributes";
import { _ExternalWorkflowExecutionCancelRequestedEventAttributes } from "./_ExternalWorkflowExecutionCancelRequestedEventAttributes";
import { _RequestCancelExternalWorkflowExecutionInitiatedEventAttributes } from "./_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes";
import { _RequestCancelExternalWorkflowExecutionFailedEventAttributes } from "./_RequestCancelExternalWorkflowExecutionFailedEventAttributes";
import { _ScheduleActivityTaskFailedEventAttributes } from "./_ScheduleActivityTaskFailedEventAttributes";
import { _RequestCancelActivityTaskFailedEventAttributes } from "./_RequestCancelActivityTaskFailedEventAttributes";
import { _StartTimerFailedEventAttributes } from "./_StartTimerFailedEventAttributes";
import { _CancelTimerFailedEventAttributes } from "./_CancelTimerFailedEventAttributes";
import { _StartChildWorkflowExecutionFailedEventAttributes } from "./_StartChildWorkflowExecutionFailedEventAttributes";
import { _LambdaFunctionScheduledEventAttributes } from "./_LambdaFunctionScheduledEventAttributes";
import { _LambdaFunctionStartedEventAttributes } from "./_LambdaFunctionStartedEventAttributes";
import { _LambdaFunctionCompletedEventAttributes } from "./_LambdaFunctionCompletedEventAttributes";
import { _LambdaFunctionFailedEventAttributes } from "./_LambdaFunctionFailedEventAttributes";
import { _LambdaFunctionTimedOutEventAttributes } from "./_LambdaFunctionTimedOutEventAttributes";
import { _ScheduleLambdaFunctionFailedEventAttributes } from "./_ScheduleLambdaFunctionFailedEventAttributes";
import { _StartLambdaFunctionFailedEventAttributes } from "./_StartLambdaFunctionFailedEventAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HistoryEvent: _Structure_ = {
  type: "structure",
  required: ["eventTimestamp", "eventType", "eventId"],
  members: {
    eventTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    eventType: {
      shape: {
        type: "string"
      }
    },
    eventId: {
      shape: {
        type: "integer"
      }
    },
    workflowExecutionStartedEventAttributes: {
      shape: _WorkflowExecutionStartedEventAttributes
    },
    workflowExecutionCompletedEventAttributes: {
      shape: _WorkflowExecutionCompletedEventAttributes
    },
    completeWorkflowExecutionFailedEventAttributes: {
      shape: _CompleteWorkflowExecutionFailedEventAttributes
    },
    workflowExecutionFailedEventAttributes: {
      shape: _WorkflowExecutionFailedEventAttributes
    },
    failWorkflowExecutionFailedEventAttributes: {
      shape: _FailWorkflowExecutionFailedEventAttributes
    },
    workflowExecutionTimedOutEventAttributes: {
      shape: _WorkflowExecutionTimedOutEventAttributes
    },
    workflowExecutionCanceledEventAttributes: {
      shape: _WorkflowExecutionCanceledEventAttributes
    },
    cancelWorkflowExecutionFailedEventAttributes: {
      shape: _CancelWorkflowExecutionFailedEventAttributes
    },
    workflowExecutionContinuedAsNewEventAttributes: {
      shape: _WorkflowExecutionContinuedAsNewEventAttributes
    },
    continueAsNewWorkflowExecutionFailedEventAttributes: {
      shape: _ContinueAsNewWorkflowExecutionFailedEventAttributes
    },
    workflowExecutionTerminatedEventAttributes: {
      shape: _WorkflowExecutionTerminatedEventAttributes
    },
    workflowExecutionCancelRequestedEventAttributes: {
      shape: _WorkflowExecutionCancelRequestedEventAttributes
    },
    decisionTaskScheduledEventAttributes: {
      shape: _DecisionTaskScheduledEventAttributes
    },
    decisionTaskStartedEventAttributes: {
      shape: _DecisionTaskStartedEventAttributes
    },
    decisionTaskCompletedEventAttributes: {
      shape: _DecisionTaskCompletedEventAttributes
    },
    decisionTaskTimedOutEventAttributes: {
      shape: _DecisionTaskTimedOutEventAttributes
    },
    activityTaskScheduledEventAttributes: {
      shape: _ActivityTaskScheduledEventAttributes
    },
    activityTaskStartedEventAttributes: {
      shape: _ActivityTaskStartedEventAttributes
    },
    activityTaskCompletedEventAttributes: {
      shape: _ActivityTaskCompletedEventAttributes
    },
    activityTaskFailedEventAttributes: {
      shape: _ActivityTaskFailedEventAttributes
    },
    activityTaskTimedOutEventAttributes: {
      shape: _ActivityTaskTimedOutEventAttributes
    },
    activityTaskCanceledEventAttributes: {
      shape: _ActivityTaskCanceledEventAttributes
    },
    activityTaskCancelRequestedEventAttributes: {
      shape: _ActivityTaskCancelRequestedEventAttributes
    },
    workflowExecutionSignaledEventAttributes: {
      shape: _WorkflowExecutionSignaledEventAttributes
    },
    markerRecordedEventAttributes: {
      shape: _MarkerRecordedEventAttributes
    },
    recordMarkerFailedEventAttributes: {
      shape: _RecordMarkerFailedEventAttributes
    },
    timerStartedEventAttributes: {
      shape: _TimerStartedEventAttributes
    },
    timerFiredEventAttributes: {
      shape: _TimerFiredEventAttributes
    },
    timerCanceledEventAttributes: {
      shape: _TimerCanceledEventAttributes
    },
    startChildWorkflowExecutionInitiatedEventAttributes: {
      shape: _StartChildWorkflowExecutionInitiatedEventAttributes
    },
    childWorkflowExecutionStartedEventAttributes: {
      shape: _ChildWorkflowExecutionStartedEventAttributes
    },
    childWorkflowExecutionCompletedEventAttributes: {
      shape: _ChildWorkflowExecutionCompletedEventAttributes
    },
    childWorkflowExecutionFailedEventAttributes: {
      shape: _ChildWorkflowExecutionFailedEventAttributes
    },
    childWorkflowExecutionTimedOutEventAttributes: {
      shape: _ChildWorkflowExecutionTimedOutEventAttributes
    },
    childWorkflowExecutionCanceledEventAttributes: {
      shape: _ChildWorkflowExecutionCanceledEventAttributes
    },
    childWorkflowExecutionTerminatedEventAttributes: {
      shape: _ChildWorkflowExecutionTerminatedEventAttributes
    },
    signalExternalWorkflowExecutionInitiatedEventAttributes: {
      shape: _SignalExternalWorkflowExecutionInitiatedEventAttributes
    },
    externalWorkflowExecutionSignaledEventAttributes: {
      shape: _ExternalWorkflowExecutionSignaledEventAttributes
    },
    signalExternalWorkflowExecutionFailedEventAttributes: {
      shape: _SignalExternalWorkflowExecutionFailedEventAttributes
    },
    externalWorkflowExecutionCancelRequestedEventAttributes: {
      shape: _ExternalWorkflowExecutionCancelRequestedEventAttributes
    },
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes: {
      shape: _RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
    },
    requestCancelExternalWorkflowExecutionFailedEventAttributes: {
      shape: _RequestCancelExternalWorkflowExecutionFailedEventAttributes
    },
    scheduleActivityTaskFailedEventAttributes: {
      shape: _ScheduleActivityTaskFailedEventAttributes
    },
    requestCancelActivityTaskFailedEventAttributes: {
      shape: _RequestCancelActivityTaskFailedEventAttributes
    },
    startTimerFailedEventAttributes: {
      shape: _StartTimerFailedEventAttributes
    },
    cancelTimerFailedEventAttributes: {
      shape: _CancelTimerFailedEventAttributes
    },
    startChildWorkflowExecutionFailedEventAttributes: {
      shape: _StartChildWorkflowExecutionFailedEventAttributes
    },
    lambdaFunctionScheduledEventAttributes: {
      shape: _LambdaFunctionScheduledEventAttributes
    },
    lambdaFunctionStartedEventAttributes: {
      shape: _LambdaFunctionStartedEventAttributes
    },
    lambdaFunctionCompletedEventAttributes: {
      shape: _LambdaFunctionCompletedEventAttributes
    },
    lambdaFunctionFailedEventAttributes: {
      shape: _LambdaFunctionFailedEventAttributes
    },
    lambdaFunctionTimedOutEventAttributes: {
      shape: _LambdaFunctionTimedOutEventAttributes
    },
    scheduleLambdaFunctionFailedEventAttributes: {
      shape: _ScheduleLambdaFunctionFailedEventAttributes
    },
    startLambdaFunctionFailedEventAttributes: {
      shape: _StartLambdaFunctionFailedEventAttributes
    }
  }
};
