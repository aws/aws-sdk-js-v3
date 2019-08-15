import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelBundleTaskInput: _Structure_ = {
  type: "structure",
  required: ["BundleId"],
  members: {
    BundleId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
