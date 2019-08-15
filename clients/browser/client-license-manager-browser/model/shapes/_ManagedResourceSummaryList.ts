import { List as _List_ } from "@aws-sdk/types";
import { _ManagedResourceSummary } from "./_ManagedResourceSummary";

export const _ManagedResourceSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _ManagedResourceSummary
  }
};
