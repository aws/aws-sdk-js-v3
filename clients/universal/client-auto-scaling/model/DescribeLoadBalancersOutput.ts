import { _LoadBalancerStates } from "./_LoadBalancerStates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancers: {
      shape: _LoadBalancerStates
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
