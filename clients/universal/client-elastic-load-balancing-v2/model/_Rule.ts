import { _RuleConditionList } from "./_RuleConditionList";
import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Rule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleArn: {
      shape: {
        type: "string"
      }
    },
    Priority: {
      shape: {
        type: "string"
      }
    },
    Conditions: {
      shape: _RuleConditionList
    },
    Actions: {
      shape: _Actions
    },
    IsDefault: {
      shape: {
        type: "boolean"
      }
    }
  }
};
