import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidateMatchmakingRuleSetInput: _Structure_ = {
  type: "structure",
  required: ["RuleSetBody"],
  members: {
    RuleSetBody: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
