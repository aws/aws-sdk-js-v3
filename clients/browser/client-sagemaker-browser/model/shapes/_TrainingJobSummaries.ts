import { List as _List_ } from "@aws-sdk/types";
import { _TrainingJobSummary } from "./_TrainingJobSummary";

export const _TrainingJobSummaries: _List_ = {
  type: "list",
  member: {
    shape: _TrainingJobSummary
  }
};
