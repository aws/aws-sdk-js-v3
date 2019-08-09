import { _Notification } from "./_Notification";
import { _Subscribers } from "./_Subscribers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNotificationInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "BudgetName", "Notification", "Subscribers"],
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
    Subscribers: {
      shape: _Subscribers
    }
  }
};
