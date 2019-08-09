import { List as _List_ } from "@aws-sdk/types";
import { _LifecycleEvent } from "./_LifecycleEvent";

export const _LifecycleEventList: _List_ = {
  type: "list",
  member: {
    shape: _LifecycleEvent
  }
};
