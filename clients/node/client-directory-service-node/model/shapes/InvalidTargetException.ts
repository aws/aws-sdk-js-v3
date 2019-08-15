import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidTargetException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    RequestId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidTargetException"
};
