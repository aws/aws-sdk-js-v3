import { List as _List_ } from "@aws-sdk/types";
import { _StandardsSubscriptionRequest } from "./_StandardsSubscriptionRequest";

export const _StandardsSubscriptionRequests: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _StandardsSubscriptionRequest
  }
};
