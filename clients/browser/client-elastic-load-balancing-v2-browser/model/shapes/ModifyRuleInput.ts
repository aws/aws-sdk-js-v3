import { _RuleConditionList } from "./_RuleConditionList";
import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyRuleInput: _Structure_ = {
  type: "structure",
  required: ["RuleArn"],
  members: {
    RuleArn: {
      shape: {
        type: "string"
      }
    },
    Conditions: {
      shape: _RuleConditionList
    },
    Actions: {
      shape: _Actions
    }
  }
};
