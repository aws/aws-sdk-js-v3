import { List as _List_ } from "@aws-sdk/types";
import { _SubscriptionFilter } from "./_SubscriptionFilter";

export const _SubscriptionFilters: _List_ = {
  type: "list",
  member: {
    shape: _SubscriptionFilter
  }
};
