import { _LoadBalancerList } from "./_LoadBalancerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoadBalancersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    loadBalancers: {
      shape: _LoadBalancerList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
