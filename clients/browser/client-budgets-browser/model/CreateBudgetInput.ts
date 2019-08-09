import { _Budget } from "./_Budget";
import { _NotificationWithSubscribersList } from "./_NotificationWithSubscribersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBudgetInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "Budget"],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Budget: {
      shape: _Budget
    },
    NotificationsWithSubscribers: {
      shape: _NotificationWithSubscribersList
    }
  }
};
