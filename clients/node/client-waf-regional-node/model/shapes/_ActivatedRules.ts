import { List as _List_ } from "@aws-sdk/types";
import { _ActivatedRule } from "./_ActivatedRule";

export const _ActivatedRules: _List_ = {
  type: "list",
  member: {
    shape: _ActivatedRule
  }
};
