import { List as _List_ } from "@aws-sdk/types";
import { _TopicRuleListItem } from "./_TopicRuleListItem";

export const _TopicRuleList: _List_ = {
  type: "list",
  member: {
    shape: _TopicRuleListItem
  }
};
