import { List as _List_ } from "@aws-sdk/types";
import { _ConnectionNotification } from "./_ConnectionNotification";

export const _ConnectionNotificationSet: _List_ = {
  type: "list",
  member: {
    shape: _ConnectionNotification,
    locationName: "item"
  }
};
