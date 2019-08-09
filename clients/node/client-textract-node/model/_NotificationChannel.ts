import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationChannel: _Structure_ = {
  type: "structure",
  required: ["SNSTopicArn", "RoleArn"],
  members: {
    SNSTopicArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
