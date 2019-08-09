import { _Notification } from "./_Notification";
import { _Subscribers } from "./_Subscribers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationWithSubscribers: _Structure_ = {
  type: "structure",
  required: ["Notification", "Subscribers"],
  members: {
    Notification: {
      shape: _Notification
    },
    Subscribers: {
      shape: _Subscribers
    }
  }
};
