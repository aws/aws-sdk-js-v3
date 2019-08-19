import { _EvaluationResults } from "./_EvaluationResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceDetailsByConfigRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EvaluationResults: {
      shape: _EvaluationResults
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
