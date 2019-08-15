import { _LoadBalancerNames } from "./_LoadBalancerNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachLoadBalancersInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "LoadBalancerNames"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LoadBalancerNames: {
      shape: _LoadBalancerNames
    }
  }
};
