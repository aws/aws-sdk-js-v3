import { _ComplianceItemList } from "./_ComplianceItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListComplianceItemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceItems: {
      shape: _ComplianceItemList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
