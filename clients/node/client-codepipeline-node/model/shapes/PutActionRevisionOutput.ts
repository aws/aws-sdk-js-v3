import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutActionRevisionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    newRevision: {
      shape: {
        type: "boolean"
      }
    },
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    }
  }
};
