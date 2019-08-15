import { _AggregateEvaluationResultList } from "./_AggregateEvaluationResultList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAggregateComplianceDetailsByConfigRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AggregateEvaluationResults: {
      shape: _AggregateEvaluationResultList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
