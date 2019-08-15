import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNotificationChannelOutput: _Structure_ = {
  type: "structure",
  required: [],
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
