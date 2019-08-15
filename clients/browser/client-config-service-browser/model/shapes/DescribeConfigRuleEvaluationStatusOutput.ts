import { _ConfigRuleEvaluationStatusList } from "./_ConfigRuleEvaluationStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigRuleEvaluationStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRulesEvaluationStatus: {
      shape: _ConfigRuleEvaluationStatusList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
