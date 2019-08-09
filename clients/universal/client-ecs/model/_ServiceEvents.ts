import { List as _List_ } from "@aws-sdk/types";
import { _ServiceEvent } from "./_ServiceEvent";

export const _ServiceEvents: _List_ = {
  type: "list",
  member: {
    shape: _ServiceEvent
  }
};
