import { _ConfigRuleComplianceFilters } from "./_ConfigRuleComplianceFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAggregateComplianceByConfigRulesInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationAggregatorName"],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filters: {
      shape: _ConfigRuleComplianceFilters
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
