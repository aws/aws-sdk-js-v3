import { _NotificationSpecification } from "./_NotificationSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateNotificationSettingsInput: _Structure_ = {
  type: "structure",
  required: ["HITTypeId"],
  members: {
    HITTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Notification: {
      shape: _NotificationSpecification
    },
    Active: {
      shape: {
        type: "boolean"
      }
    }
  }
};
