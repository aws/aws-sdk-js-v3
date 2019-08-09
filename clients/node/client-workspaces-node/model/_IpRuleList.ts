import { List as _List_ } from "@aws-sdk/types";
import { _IpRuleItem } from "./_IpRuleItem";

export const _IpRuleList: _List_ = {
  type: "list",
  member: {
    shape: _IpRuleItem
  }
};
