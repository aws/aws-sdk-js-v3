import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityNotificationTopicInput: _Structure_ = {
  type: "structure",
  required: ["Identity", "NotificationType"],
  members: {
    Identity: {
      shape: {
        type: "string"
      }
    },
    NotificationType: {
      shape: {
        type: "string"
      }
    },
    SnsTopic: {
      shape: {
        type: "string"
      }
    }
  }
};
