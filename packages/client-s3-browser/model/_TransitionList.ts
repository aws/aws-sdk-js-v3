import { List as _List_ } from "@aws-sdk/types";
import { _Transition } from "./_Transition";

export const _TransitionList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _Transition
  }
};
