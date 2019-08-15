import { _WorkflowExecution } from "./_WorkflowExecution";
import { _ActivityType } from "./_ActivityType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForActivityTaskOutput: _Structure_ = {
  type: "structure",
  required: [
    "taskToken",
    "activityId",
    "startedEventId",
    "workflowExecution",
    "activityType"
  ],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    activityId: {
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
    activityType: {
      shape: _ActivityType
    },
    input: {
      shape: {
        type: "string"
      }
    }
  }
};
