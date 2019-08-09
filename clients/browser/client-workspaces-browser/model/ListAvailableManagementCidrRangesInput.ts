import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAvailableManagementCidrRangesInput: _Structure_ = {
  type: "structure",
  required: ["ManagementCidrRangeConstraint"],
  members: {
    ManagementCidrRangeConstraint: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
