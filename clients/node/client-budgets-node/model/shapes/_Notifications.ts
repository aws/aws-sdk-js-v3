import { List as _List_ } from "@aws-sdk/types";
import { _Notification } from "./_Notification";

export const _Notifications: _List_ = {
  type: "list",
  member: {
    shape: _Notification
  }
};
