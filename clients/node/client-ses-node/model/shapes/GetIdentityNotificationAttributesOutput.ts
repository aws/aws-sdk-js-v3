import { _NotificationAttributes } from "./_NotificationAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityNotificationAttributesOutput: _Structure_ = {
  type: "structure",
  required: ["NotificationAttributes"],
  members: {
    NotificationAttributes: {
      shape: _NotificationAttributes
    }
  }
};
