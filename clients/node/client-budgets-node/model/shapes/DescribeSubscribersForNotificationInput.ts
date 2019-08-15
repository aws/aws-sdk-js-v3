import { _Notification } from "./_Notification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubscribersForNotificationInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "BudgetName", "Notification"],
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
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
