import { _ApplicationInfo } from "./_ApplicationInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationInfo: {
      shape: _ApplicationInfo
    }
  }
};
