import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestCancelWorkflowExecutionInput: _Structure_ = {
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
    }
  }
};
