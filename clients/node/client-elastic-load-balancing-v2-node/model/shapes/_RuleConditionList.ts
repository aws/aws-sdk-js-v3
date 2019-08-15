import { List as _List_ } from "@aws-sdk/types";
import { _RuleCondition } from "./_RuleCondition";

export const _RuleConditionList: _List_ = {
  type: "list",
  member: {
    shape: _RuleCondition
  }
};
