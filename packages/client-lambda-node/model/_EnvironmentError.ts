import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
