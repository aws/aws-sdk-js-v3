import { List as _List_ } from "@aws-sdk/types";
import { _ComplianceSummaryByResourceType } from "./_ComplianceSummaryByResourceType";

export const _ComplianceSummariesByResourceType: _List_ = {
  type: "list",
  member: {
    shape: _ComplianceSummaryByResourceType
  }
};
