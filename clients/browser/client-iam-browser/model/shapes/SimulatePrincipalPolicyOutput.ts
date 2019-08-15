import { _EvaluationResultsListType } from "./_EvaluationResultsListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SimulatePrincipalPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EvaluationResults: {
      shape: _EvaluationResultsListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
