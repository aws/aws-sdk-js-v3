import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRuleGroupInput: _Structure_ = {
  type: "structure",
  required: ["RuleGroupId", "ChangeToken"],
  members: {
    RuleGroupId: {
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
