import { _SpekeKeyProvider } from "./_SpekeKeyProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsEncryption: _Structure_ = {
  type: "structure",
  required: ["SpekeKeyProvider"],
  members: {
    ConstantInitializationVector: {
      shape: {
        type: "string"
      },
      locationName: "constantInitializationVector"
    },
    EncryptionMethod: {
      shape: {
        type: "string"
      },
      locationName: "encryptionMethod"
    },
    KeyRotationIntervalSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "keyRotationIntervalSeconds"
    },
    RepeatExtXKey: {
      shape: {
        type: "boolean"
      },
      locationName: "repeatExtXKey"
    },
    SpekeKeyProvider: {
      shape: _SpekeKeyProvider,
      locationName: "spekeKeyProvider"
    }
  }
};
