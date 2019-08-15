import { _ActivityFailedEventDetails } from "./_ActivityFailedEventDetails";
import { _ActivityScheduleFailedEventDetails } from "./_ActivityScheduleFailedEventDetails";
import { _ActivityScheduledEventDetails } from "./_ActivityScheduledEventDetails";
import { _ActivityStartedEventDetails } from "./_ActivityStartedEventDetails";
import { _ActivitySucceededEventDetails } from "./_ActivitySucceededEventDetails";
import { _ActivityTimedOutEventDetails } from "./_ActivityTimedOutEventDetails";
import { _TaskFailedEventDetails } from "./_TaskFailedEventDetails";
import { _TaskScheduledEventDetails } from "./_TaskScheduledEventDetails";
import { _TaskStartFailedEventDetails } from "./_TaskStartFailedEventDetails";
import { _TaskStartedEventDetails } from "./_TaskStartedEventDetails";
import { _TaskSubmitFailedEventDetails } from "./_TaskSubmitFailedEventDetails";
import { _TaskSubmittedEventDetails } from "./_TaskSubmittedEventDetails";
import { _TaskSucceededEventDetails } from "./_TaskSucceededEventDetails";
import { _TaskTimedOutEventDetails } from "./_TaskTimedOutEventDetails";
import { _ExecutionFailedEventDetails } from "./_ExecutionFailedEventDetails";
import { _ExecutionStartedEventDetails } from "./_ExecutionStartedEventDetails";
import { _ExecutionSucceededEventDetails } from "./_ExecutionSucceededEventDetails";
import { _ExecutionAbortedEventDetails } from "./_ExecutionAbortedEventDetails";
import { _ExecutionTimedOutEventDetails } from "./_ExecutionTimedOutEventDetails";
import { _LambdaFunctionFailedEventDetails } from "./_LambdaFunctionFailedEventDetails";
import { _LambdaFunctionScheduleFailedEventDetails } from "./_LambdaFunctionScheduleFailedEventDetails";
import { _LambdaFunctionScheduledEventDetails } from "./_LambdaFunctionScheduledEventDetails";
import { _LambdaFunctionStartFailedEventDetails } from "./_LambdaFunctionStartFailedEventDetails";
import { _LambdaFunctionSucceededEventDetails } from "./_LambdaFunctionSucceededEventDetails";
import { _LambdaFunctionTimedOutEventDetails } from "./_LambdaFunctionTimedOutEventDetails";
import { _StateEnteredEventDetails } from "./_StateEnteredEventDetails";
import { _StateExitedEventDetails } from "./_StateExitedEventDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HistoryEvent: _Structure_ = {
  type: "structure",
  required: ["timestamp", "type", "id"],
  members: {
    timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    id: {
      shape: {
        type: "integer"
      }
    },
    previousEventId: {
      shape: {
        type: "integer"
      }
    },
    activityFailedEventDetails: {
      shape: _ActivityFailedEventDetails
    },
    activityScheduleFailedEventDetails: {
      shape: _ActivityScheduleFailedEventDetails
    },
    activityScheduledEventDetails: {
      shape: _ActivityScheduledEventDetails
    },
    activityStartedEventDetails: {
      shape: _ActivityStartedEventDetails
    },
    activitySucceededEventDetails: {
      shape: _ActivitySucceededEventDetails
    },
    activityTimedOutEventDetails: {
      shape: _ActivityTimedOutEventDetails
    },
    taskFailedEventDetails: {
      shape: _TaskFailedEventDetails
    },
    taskScheduledEventDetails: {
      shape: _TaskScheduledEventDetails
    },
    taskStartFailedEventDetails: {
      shape: _TaskStartFailedEventDetails
    },
    taskStartedEventDetails: {
      shape: _TaskStartedEventDetails
    },
    taskSubmitFailedEventDetails: {
      shape: _TaskSubmitFailedEventDetails
    },
    taskSubmittedEventDetails: {
      shape: _TaskSubmittedEventDetails
    },
    taskSucceededEventDetails: {
      shape: _TaskSucceededEventDetails
    },
    taskTimedOutEventDetails: {
      shape: _TaskTimedOutEventDetails
    },
    executionFailedEventDetails: {
      shape: _ExecutionFailedEventDetails
    },
    executionStartedEventDetails: {
      shape: _ExecutionStartedEventDetails
    },
    executionSucceededEventDetails: {
      shape: _ExecutionSucceededEventDetails
    },
    executionAbortedEventDetails: {
      shape: _ExecutionAbortedEventDetails
    },
    executionTimedOutEventDetails: {
      shape: _ExecutionTimedOutEventDetails
    },
    lambdaFunctionFailedEventDetails: {
      shape: _LambdaFunctionFailedEventDetails
    },
    lambdaFunctionScheduleFailedEventDetails: {
      shape: _LambdaFunctionScheduleFailedEventDetails
    },
    lambdaFunctionScheduledEventDetails: {
      shape: _LambdaFunctionScheduledEventDetails
    },
    lambdaFunctionStartFailedEventDetails: {
      shape: _LambdaFunctionStartFailedEventDetails
    },
    lambdaFunctionSucceededEventDetails: {
      shape: _LambdaFunctionSucceededEventDetails
    },
    lambdaFunctionTimedOutEventDetails: {
      shape: _LambdaFunctionTimedOutEventDetails
    },
    stateEnteredEventDetails: {
      shape: _StateEnteredEventDetails
    },
    stateExitedEventDetails: {
      shape: _StateExitedEventDetails
    }
  }
};
