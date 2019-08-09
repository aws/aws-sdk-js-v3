import { List as _List_ } from "@aws-sdk/types";
import { _PolicyTargetSummary } from "./_PolicyTargetSummary";

export const _PolicyTargets: _List_ = {
  type: "list",
  member: {
    shape: _PolicyTargetSummary
  }
};
