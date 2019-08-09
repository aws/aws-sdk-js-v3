import { _RuleUpdates } from "./_RuleUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRuleInput: _Structure_ = {
  type: "structure",
  required: ["RuleId", "ChangeToken", "Updates"],
  members: {
    RuleId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _RuleUpdates
    }
  }
};
