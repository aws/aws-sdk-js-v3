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
    CorrectionGateLevel: {
      shape: {
        type: "integer",
        min: -70
      },
      locationName: "correctionGateLevel"
    },
    LoudnessLogging: {
      shape: {
        type: "string"
      },
      locationName: "loudnessLogging"
    },
    PeakCalculation: {
      shape: {
        type: "string"
      },
      locationName: "peakCalculation"
    },
    TargetLkfs: {
      shape: {
        type: "float"
      },
      locationName: "targetLkfs"
    }
  }
};
