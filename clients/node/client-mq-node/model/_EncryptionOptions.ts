import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionOptions: _Structure_ = {
  type: "structure",
  required: ["UseAwsOwnedKey"],
  members: {
    KmsKeyId: {
      shape: {
        type: "string"
      },
      locationName: "kmsKeyId"
    },
    UseAwsOwnedKey: {
      shape: {
        type: "boolean"
      },
      locationName: "useAwsOwnedKey"
    }
  }
};
