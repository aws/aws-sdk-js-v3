import { Structure as _Structure_ } from "@aws-sdk/types";

export const PublicKeyAlreadyExists: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "PublicKeyAlreadyExists"
};
