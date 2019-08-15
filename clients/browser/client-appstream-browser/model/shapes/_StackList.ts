import { List as _List_ } from "@aws-sdk/types";
import { _Stack } from "./_Stack";

export const _StackList: _List_ = {
  type: "list",
  member: {
    shape: _Stack
  }
};
