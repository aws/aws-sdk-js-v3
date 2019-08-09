import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceSecretVerifierConfigType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PasswordVerifier: {
      shape: {
        type: "string"
      }
    },
    Salt: {
      shape: {
        type: "string"
      }
    }
  }
};
