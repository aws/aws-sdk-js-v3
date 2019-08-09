import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidInputException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    code: {
      shape: {
        type: "string"
      }
    },
    docs: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    },
    tip: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidInputException"
};
