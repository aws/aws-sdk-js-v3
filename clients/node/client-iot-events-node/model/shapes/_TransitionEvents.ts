import { List as _List_ } from "@aws-sdk/types";
import { _TransitionEvent } from "./_TransitionEvent";

export const _TransitionEvents: _List_ = {
  type: "list",
  member: {
    shape: _TransitionEvent
  }
};
