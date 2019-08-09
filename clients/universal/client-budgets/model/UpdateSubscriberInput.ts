import { _Notification } from "./_Notification";
import { _Subscriber } from "./_Subscriber";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSubscriberInput: _Structure_ = {
  type: "structure",
  required: [
    "AccountId",
    "BudgetName",
    "Notification",
    "OldSubscriber",
    "NewSubscriber"
  ],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    BudgetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Notification: {
      shape: _Notification
    },
    OldSubscriber: {
      shape: _Subscriber
    },
    NewSubscriber: {
      shape: _Subscriber
    }
  }
};
