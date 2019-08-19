import { _Apps } from "./_Apps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAppsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Apps: {
      shape: _Apps
    }
  }
};
