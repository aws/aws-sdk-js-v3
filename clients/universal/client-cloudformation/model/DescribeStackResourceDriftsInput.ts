import { _StackResourceDriftStatusFilters } from "./_StackResourceDriftStatusFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackResourceDriftsInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackResourceDriftStatusFilters: {
      shape: _StackResourceDriftStatusFilters
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
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
