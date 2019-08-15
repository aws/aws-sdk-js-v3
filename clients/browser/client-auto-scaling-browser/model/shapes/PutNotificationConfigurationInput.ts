import { _AutoScalingNotificationTypes } from "./_AutoScalingNotificationTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutNotificationConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "TopicARN", "NotificationTypes"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TopicARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationTypes: {
      shape: _AutoScalingNotificationTypes
    }
  }
};
