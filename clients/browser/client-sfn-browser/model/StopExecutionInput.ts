import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopExecutionInput: _Structure_ = {
  type: "structure",
  required: ["executionArn"],
  members: {
    executionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    error: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    cause: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
