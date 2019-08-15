import { List as _List_ } from "@aws-sdk/types";
import { _RulePriorityPair } from "./_RulePriorityPair";

export const _RulePriorityList: _List_ = {
  type: "list",
  member: {
    shape: _RulePriorityPair
  }
};
