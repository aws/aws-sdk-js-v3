import { List as _List_ } from "@aws-sdk/types";
import { _ColumnMetadata } from "./_ColumnMetadata";

export const _Metadata: _List_ = {
  type: "list",
  member: {
    shape: _ColumnMetadata
  }
};
