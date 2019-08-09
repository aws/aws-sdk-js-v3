import { _ConfigRules } from "./_ConfigRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigRulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRules: {
      shape: _ConfigRules
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
