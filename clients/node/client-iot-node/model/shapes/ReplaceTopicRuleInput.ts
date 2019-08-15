import { _TopicRulePayload } from "./_TopicRulePayload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReplaceTopicRuleInput: _Structure_ = {
  type: "structure",
  required: ["ruleName", "topicRulePayload"],
  members: {
    ruleName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "ruleName"
    },
    topicRulePayload: {
      shape: _TopicRulePayload
    }
  },
  payload: "topicRulePayload"
};
