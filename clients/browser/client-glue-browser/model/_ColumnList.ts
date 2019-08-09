import { List as _List_ } from "@aws-sdk/types";
import { _Column } from "./_Column";

export const _ColumnList: _List_ = {
  type: "list",
  member: {
    shape: _Column
  }
};
