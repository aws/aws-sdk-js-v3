import { List as _List_ } from "@aws-sdk/types";
import { _RuleGroupSummary } from "./_RuleGroupSummary";

export const _RuleGroupSummaries: _List_ = {
  type: "list",
  member: {
    shape: _RuleGroupSummary
  }
};
