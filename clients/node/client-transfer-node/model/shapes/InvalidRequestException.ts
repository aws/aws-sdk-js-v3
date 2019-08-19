import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidRequestException: _Structure_ = {
  type: "structure",
  required: ["Message"],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidRequestException"
};
