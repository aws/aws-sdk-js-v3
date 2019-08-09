import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAggregationAuthorizationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
