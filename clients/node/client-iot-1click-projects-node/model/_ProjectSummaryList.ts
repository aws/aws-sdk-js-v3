import { List as _List_ } from "@aws-sdk/types";
import { _ProjectSummary } from "./_ProjectSummary";

export const _ProjectSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _ProjectSummary
  }
};
