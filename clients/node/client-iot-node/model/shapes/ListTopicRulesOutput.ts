import { _TopicRuleList } from "./_TopicRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTopicRulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    rules: {
      shape: _TopicRuleList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
