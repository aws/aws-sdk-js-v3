import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecution: _Structure_ = {
  type: "structure",
  required: ["workflowId", "runId"],
  members: {
    workflowId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    runId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
