import { List as _List_ } from "@aws-sdk/types";
import { _SubResourceSummary } from "./_SubResourceSummary";

export const _SubResourceSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _SubResourceSummary
  }
};
