import { List as _List_ } from "@aws-sdk/types";
import { _RuleSummary } from "./_RuleSummary";

export const _RuleSummaries: _List_ = {
  type: "list",
  member: {
    shape: _RuleSummary
  }
};
