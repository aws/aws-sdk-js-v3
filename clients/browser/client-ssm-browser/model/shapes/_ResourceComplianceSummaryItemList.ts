import { List as _List_ } from "@aws-sdk/types";
import { _ResourceComplianceSummaryItem } from "./_ResourceComplianceSummaryItem";

export const _ResourceComplianceSummaryItemList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceComplianceSummaryItem
  }
};
