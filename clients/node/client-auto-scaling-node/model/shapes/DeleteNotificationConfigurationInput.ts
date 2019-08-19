import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNotificationConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "TopicARN"],
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
    }
  }
};
