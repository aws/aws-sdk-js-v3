import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3EncryptionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EncryptionType: {
      shape: {
        type: "string"
      },
      locationName: "encryptionType"
    },
    KmsKeyArn: {
      shape: {
        type: "string"
      },
      locationName: "kmsKeyArn"
    }
  }
};
