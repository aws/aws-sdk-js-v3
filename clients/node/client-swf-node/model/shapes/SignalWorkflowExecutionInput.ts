import { Structure as _Structure_ } from "@aws-sdk/types";

export const SignalWorkflowExecutionInput: _Structure_ = {
  type: "structure",
  required: ["domain", "workflowId", "signalName"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    }
  }
};
