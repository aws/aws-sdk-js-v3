import { List as _List_ } from "@aws-sdk/types";
import { _ResultRows } from "./_ResultRows";

export const _QueryResults: _List_ = {
  type: "list",
  member: {
    shape: _ResultRows
  }
};
