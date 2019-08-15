import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    TopicStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
