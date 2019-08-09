import { _NameStringList } from "./_NameStringList";
import { _ColumnValueStringList } from "./_ColumnValueStringList";
import { _LocationMap } from "./_LocationMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SkewedInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkewedColumnNames: {
      shape: _NameStringList
    },
    SkewedColumnValues: {
      shape: _ColumnValueStringList
    },
    SkewedColumnValueLocationMaps: {
      shape: _LocationMap
    }
  }
};
