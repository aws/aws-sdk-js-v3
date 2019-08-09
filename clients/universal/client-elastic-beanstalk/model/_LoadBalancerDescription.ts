import { _LoadBalancerListenersDescription } from "./_LoadBalancerListenersDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    Domain: {
      shape: {
        type: "string"
      }
    },
    Listeners: {
      shape: _LoadBalancerListenersDescription
    }
  }
};
