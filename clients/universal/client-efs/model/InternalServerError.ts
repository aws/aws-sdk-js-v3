import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalServerError: _Structure_ = {
  type: "structure",
  required: ["ErrorCode"],
  members: {
    ErrorCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InternalServerError"
};
