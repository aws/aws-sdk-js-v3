import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Encryption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3EncryptionMode: {
      shape: {
        type: "string"
      }
    },
    KmsKeyArn: {
      shape: {
        type: "string"
      }
    }
  }
};
