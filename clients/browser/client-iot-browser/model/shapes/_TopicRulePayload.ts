import { _ActionList } from "./_ActionList";
import { _Action } from "./_Action";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TopicRulePayload: _Structure_ = {
  type: "structure",
  required: ["sql", "actions"],
  members: {
    sql: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    actions: {
      shape: _ActionList
    },
    ruleDisabled: {
      shape: {
        type: "boolean"
      }
    },
    awsIotSqlVersion: {
      shape: {
        type: "string"
      }
    },
    errorAction: {
      shape: _Action
    }
  }
};
