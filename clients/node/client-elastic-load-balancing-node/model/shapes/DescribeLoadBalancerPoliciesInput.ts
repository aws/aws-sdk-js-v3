import { _PolicyNames } from "./_PolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancerPoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    PolicyNames: {
      shape: _PolicyNames
    }
  }
};
