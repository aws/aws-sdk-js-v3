import { List as _List_ } from "@aws-sdk/types";
import { _NetworkSummary } from "./_NetworkSummary";

export const _NetworkSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkSummary
  }
};
