import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    }
  }
};
