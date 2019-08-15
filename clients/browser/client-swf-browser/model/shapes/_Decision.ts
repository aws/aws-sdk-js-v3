import { _ScheduleActivityTaskDecisionAttributes } from "./_ScheduleActivityTaskDecisionAttributes";
import { _RequestCancelActivityTaskDecisionAttributes } from "./_RequestCancelActivityTaskDecisionAttributes";
import { _CompleteWorkflowExecutionDecisionAttributes } from "./_CompleteWorkflowExecutionDecisionAttributes";
import { _FailWorkflowExecutionDecisionAttributes } from "./_FailWorkflowExecutionDecisionAttributes";
import { _CancelWorkflowExecutionDecisionAttributes } from "./_CancelWorkflowExecutionDecisionAttributes";
import { _ContinueAsNewWorkflowExecutionDecisionAttributes } from "./_ContinueAsNewWorkflowExecutionDecisionAttributes";
import { _RecordMarkerDecisionAttributes } from "./_RecordMarkerDecisionAttributes";
import { _StartTimerDecisionAttributes } from "./_StartTimerDecisionAttributes";
import { _CancelTimerDecisionAttributes } from "./_CancelTimerDecisionAttributes";
import { _SignalExternalWorkflowExecutionDecisionAttributes } from "./_SignalExternalWorkflowExecutionDecisionAttributes";
import { _RequestCancelExternalWorkflowExecutionDecisionAttributes } from "./_RequestCancelExternalWorkflowExecutionDecisionAttributes";
import { _StartChildWorkflowExecutionDecisionAttributes } from "./_StartChildWorkflowExecutionDecisionAttributes";
import { _ScheduleLambdaFunctionDecisionAttributes } from "./_ScheduleLambdaFunctionDecisionAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Decision: _Structure_ = {
  type: "structure",
  required: ["decisionType"],
  members: {
    decisionType: {
      shape: {
        type: "string"
      }
    },
    scheduleActivityTaskDecisionAttributes: {
      shape: _ScheduleActivityTaskDecisionAttributes
    },
    requestCancelActivityTaskDecisionAttributes: {
      shape: _RequestCancelActivityTaskDecisionAttributes
    },
    completeWorkflowExecutionDecisionAttributes: {
      shape: _CompleteWorkflowExecutionDecisionAttributes
    },
    failWorkflowExecutionDecisionAttributes: {
      shape: _FailWorkflowExecutionDecisionAttributes
    },
    cancelWorkflowExecutionDecisionAttributes: {
      shape: _CancelWorkflowExecutionDecisionAttributes
    },
    continueAsNewWorkflowExecutionDecisionAttributes: {
      shape: _ContinueAsNewWorkflowExecutionDecisionAttributes
    },
    recordMarkerDecisionAttributes: {
      shape: _RecordMarkerDecisionAttributes
    },
    startTimerDecisionAttributes: {
      shape: _StartTimerDecisionAttributes
    },
    cancelTimerDecisionAttributes: {
      shape: _CancelTimerDecisionAttributes
    },
    signalExternalWorkflowExecutionDecisionAttributes: {
      shape: _SignalExternalWorkflowExecutionDecisionAttributes
    },
    requestCancelExternalWorkflowExecutionDecisionAttributes: {
      shape: _RequestCancelExternalWorkflowExecutionDecisionAttributes
    },
    startChildWorkflowExecutionDecisionAttributes: {
      shape: _StartChildWorkflowExecutionDecisionAttributes
    },
    scheduleLambdaFunctionDecisionAttributes: {
      shape: _ScheduleLambdaFunctionDecisionAttributes
    }
  }
};
