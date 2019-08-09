import { _SubscriptionList } from "./_SubscriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEventSubscriptionsOutput: _Structure_ = {
  type: "structure",
  required: ["subscriptions"],
  members: {
    subscriptions: {
      shape: _SubscriptionList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
