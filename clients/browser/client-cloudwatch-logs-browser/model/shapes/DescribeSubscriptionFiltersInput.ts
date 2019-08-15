import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubscriptionFiltersInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filterNamePrefix: {
      shape: {
        type: "string",
        min: 1
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
