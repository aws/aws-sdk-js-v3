import { _EventSubscriptionsList } from "./_EventSubscriptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventSubscriptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    EventSubscriptionsList: {
      shape: _EventSubscriptionsList
    }
  }
};
