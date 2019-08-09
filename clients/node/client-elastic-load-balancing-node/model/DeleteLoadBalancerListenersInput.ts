import { _Ports } from "./_Ports";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLoadBalancerListenersInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "LoadBalancerPorts"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    LoadBalancerPorts: {
      shape: _Ports
    }
  }
};
