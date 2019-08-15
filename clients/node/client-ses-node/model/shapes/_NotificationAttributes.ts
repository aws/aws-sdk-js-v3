import { Map as _Map_ } from "@aws-sdk/types";
import { _IdentityNotificationAttributes } from "./_IdentityNotificationAttributes";

export const _NotificationAttributes: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _IdentityNotificationAttributes
  }
};
