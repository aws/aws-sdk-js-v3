import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestCancelExternalWorkflowExecutionDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["workflowId"],
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
    control: {
      shape: {
        type: "string"
      }
    }
  }
};
