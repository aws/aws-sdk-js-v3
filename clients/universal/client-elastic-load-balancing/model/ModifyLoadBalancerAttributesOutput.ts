import { _LoadBalancerAttributes } from "./_LoadBalancerAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyLoadBalancerAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
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
