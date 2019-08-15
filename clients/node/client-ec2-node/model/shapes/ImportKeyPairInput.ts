import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportKeyPairInput: _Structure_ = {
  type: "structure",
  required: ["KeyName", "PublicKeyMaterial"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    KeyName: {
      shape: {
        type: "string"
      },
      locationName: "keyName"
    },
    PublicKeyMaterial: {
      shape: {
        type: "blob"
      },
      locationName: "publicKeyMaterial"
    }
  }
};
