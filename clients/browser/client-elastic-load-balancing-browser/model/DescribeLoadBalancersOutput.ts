import { _LoadBalancerDescriptions } from "./_LoadBalancerDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerDescriptions: {
      shape: _LoadBalancerDescriptions
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
