import { _SpekeKeyProvider } from "./_SpekeKeyProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsEncryption: _Structure_ = {
  type: "structure",
  required: ["SpekeKeyProvider"],
  members: {
    EncryptionMethod: {
      shape: {
        type: "string"
      },
      locationName: "encryptionMethod"
    },
    SpekeKeyProvider: {
      shape: _SpekeKeyProvider,
      locationName: "spekeKeyProvider"
    }
  }
};
