import { _NotificationEventList } from "./_NotificationEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NotificationArn: {
      shape: {
        type: "string"
      }
    },
    NotificationEvents: {
      shape: _NotificationEventList
    },
    NotificationType: {
      shape: {
        type: "string"
      }
    }
  }
};
