import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServerName: {
      shape: {
        type: "string",
        min: 1
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
