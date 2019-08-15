import { _PackageIds } from "./_PackageIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstanceProfileInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
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
