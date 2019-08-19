import { List as _List_ } from "@aws-sdk/types";
import { _OpsItemNotification } from "./_OpsItemNotification";

export const _OpsItemNotifications: _List_ = {
  type: "list",
  member: {
    shape: _OpsItemNotification
  }
};
