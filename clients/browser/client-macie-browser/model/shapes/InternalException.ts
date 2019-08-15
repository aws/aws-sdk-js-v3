import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    errorCode: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InternalException"
};
