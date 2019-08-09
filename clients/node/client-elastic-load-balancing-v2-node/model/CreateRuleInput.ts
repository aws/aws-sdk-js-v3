import { _RuleConditionList } from "./_RuleConditionList";
import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRuleInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn", "Conditions", "Priority", "Actions"],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
    },
    Conditions: {
      shape: _RuleConditionList
    },
    Priority: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Actions: {
      shape: _Actions
    }
  }
};
