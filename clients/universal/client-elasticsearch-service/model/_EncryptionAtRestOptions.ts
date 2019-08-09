import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionAtRestOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
