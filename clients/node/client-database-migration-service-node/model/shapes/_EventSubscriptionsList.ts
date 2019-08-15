import { List as _List_ } from "@aws-sdk/types";
import { _EventSubscription } from "./_EventSubscription";

export const _EventSubscriptionsList: _List_ = {
  type: "list",
  member: {
    shape: _EventSubscription
  }
};
