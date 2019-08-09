import { _AggregateComplianceByConfigRuleList } from "./_AggregateComplianceByConfigRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAggregateComplianceByConfigRulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AggregateComplianceByConfigRules: {
      shape: _AggregateComplianceByConfigRuleList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
