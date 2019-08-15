import { _GetEntitlementFilters } from "./_GetEntitlementFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEntitlementsInput: _Structure_ = {
  type: "structure",
  required: ["ProductCode"],
  members: {
    ProductCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filter: {
      shape: _GetEntitlementFilters
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
