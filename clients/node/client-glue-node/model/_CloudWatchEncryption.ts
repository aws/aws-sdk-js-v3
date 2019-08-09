import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchEncryption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudWatchEncryptionMode: {
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
