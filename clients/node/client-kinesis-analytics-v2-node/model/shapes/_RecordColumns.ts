import { List as _List_ } from "@aws-sdk/types";
import { _RecordColumn } from "./_RecordColumn";

export const _RecordColumns: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RecordColumn
  }
};
