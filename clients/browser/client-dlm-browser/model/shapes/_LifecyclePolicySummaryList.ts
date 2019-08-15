import { List as _List_ } from "@aws-sdk/types";
import { _LifecyclePolicySummary } from "./_LifecyclePolicySummary";

export const _LifecyclePolicySummaryList: _List_ = {
  type: "list",
  member: {
    shape: _LifecyclePolicySummary
  }
};
