import { _LoadBalancerNames } from "./_LoadBalancerNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerNames: {
      shape: _LoadBalancerNames
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
