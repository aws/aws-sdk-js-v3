import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancerState } from "./_LoadBalancerState";

export const _LoadBalancerStates: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancerState
  }
};
