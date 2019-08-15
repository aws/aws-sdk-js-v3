import { _ActionList } from "./_ActionList";
import { _Action } from "./_Action";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TopicRule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ruleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    createdAt: {
      shape: {
        type: "timestamp"
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
