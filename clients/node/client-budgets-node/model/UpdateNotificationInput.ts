import { _Notification } from "./_Notification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateNotificationInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "BudgetName", "OldNotification", "NewNotification"],
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
    OldNotification: {
      shape: _Notification
    },
    NewNotification: {
      shape: _Notification
    }
  }
};
