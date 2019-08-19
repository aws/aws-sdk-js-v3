import { _SubscriptionFilters } from "./_SubscriptionFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubscriptionFiltersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    subscriptionFilters: {
      shape: _SubscriptionFilters
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
