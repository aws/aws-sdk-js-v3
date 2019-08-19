import { _PackageIds } from "./_PackageIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceProfile: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
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
    }
  }
};
