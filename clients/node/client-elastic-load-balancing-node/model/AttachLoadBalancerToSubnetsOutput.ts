import { _Subnets } from "./_Subnets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachLoadBalancerToSubnetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Subnets: {
      shape: _Subnets
    }
  }
};
