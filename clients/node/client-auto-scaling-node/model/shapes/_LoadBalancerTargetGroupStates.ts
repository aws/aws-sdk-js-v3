import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancerTargetGroupState } from "./_LoadBalancerTargetGroupState";

export const _LoadBalancerTargetGroupStates: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancerTargetGroupState
  }
};
