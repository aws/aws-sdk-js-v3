import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRateBasedRuleInput: _Structure_ = {
  type: "structure",
  required: ["RuleId", "ChangeToken"],
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
    }
  }
};
