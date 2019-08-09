import { _BundleTaskList } from "./_BundleTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBundleTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BundleTasks: {
      shape: _BundleTaskList,
      locationName: "bundleInstanceTasksSet"
    }
  }
};
