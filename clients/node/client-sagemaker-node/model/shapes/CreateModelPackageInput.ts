import { _InferenceSpecification } from "./_InferenceSpecification";
import { _ModelPackageValidationSpecification } from "./_ModelPackageValidationSpecification";
import { _SourceAlgorithmSpecification } from "./_SourceAlgorithmSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateModelPackageInput: _Structure_ = {
  type: "structure",
  required: ["ModelPackageName"],
  members: {
    ModelPackageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ModelPackageDescription: {
      shape: {
        type: "string"
      }
    },
    InferenceSpecification: {
      shape: _InferenceSpecification
    },
    ValidationSpecification: {
      shape: _ModelPackageValidationSpecification
    },
    SourceAlgorithmSpecification: {
      shape: _SourceAlgorithmSpecification
    },
    CertifyForMarketplace: {
      shape: {
        type: "boolean"
      }
    }
  }
};
