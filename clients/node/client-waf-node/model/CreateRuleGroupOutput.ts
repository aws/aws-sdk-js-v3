import { _RuleGroup } from "./_RuleGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRuleGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleGroup: {
      shape: _RuleGroup
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
