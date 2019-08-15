import { _TrainingSpecification } from "./_TrainingSpecification";
import { _InferenceSpecification } from "./_InferenceSpecification";
import { _AlgorithmValidationSpecification } from "./_AlgorithmValidationSpecification";
import { _AlgorithmStatusDetails } from "./_AlgorithmStatusDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlgorithmOutput: _Structure_ = {
  type: "structure",
  required: [
    "AlgorithmName",
    "AlgorithmArn",
    "CreationTime",
    "TrainingSpecification",
    "AlgorithmStatus",
    "AlgorithmStatusDetails"
  ],
  members: {
    AlgorithmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AlgorithmArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AlgorithmDescription: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingSpecification: {
      shape: _TrainingSpecification
    },
    InferenceSpecification: {
      shape: _InferenceSpecification
    },
    ValidationSpecification: {
      shape: _AlgorithmValidationSpecification
    },
    AlgorithmStatus: {
      shape: {
        type: "string"
      }
    },
    AlgorithmStatusDetails: {
      shape: _AlgorithmStatusDetails
    },
    ProductId: {
      shape: {
        type: "string"
      }
    },
    CertifyForMarketplace: {
      shape: {
        type: "boolean"
      }
    }
  }
};
