import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
