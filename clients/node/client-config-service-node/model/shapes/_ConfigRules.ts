import { List as _List_ } from "@aws-sdk/types";
import { _ConfigRule } from "./_ConfigRule";

export const _ConfigRules: _List_ = {
  type: "list",
  member: {
    shape: _ConfigRule
  }
};
