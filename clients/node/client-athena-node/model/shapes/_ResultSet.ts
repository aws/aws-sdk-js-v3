import { _RowList } from "./_RowList";
import { _ResultSetMetadata } from "./_ResultSetMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rows: {
      shape: _RowList
    },
    ResultSetMetadata: {
      shape: _ResultSetMetadata
    }
  }
};
