import { _WorkflowExecution } from "./_WorkflowExecution";
import { _WorkflowType } from "./_WorkflowType";
import { _HistoryEventList } from "./_HistoryEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForDecisionTaskOutput: _Structure_ = {
  type: "structure",
  required: [
    "taskToken",
    "startedEventId",
    "workflowExecution",
    "workflowType",
    "events"
  ],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startedEventId: {
      shape: {
        type: "integer"
      }
    },
    workflowExecution: {
      shape: _WorkflowExecution
    },
    workflowType: {
      shape: _WorkflowType
    },
    events: {
      shape: _HistoryEventList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    },
    previousStartedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
