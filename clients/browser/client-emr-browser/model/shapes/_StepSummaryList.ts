import { List as _List_ } from "@aws-sdk/types";
import { _StepSummary } from "./_StepSummary";

export const _StepSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _StepSummary
  }
};
