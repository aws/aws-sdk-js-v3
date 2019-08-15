import { List as _List_ } from "@aws-sdk/types";
import { _HyperParameterTuningJobSummary } from "./_HyperParameterTuningJobSummary";

export const _HyperParameterTuningJobSummaries: _List_ = {
  type: "list",
  member: {
    shape: _HyperParameterTuningJobSummary
  }
};
