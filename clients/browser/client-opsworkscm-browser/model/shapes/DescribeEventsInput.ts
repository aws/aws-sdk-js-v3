import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventsInput: _Structure_ = {
  type: "structure",
  required: ["ServerName"],
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
