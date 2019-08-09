import { List as _List_ } from "@aws-sdk/types";
import { _SecondaryStatusTransition } from "./_SecondaryStatusTransition";

export const _SecondaryStatusTransitions: _List_ = {
  type: "list",
  member: {
    shape: _SecondaryStatusTransition
  }
};
