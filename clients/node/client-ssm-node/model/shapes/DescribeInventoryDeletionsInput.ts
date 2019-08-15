import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInventoryDeletionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeletionId: {
      shape: {
        type: "string"
      }
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
