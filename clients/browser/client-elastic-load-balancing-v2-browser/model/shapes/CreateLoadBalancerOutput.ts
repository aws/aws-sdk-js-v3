import { _LoadBalancers } from "./_LoadBalancers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoadBalancerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancers: {
      shape: _LoadBalancers
    }
  }
};
