import { _EncryptionAlgorithms } from "./_EncryptionAlgorithms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionAlgorithmOptions: _Structure_ = {
  type: "structure",
  required: ["allowedValues", "defaultValue"],
  members: {
    allowedValues: {
      shape: _EncryptionAlgorithms
    },
    defaultValue: {
      shape: {
        type: "string"
      }
    }
  }
};
