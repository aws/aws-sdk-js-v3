import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportKeyPairOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KeyFingerprint: {
      shape: {
        type: "string"
      },
      locationName: "keyFingerprint"
    },
    KeyName: {
      shape: {
        type: "string"
      },
      locationName: "keyName"
    }
  }
};
