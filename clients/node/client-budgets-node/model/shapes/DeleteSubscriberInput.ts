import { _Notification } from "./_Notification";
import { _Subscriber } from "./_Subscriber";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSubscriberInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "BudgetName", "Notification", "Subscriber"],
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
    Subscriber: {
      shape: _Subscriber
    }
  }
};
