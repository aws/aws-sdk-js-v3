import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionAtRest: _Structure_ = {
  type: "structure",
  required: ["CatalogEncryptionMode"],
  members: {
    CatalogEncryptionMode: {
      shape: {
        type: "string"
      }
    },
    SseAwsKmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
