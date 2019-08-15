import { _EvaluationResultQualifier } from "./_EvaluationResultQualifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EvaluationResultIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EvaluationResultQualifier: {
      shape: _EvaluationResultQualifier
    },
    OrderingTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
