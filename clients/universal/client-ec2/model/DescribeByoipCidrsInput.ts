import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeByoipCidrsInput: _Structure_ = {
  type: "structure",
  required: ["MaxResults"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
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
        type: "string"
      }
    }
  }
};
