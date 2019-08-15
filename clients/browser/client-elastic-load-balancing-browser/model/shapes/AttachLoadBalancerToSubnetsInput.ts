import { _Subnets } from "./_Subnets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachLoadBalancerToSubnetsInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "Subnets"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    Subnets: {
      shape: _Subnets
    }
  }
};
