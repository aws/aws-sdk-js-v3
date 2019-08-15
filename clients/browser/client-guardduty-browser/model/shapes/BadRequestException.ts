import { Structure as _Structure_ } from "@aws-sdk/types";

export const BadRequestException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "__type"
    }
  },
  exceptionType: "BadRequestException"
};
