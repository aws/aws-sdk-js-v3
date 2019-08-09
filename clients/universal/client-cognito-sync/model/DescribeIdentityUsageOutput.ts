import { _IdentityUsage } from "./_IdentityUsage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityUsage: {
      shape: _IdentityUsage
    }
  }
};
