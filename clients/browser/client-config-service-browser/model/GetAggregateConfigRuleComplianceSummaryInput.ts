import { _ConfigRuleComplianceSummaryFilters } from "./_ConfigRuleComplianceSummaryFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAggregateConfigRuleComplianceSummaryInput: _Structure_ = {
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
      shape: _ConfigRuleComplianceSummaryFilters
    },
    GroupByKey: {
      shape: {
        type: "string"
      }
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
