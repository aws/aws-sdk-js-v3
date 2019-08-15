import { List as _List_ } from "@aws-sdk/types";
import { _Stack } from "./_Stack";

export const _Stacks: _List_ = {
  type: "list",
  member: {
    shape: _Stack
  }
};
