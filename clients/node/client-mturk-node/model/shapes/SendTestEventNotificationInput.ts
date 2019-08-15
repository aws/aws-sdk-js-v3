import { _NotificationSpecification } from "./_NotificationSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendTestEventNotificationInput: _Structure_ = {
  type: "structure",
  required: ["Notification", "TestEventType"],
  members: {
    Notification: {
      shape: _NotificationSpecification
    },
    TestEventType: {
      shape: {
        type: "string"
      }
    }
  }
};
