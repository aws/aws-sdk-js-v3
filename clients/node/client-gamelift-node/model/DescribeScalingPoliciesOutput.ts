import { _ScalingPolicyList } from "./_ScalingPolicyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScalingPolicies: {
      shape: _ScalingPolicyList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
