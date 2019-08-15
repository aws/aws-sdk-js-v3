import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationConfiguration: _Structure_ = {
  type: "structure",
  required: [],
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
    NotificationType: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
