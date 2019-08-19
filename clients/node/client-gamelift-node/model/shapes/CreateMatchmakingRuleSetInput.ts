import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMatchmakingRuleSetInput: _Structure_ = {
  type: "structure",
  required: ["Name", "RuleSetBody"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    RuleSetBody: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
