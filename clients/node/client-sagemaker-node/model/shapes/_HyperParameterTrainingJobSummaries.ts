import { List as _List_ } from "@aws-sdk/types";
import { _HyperParameterTrainingJobSummary } from "./_HyperParameterTrainingJobSummary";

export const _HyperParameterTrainingJobSummaries: _List_ = {
  type: "list",
  member: {
    shape: _HyperParameterTrainingJobSummary
  }
};
