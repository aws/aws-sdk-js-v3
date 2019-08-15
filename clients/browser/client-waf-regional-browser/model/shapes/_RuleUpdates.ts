import { List as _List_ } from "@aws-sdk/types";
import { _RuleUpdate } from "./_RuleUpdate";

export const _RuleUpdates: _List_ = {
  type: "list",
  member: {
    shape: _RuleUpdate
  }
};
