import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModelPackageSummary: _Structure_ = {
  type: "structure",
  required: [
    "ModelPackageName",
    "ModelPackageArn",
    "CreationTime",
    "ModelPackageStatus"
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
    ModelPackageStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
