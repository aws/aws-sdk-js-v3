import { _ComplianceSummaryItemList } from "./_ComplianceSummaryItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListComplianceSummariesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceSummaryItems: {
      shape: _ComplianceSummaryItemList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
