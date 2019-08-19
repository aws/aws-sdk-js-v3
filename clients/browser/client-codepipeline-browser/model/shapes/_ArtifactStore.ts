import { _EncryptionKey } from "./_EncryptionKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArtifactStore: _Structure_ = {
  type: "structure",
  required: ["type", "location"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string",
        min: 3
      }
    },
    encryptionKey: {
      shape: _EncryptionKey
    }
  }
};
