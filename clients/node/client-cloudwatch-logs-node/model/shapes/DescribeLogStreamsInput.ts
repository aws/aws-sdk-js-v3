import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLogStreamsInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logStreamNamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    orderBy: {
      shape: {
        type: "string"
      }
    },
    descending: {
      shape: {
        type: "boolean"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
