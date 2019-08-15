import { List as _List_ } from "@aws-sdk/types";
import { _SubscribedRuleGroupSummary } from "./_SubscribedRuleGroupSummary";

export const _SubscribedRuleGroupSummaries: _List_ = {
  type: "list",
  member: {
    shape: _SubscribedRuleGroupSummary
  }
};
