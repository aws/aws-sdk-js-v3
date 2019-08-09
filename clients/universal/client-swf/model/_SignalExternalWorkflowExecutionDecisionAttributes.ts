import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SignalExternalWorkflowExecutionDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["workflowId", "signalName"],
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
    control: {
      shape: {
        type: "string"
      }
    }
  }
};
