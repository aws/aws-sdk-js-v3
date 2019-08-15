import { List as _List_ } from "@aws-sdk/types";
import { _StackError } from "./_StackError";

export const _StackErrors: _List_ = {
  type: "list",
  member: {
    shape: _StackError
  }
};
