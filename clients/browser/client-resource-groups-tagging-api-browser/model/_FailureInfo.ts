import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailureInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StatusCode: {
      shape: {
        type: "integer"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
