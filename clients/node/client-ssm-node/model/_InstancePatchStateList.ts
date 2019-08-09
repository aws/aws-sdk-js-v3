import { List as _List_ } from "@aws-sdk/types";
import { _InstancePatchState } from "./_InstancePatchState";

export const _InstancePatchStateList: _List_ = {
  type: "list",
  member: {
    shape: _InstancePatchState
  }
};
