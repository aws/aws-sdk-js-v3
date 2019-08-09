import { List as _List_ } from "@aws-sdk/types";
import { _LifecycleHook } from "./_LifecycleHook";

export const _LifecycleHooks: _List_ = {
  type: "list",
  member: {
    shape: _LifecycleHook
  }
};
