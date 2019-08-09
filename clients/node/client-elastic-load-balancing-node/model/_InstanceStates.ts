import { List as _List_ } from "@aws-sdk/types";
import { _InstanceState } from "./_InstanceState";

export const _InstanceStates: _List_ = {
  type: "list",
  member: {
    shape: _InstanceState
  }
};
