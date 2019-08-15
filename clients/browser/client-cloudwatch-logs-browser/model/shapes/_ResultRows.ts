import { List as _List_ } from "@aws-sdk/types";
import { _ResultField } from "./_ResultField";

export const _ResultRows: _List_ = {
  type: "list",
  member: {
    shape: _ResultField
  }
};
