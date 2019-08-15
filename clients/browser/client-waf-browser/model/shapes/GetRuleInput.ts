import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRuleInput: _Structure_ = {
  type: "structure",
  required: ["RuleId"],
  members: {
    RuleId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
