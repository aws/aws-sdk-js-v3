import { _AggregationAuthorizationList } from "./_AggregationAuthorizationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAggregationAuthorizationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AggregationAuthorizations: {
      shape: _AggregationAuthorizationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
