import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRuleGroupInput: _Structure_ = {
  type: "structure",
  required: ["RuleGroupId"],
  members: {
    RuleGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
