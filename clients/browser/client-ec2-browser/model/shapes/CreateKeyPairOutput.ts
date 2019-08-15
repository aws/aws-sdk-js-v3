import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateKeyPairOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KeyFingerprint: {
      shape: {
        type: "string"
      },
      locationName: "keyFingerprint"
    },
    KeyMaterial: {
      shape: {
        type: "string"
      },
      locationName: "keyMaterial"
    },
    KeyName: {
      shape: {
        type: "string"
      },
      locationName: "keyName"
    }
  }
};
