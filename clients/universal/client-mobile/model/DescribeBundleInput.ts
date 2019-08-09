import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBundleInput: _Structure_ = {
  type: "structure",
  required: ["bundleId"],
  members: {
    bundleId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "bundleId"
    }
  }
};
