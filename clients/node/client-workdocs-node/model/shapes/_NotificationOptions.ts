import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SendEmail: {
      shape: {
        type: "boolean"
      }
    },
    EmailMessage: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
