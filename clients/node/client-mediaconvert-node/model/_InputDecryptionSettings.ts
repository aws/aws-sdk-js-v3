import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputDecryptionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DecryptionMode: {
      shape: {
        type: "string"
      },
      locationName: "decryptionMode"
    },
    EncryptedDecryptionKey: {
      shape: {
        type: "string",
        min: 24
      },
      locationName: "encryptedDecryptionKey"
    },
    InitializationVector: {
      shape: {
        type: "string",
        min: 16
      },
      locationName: "initializationVector"
    },
    KmsKeyRegion: {
      shape: {
        type: "string",
        min: 9
      },
      locationName: "kmsKeyRegion"
    }
  }
};
