import { List as _List_ } from "@aws-sdk/types";
import { _ScalingPolicy } from "./_ScalingPolicy";

export const _ScalingPolicies: _List_ = {
  type: "list",
  member: {
    shape: _ScalingPolicy
  }
};
