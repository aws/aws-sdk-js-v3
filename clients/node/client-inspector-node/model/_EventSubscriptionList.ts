import { List as _List_ } from "@aws-sdk/types";
import { _EventSubscription } from "./_EventSubscription";

export const _EventSubscriptionList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _EventSubscription
  }
};
