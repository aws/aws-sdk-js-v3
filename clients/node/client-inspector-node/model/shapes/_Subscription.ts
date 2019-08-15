import { _EventSubscriptionList } from "./_EventSubscriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subscription: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "topicArn", "eventSubscriptions"],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    topicArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    eventSubscriptions: {
      shape: _EventSubscriptionList
    }
  }
};
