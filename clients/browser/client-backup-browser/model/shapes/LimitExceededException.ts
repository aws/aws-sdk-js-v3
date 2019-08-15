import { Structure as _Structure_ } from "@aws-sdk/types";

export const LimitExceededException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Context: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "LimitExceededException"
};
