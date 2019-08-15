import { _Notifications } from "./_Notifications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotificationsForBudgetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Notifications: {
      shape: _Notifications
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
