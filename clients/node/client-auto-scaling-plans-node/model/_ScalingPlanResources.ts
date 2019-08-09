import { List as _List_ } from "@aws-sdk/types";
import { _ScalingPlanResource } from "./_ScalingPlanResource";

export const _ScalingPlanResources: _List_ = {
  type: "list",
  member: {
    shape: _ScalingPlanResource
  }
};
