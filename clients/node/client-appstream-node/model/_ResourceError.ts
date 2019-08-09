import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
