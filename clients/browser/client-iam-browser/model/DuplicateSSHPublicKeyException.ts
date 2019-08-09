import { Structure as _Structure_ } from "@aws-sdk/types";

export const DuplicateSSHPublicKeyException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "DuplicateSSHPublicKeyException",
  exceptionCode: "DuplicateSSHPublicKey"
};
