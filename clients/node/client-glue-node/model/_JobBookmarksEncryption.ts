import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobBookmarksEncryption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobBookmarksEncryptionMode: {
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
