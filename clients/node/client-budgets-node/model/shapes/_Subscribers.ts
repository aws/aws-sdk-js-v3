import { List as _List_ } from "@aws-sdk/types";
import { _Subscriber } from "./_Subscriber";

export const _Subscribers: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Subscriber
  }
};
