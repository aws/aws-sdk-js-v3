import { List as _List_ } from "@aws-sdk/types";
import { _ScalingPlan } from "./_ScalingPlan";

export const _ScalingPlans: _List_ = {
  type: "list",
  member: {
    shape: _ScalingPlan
  }
};
