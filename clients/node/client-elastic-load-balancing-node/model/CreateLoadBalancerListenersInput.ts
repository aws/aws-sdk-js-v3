import { _Listeners } from "./_Listeners";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoadBalancerListenersInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "Listeners"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    Listeners: {
      shape: _Listeners
    }
  }
};
