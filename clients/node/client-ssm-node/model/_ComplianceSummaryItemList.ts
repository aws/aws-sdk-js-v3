import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceSummaryItem } from "./_ComplianceSummaryItem";

export const _ComplianceSummaryItemList: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceSummaryItem
  }
};
