import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRuleInput: _Structure_ = {
  type: "structure",
  required: ["RuleArn"],
  members: {
    RuleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
