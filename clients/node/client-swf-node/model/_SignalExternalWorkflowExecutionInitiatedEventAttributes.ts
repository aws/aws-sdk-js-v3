import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SignalExternalWorkflowExecutionInitiatedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["workflowId", "signalName", "decisionTaskCompletedEventId"],
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
    signalName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    input: {
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
