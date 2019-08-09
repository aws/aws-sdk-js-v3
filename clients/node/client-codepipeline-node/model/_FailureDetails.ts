import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailureDetails: _Structure_ = {
  type: "structure",
  required: ["type", "message"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    message: {
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
    }
  }
};
