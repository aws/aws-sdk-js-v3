import { _PolicyTypeNames } from "./_PolicyTypeNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancerPolicyTypesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyTypeNames: {
      shape: _PolicyTypeNames
    }
  }
};
