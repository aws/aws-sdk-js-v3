import { List as _List_ } from "@aws-sdk/types";
import { _ClassicLoadBalancer } from "./_ClassicLoadBalancer";

export const _ClassicLoadBalancers: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ClassicLoadBalancer,
    locationName: "item"
  }
};
