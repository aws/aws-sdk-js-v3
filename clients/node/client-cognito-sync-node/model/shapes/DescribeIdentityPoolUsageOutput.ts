import { _IdentityPoolUsage } from "./_IdentityPoolUsage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityPoolUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityPoolUsage: {
      shape: _IdentityPoolUsage
    }
  }
};
