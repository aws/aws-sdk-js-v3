import { _ScalingPolicies } from "./_ScalingPolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScalingPolicies: {
      shape: _ScalingPolicies
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
