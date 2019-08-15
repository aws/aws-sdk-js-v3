import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionFilter: _Structure_ = {
  type: "structure",
  required: ["workflowId"],
  members: {
    workflowId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
