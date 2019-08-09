import { List as _List_ } from "@aws-sdk/types";
import { _CustomRule } from "./_CustomRule";

export const _CustomRules: _List_ = {
  type: "list",
  member: {
    shape: _CustomRule
  }
};
