import { List as _List_ } from "@aws-sdk/types";
import { _ScalableTarget } from "./_ScalableTarget";

export const _ScalableTargets: _List_ = {
  type: "list",
  member: {
    shape: _ScalableTarget
  }
};
