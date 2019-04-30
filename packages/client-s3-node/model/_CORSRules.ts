import { List as _List_ } from "@aws-sdk/types";
import { _CORSRule } from "./_CORSRule";

export const _CORSRules: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _CORSRule
  }
};
