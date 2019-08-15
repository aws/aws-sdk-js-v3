import { Structure as _Structure_ } from "@aws-sdk/types";

export const HandshakeConstraintViolationException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "HandshakeConstraintViolationException"
};
