import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningConfigurationOverrides: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    encryptionAlgorithm: {
      shape: {
        type: "string"
      }
    },
    hashAlgorithm: {
      shape: {
        type: "string"
      }
    }
  }
};
