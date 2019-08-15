import { _ClassicLoadBalancers } from "./_ClassicLoadBalancers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClassicLoadBalancersConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClassicLoadBalancers: {
      shape: _ClassicLoadBalancers,
      locationName: "classicLoadBalancers"
    }
  }
};
