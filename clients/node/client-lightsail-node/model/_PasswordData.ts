import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PasswordData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ciphertext: {
      shape: {
        type: "string"
      }
    },
    keyPairName: {
      shape: {
        type: "string"
      }
    }
  }
};
