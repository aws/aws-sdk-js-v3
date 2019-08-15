import { List as _List_ } from "@aws-sdk/types";
import { _StackEvent } from "./_StackEvent";

export const _StackEvents: _List_ = {
  type: "list",
  member: {
    shape: _StackEvent
  }
};
