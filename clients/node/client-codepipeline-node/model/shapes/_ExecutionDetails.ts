import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExecutionDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: {
        type: "string",
        min: 1
      }
    },
    externalExecutionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    percentComplete: {
      shape: {
        type: "integer"
      }
    }
  }
};
