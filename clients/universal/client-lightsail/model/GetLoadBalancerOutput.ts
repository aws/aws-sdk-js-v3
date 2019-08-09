import { _LoadBalancer } from "./_LoadBalancer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoadBalancerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    loadBalancer: {
      shape: _LoadBalancer
    }
  }
};
