import { List as _List_ } from "@aws-sdk/types";
import { _PatchRule } from "./_PatchRule";

export const _PatchRuleList: _List_ = {
  type: "list",
  member: {
    shape: _PatchRule
  }
};
