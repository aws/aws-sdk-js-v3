import { Structure as _Structure_ } from "@aws-sdk/types";

export const LimitExceededFault: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "LimitExceededFault",
  exceptionCode: "LimitExceeded"
};
