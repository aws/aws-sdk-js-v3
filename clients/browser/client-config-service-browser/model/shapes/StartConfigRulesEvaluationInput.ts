import { _ReevaluateConfigRuleNames } from "./_ReevaluateConfigRuleNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartConfigRulesEvaluationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRuleNames: {
      shape: _ReevaluateConfigRuleNames
    }
  }
};
