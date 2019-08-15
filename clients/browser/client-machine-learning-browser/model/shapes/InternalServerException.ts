import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalServerException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    code: {
      shape: {
        type: "integer"
      }
    }
  },
  exceptionType: "InternalServerException"
};
