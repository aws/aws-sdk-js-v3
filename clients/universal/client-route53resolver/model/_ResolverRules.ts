import { List as _List_ } from "@aws-sdk/types";
import { _ResolverRule } from "./_ResolverRule";

export const _ResolverRules: _List_ = {
  type: "list",
  member: {
    shape: _ResolverRule
  }
};
