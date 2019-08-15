import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
