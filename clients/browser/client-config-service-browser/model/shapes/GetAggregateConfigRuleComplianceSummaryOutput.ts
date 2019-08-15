import { _AggregateComplianceCountList } from "./_AggregateComplianceCountList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAggregateConfigRuleComplianceSummaryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupByKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AggregateComplianceCounts: {
      shape: _AggregateComplianceCountList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
