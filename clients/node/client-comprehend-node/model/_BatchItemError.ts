import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchItemError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    ErrorCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorMessage: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
