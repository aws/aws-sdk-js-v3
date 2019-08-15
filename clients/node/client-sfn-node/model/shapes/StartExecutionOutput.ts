import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartExecutionOutput: _Structure_ = {
  type: "structure",
  required: ["executionArn", "startDate"],
  members: {
    executionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
