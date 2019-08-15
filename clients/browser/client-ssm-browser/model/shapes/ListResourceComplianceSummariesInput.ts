import { _ComplianceStringFilterList } from "./_ComplianceStringFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceComplianceSummariesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _ComplianceStringFilterList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
