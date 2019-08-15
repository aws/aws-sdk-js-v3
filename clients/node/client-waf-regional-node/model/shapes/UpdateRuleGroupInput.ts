import { _RuleGroupUpdates } from "./_RuleGroupUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRuleGroupInput: _Structure_ = {
  type: "structure",
  required: ["RuleGroupId", "Updates", "ChangeToken"],
  members: {
    RuleGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _RuleGroupUpdates
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
