import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchWriteException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "BatchWriteException"
};
