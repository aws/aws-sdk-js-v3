import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSecretInput: _Structure_ = {
  type: "structure",
  required: ["SecretId"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 32
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    SecretBinary: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    SecretString: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
