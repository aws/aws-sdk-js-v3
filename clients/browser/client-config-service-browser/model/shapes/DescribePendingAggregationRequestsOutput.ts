import { _PendingAggregationRequestList } from "./_PendingAggregationRequestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePendingAggregationRequestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PendingAggregationRequests: {
      shape: _PendingAggregationRequestList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
