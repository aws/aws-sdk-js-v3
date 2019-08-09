import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StageExecution: _Structure_ = {
  type: "structure",
  required: ["pipelineExecutionId", "status"],
  members: {
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
