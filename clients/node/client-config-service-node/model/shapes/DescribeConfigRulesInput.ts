import { _ConfigRuleNames } from "./_ConfigRuleNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigRulesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRuleNames: {
      shape: _ConfigRuleNames
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
