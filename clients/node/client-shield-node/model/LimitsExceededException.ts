import { Structure as _Structure_ } from "@aws-sdk/types";

export const LimitsExceededException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  },
  exceptionType: "LimitsExceededException"
};
