import { _ResourceComplianceSummaryItemList } from "./_ResourceComplianceSummaryItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceComplianceSummariesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceComplianceSummaryItems: {
      shape: _ResourceComplianceSummaryItemList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
