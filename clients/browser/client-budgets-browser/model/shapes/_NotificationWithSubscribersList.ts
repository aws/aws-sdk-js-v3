import { List as _List_ } from "@aws-sdk/types";
import { _NotificationWithSubscribers } from "./_NotificationWithSubscribers";

export const _NotificationWithSubscribersList: _List_ = {
  type: "list",
  member: {
    shape: _NotificationWithSubscribers
  }
};
