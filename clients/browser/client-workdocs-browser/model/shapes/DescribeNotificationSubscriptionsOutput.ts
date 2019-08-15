import { _SubscriptionList } from "./_SubscriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotificationSubscriptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Subscriptions: {
      shape: _SubscriptionList
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
