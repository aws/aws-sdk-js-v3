import { _TrainingSpecification } from "./_TrainingSpecification";
import { _InferenceSpecification } from "./_InferenceSpecification";
import { _AlgorithmValidationSpecification } from "./_AlgorithmValidationSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAlgorithmInput: _Structure_ = {
  type: "structure",
  required: ["AlgorithmName", "TrainingSpecification"],
  members: {
    AlgorithmName: {
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
    TrainingSpecification: {
      shape: _TrainingSpecification
    },
    InferenceSpecification: {
      shape: _InferenceSpecification
    },
    ValidationSpecification: {
      shape: _AlgorithmValidationSpecification
    },
    CertifyForMarketplace: {
      shape: {
        type: "boolean"
      }
    }
  }
};
