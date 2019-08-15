import { _WorkflowType } from "./_WorkflowType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StartChildWorkflowExecutionFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: [
    "workflowType",
    "cause",
    "workflowId",
    "initiatedEventId",
    "decisionTaskCompletedEventId"
  ],
  members: {
    workflowType: {
      shape: _WorkflowType
    },
    cause: {
      shape: {
        type: "string"
      }
    },
    workflowId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    initiatedEventId: {
      shape: {
        type: "integer"
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    },
    control: {
      shape: {
        type: "string"
      }
    }
  }
};
