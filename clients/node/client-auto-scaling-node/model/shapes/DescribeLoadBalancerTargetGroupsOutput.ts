import { _LoadBalancerTargetGroupStates } from "./_LoadBalancerTargetGroupStates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancerTargetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerTargetGroups: {
      shape: _LoadBalancerTargetGroupStates
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
