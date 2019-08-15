import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutNotificationChannelInput: _Structure_ = {
  type: "structure",
  required: ["SnsTopicArn", "SnsRoleName"],
  members: {
    SnsTopicArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SnsRoleName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
