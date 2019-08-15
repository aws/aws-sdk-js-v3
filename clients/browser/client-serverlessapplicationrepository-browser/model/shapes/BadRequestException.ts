import { Structure as _Structure_ } from "@aws-sdk/types";

export const BadRequestException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorCode: {
      shape: {
        type: "string"
      },
      locationName: "errorCode"
    },
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    }
  },
  exceptionType: "BadRequestException"
};
