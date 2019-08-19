import { List as _List_ } from "@aws-sdk/types";
import { _TraceSummary } from "./_TraceSummary";

export const _TraceSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _TraceSummary
  }
};
