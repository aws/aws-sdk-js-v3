import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestCancelExternalWorkflowExecutionFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: [
    "workflowId",
    "cause",
    "initiatedEventId",
    "decisionTaskCompletedEventId"
  ],
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
    cause: {
      shape: {
        type: "string"
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
