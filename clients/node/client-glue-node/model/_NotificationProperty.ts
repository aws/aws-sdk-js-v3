import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationProperty: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NotifyDelayAfter: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
