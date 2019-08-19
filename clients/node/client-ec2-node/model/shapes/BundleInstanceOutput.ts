import { _BundleTask } from "./_BundleTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BundleInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BundleTask: {
      shape: _BundleTask,
      locationName: "bundleInstanceTask"
    }
  }
};
