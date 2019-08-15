import { List as _List_ } from "@aws-sdk/types";
import { _ScalingRule } from "./_ScalingRule";

export const _ScalingRuleList: _List_ = {
  type: "list",
  member: {
    shape: _ScalingRule
  }
};
