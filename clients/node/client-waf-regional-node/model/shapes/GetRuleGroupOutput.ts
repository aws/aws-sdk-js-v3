import { _RuleGroup } from "./_RuleGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRuleGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleGroup: {
      shape: _RuleGroup
    }
  }
};
