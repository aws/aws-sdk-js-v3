import { List as _List_ } from "@aws-sdk/types";
import { _EvaluationResult } from "./_EvaluationResult";

export const _EvaluationResultsListType: _List_ = {
  type: "list",
  member: {
    shape: _EvaluationResult
  }
};
