import { List as _List_ } from "@aws-sdk/types";
import { _RuleGroupUpdate } from "./_RuleGroupUpdate";

export const _RuleGroupUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RuleGroupUpdate
  }
};
