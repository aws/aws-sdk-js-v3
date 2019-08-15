import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TopicRuleListItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ruleArn: {
      shape: {
        type: "string"
      }
    },
    ruleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    topicPattern: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    ruleDisabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
