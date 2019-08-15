import { List as _List_ } from "@aws-sdk/types";
import { _LogSubscription } from "./_LogSubscription";

export const _LogSubscriptions: _List_ = {
  type: "list",
  member: {
    shape: _LogSubscription
  }
};
