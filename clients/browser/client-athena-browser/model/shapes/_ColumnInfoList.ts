import { List as _List_ } from "@aws-sdk/types";
import { _ColumnInfo } from "./_ColumnInfo";

export const _ColumnInfoList: _List_ = {
  type: "list",
  member: {
    shape: _ColumnInfo
  }
};
