import { _InferenceSpecification } from "./_InferenceSpecification";
import { _SourceAlgorithmSpecification } from "./_SourceAlgorithmSpecification";
import { _ModelPackageValidationSpecification } from "./_ModelPackageValidationSpecification";
import { _ModelPackageStatusDetails } from "./_ModelPackageStatusDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeModelPackageOutput: _Structure_ = {
  type: "structure",
  required: [
    "ModelPackageName",
    "ModelPackageArn",
    "CreationTime",
    "ModelPackageStatus",
    "ModelPackageStatusDetails"
  ],
  members: {
    ModelPackageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ModelPackageArn: {
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
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    InferenceSpecification: {
      shape: _InferenceSpecification
    },
    SourceAlgorithmSpecification: {
      shape: _SourceAlgorithmSpecification
    },
    ValidationSpecification: {
      shape: _ModelPackageValidationSpecification
    },
    ModelPackageStatus: {
      shape: {
        type: "string"
      }
    },
    ModelPackageStatusDetails: {
      shape: _ModelPackageStatusDetails
    },
    CertifyForMarketplace: {
      shape: {
        type: "boolean"
      }
    }
  }
};
