import { _RateBasedRule } from "./_RateBasedRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRateBasedRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rule: {
      shape: _RateBasedRule
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
