import { _TopicRule } from "./_TopicRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTopicRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ruleArn: {
      shape: {
        type: "string"
      }
    },
    rule: {
      shape: _TopicRule
    }
  }
};
