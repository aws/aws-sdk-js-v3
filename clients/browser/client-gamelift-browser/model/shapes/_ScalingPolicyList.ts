import { List as _List_ } from "@aws-sdk/types";
import { _ScalingPolicy } from "./_ScalingPolicy";

export const _ScalingPolicyList: _List_ = {
  type: "list",
  member: {
    shape: _ScalingPolicy
  }
};
