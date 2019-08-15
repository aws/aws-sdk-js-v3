import { _LoadBalancerAttributes } from "./_LoadBalancerAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyLoadBalancerAttributesInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "LoadBalancerAttributes"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    LoadBalancerAttributes: {
      shape: _LoadBalancerAttributes
    }
  }
};
