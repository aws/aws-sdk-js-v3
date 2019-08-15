import { List as _List_ } from "@aws-sdk/types";
import { _StandardsSubscription } from "./_StandardsSubscription";

export const _StandardsSubscriptions: _List_ = {
  type: "list",
  member: {
    shape: _StandardsSubscription
  }
};
