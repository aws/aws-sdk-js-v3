import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestCancelExternalWorkflowExecutionInitiatedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["workflowId", "decisionTaskCompletedEventId"],
  members: {
    workflowId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    runId: {
      shape: {
        type: "string"
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
