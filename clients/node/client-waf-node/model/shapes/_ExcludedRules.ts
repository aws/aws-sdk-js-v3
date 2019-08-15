import { List as _List_ } from "@aws-sdk/types";
import { _ExcludedRule } from "./_ExcludedRule";

export const _ExcludedRules: _List_ = {
  type: "list",
  member: {
    shape: _ExcludedRule
  }
};
