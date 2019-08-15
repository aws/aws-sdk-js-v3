import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateWorkflowExecutionInput: _Structure_ = {
  type: "structure",
  required: ["domain", "workflowId"],
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
    reason: {
      shape: {
        type: "string"
      }
    },
    details: {
      shape: {
        type: "string"
      }
    },
    childPolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
