import { List as _List_ } from "@aws-sdk/types";
import { _WeightedTarget } from "./_WeightedTarget";

export const _WeightedTargets: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _WeightedTarget
  }
};
