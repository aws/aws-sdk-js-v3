import { _HPOConfig } from "./_HPOConfig";
import { _HyperParameters } from "./_HyperParameters";
import { _FeatureTransformationParameters } from "./_FeatureTransformationParameters";
import { _AutoMLConfig } from "./_AutoMLConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SolutionConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventValueThreshold: {
      shape: {
        type: "string"
      }
    },
    hpoConfig: {
      shape: _HPOConfig
    },
    algorithmHyperParameters: {
      shape: _HyperParameters
    },
    featureTransformationParameters: {
      shape: _FeatureTransformationParameters
    },
    autoMLConfig: {
      shape: _AutoMLConfig
    }
  }
};
