import { _PolicyTypeDescriptions } from "./_PolicyTypeDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancerPolicyTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyTypeDescriptions: {
      shape: _PolicyTypeDescriptions
    }
  }
};
