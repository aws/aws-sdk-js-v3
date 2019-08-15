import { List as _List_ } from "@aws-sdk/types";
import { _Subscription } from "./_Subscription";

export const _SubscriptionList: _List_ = {
  type: "list",
  member: {
    shape: _Subscription
  }
};
