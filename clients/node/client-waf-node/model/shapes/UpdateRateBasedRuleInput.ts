import { _RuleUpdates } from "./_RuleUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRateBasedRuleInput: _Structure_ = {
  type: "structure",
  required: ["RuleId", "ChangeToken", "Updates", "RateLimit"],
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
    },
    RateLimit: {
      shape: {
        type: "integer",
        min: 2000
      }
    }
  }
};
