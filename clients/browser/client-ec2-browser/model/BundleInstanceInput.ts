import { _Storage } from "./_Storage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BundleInstanceInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "Storage"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Storage: {
      shape: _Storage
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
