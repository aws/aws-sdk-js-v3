import { List as _List_ } from "@aws-sdk/types";
import { _Delegate } from "./_Delegate";

export const _ResourceDelegates: _List_ = {
  type: "list",
  member: {
    shape: _Delegate
  }
};
