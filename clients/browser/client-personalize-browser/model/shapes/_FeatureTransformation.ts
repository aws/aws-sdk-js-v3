import { _FeaturizationParameters } from "./_FeaturizationParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FeatureTransformation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    featureTransformationArn: {
      shape: {
        type: "string"
      }
    },
    defaultParameters: {
      shape: _FeaturizationParameters
    },
    creationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
