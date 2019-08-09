import { _NotificationConfigurations } from "./_NotificationConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotificationConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: ["NotificationConfigurations"],
  members: {
    NotificationConfigurations: {
      shape: _NotificationConfigurations
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
