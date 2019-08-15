import { List as _List_ } from "@aws-sdk/types";
import { _ViolationEvent } from "./_ViolationEvent";

export const _ViolationEvents: _List_ = {
  type: "list",
  member: {
    shape: _ViolationEvent
  }
};
