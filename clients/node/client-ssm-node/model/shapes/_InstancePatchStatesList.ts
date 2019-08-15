import { List as _List_ } from "@aws-sdk/types";
import { _InstancePatchState } from "./_InstancePatchState";

export const _InstancePatchStatesList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _InstancePatchState
  }
};
