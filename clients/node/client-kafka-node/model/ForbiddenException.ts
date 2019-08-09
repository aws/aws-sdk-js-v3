import { Structure as _Structure_ } from "@aws-sdk/types";

export const ForbiddenException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InvalidParameter: {
      shape: {
        type: "string"
      },
      locationName: "invalidParameter"
    },
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    }
  },
  exceptionType: "ForbiddenException"
};
