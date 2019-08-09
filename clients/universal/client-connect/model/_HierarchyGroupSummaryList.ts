import { List as _List_ } from "@aws-sdk/types";
import { _HierarchyGroupSummary } from "./_HierarchyGroupSummary";

export const _HierarchyGroupSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _HierarchyGroupSummary
  }
};
