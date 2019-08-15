import { _ColumnInfoList } from "./_ColumnInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultSetMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ColumnInfo: {
      shape: _ColumnInfoList
    }
  }
};
