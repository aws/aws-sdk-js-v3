import { List as _List_ } from "@aws-sdk/types";
import { _AggregateEvaluationResult } from "./_AggregateEvaluationResult";

export const _AggregateEvaluationResultList: _List_ = {
  type: "list",
  member: {
    shape: _AggregateEvaluationResult
  }
};
