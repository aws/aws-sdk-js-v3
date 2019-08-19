import { _AlgorithmImage } from "./_AlgorithmImage";
import { _HyperParameters } from "./_HyperParameters";
import { _DefaultHyperParameterRanges } from "./_DefaultHyperParameterRanges";
import { _ResourceConfig } from "./_ResourceConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Algorithm: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    algorithmArn: {
      shape: {
        type: "string"
      }
    },
    algorithmImage: {
      shape: _AlgorithmImage
    },
    defaultHyperParameters: {
      shape: _HyperParameters
    },
    defaultHyperParameterRanges: {
      shape: _DefaultHyperParameterRanges
    },
    defaultResourceConfig: {
      shape: _ResourceConfig
    },
    trainingInputMode: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
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
    }
  }
};
