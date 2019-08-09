import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConcurrentRunsExceededException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ConcurrentRunsExceededException"
};
