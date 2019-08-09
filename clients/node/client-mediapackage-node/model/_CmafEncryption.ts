import { _SpekeKeyProvider } from "./_SpekeKeyProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CmafEncryption: _Structure_ = {
  type: "structure",
  required: ["SpekeKeyProvider"],
  members: {
    KeyRotationIntervalSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "keyRotationIntervalSeconds"
    },
    SpekeKeyProvider: {
      shape: _SpekeKeyProvider,
      locationName: "spekeKeyProvider"
    }
  }
};
