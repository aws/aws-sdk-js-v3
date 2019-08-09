import { _ComplianceStringFilterList } from "./_ComplianceStringFilterList";
import { _ComplianceResourceIdList } from "./_ComplianceResourceIdList";
import { _ComplianceResourceTypeList } from "./_ComplianceResourceTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListComplianceItemsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _ComplianceStringFilterList
    },
    ResourceIds: {
      shape: _ComplianceResourceIdList
    },
    ResourceTypes: {
      shape: _ComplianceResourceTypeList
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
