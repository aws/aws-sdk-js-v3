import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioNormalizationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Algorithm: {
      shape: {
        type: "string"
      },
      locationName: "algorithm"
    },
    AlgorithmControl: {
      shape: {
        type: "string"
      },
      locationName: "algorithmControl"
    },
    TargetLkfs: {
      shape: {
        type: "float"
      },
      locationName: "targetLkfs"
    }
  }
};
