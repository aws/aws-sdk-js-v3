import { List as _List_ } from "@aws-sdk/types";
import { _ManagedAction } from "./_ManagedAction";

export const _ManagedActions: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ManagedAction
  }
};
