import { _BundleDetails } from "./_BundleDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBundleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    details: {
      shape: _BundleDetails
    }
  }
};
