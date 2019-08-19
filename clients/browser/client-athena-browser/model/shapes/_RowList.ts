import { List as _List_ } from "@aws-sdk/types";
import { _Row } from "./_Row";

export const _RowList: _List_ = {
  type: "list",
  member: {
    shape: _Row
  }
};
