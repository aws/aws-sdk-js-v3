import { List as _List_ } from "@aws-sdk/types";
import { _JobSummary } from "./_JobSummary";

export const _JobSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _JobSummary
  }
};
