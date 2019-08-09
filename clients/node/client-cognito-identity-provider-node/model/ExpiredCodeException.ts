import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExpiredCodeException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ExpiredCodeException"
};
