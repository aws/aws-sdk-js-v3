import { _HashAlgorithms } from "./_HashAlgorithms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HashAlgorithmOptions: _Structure_ = {
  type: "structure",
  required: ["allowedValues", "defaultValue"],
  members: {
    allowedValues: {
      shape: _HashAlgorithms
    },
    defaultValue: {
      shape: {
        type: "string"
      }
    }
  }
};
