import { _PolicyDescriptions } from "./_PolicyDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancerPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyDescriptions: {
      shape: _PolicyDescriptions
    }
  }
};
