import { _PackageIds } from "./_PackageIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInstanceProfileInput: _Structure_ = {
  type: "structure",
  required: ["arn"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    packageCleanup: {
      shape: {
        type: "boolean"
      }
    },
    excludeAppPackagesFromCleanup: {
      shape: _PackageIds
    },
    rebootAfterUse: {
      shape: {
        type: "boolean"
      }
    }
  }
};
