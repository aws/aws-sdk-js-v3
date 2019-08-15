import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityHeadersInNotificationsEnabledInput: _Structure_ = {
  type: "structure",
  required: ["Identity", "NotificationType", "Enabled"],
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
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
