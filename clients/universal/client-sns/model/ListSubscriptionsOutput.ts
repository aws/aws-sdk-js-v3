import { _SubscriptionsList } from "./_SubscriptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSubscriptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Subscriptions: {
      shape: _SubscriptionsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
