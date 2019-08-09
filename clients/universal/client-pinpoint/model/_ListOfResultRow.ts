import { List as _List_ } from "@aws-sdk/types";
import { _ResultRow } from "./_ResultRow";

export const _ListOfResultRow: _List_ = {
  type: "list",
  member: {
    shape: _ResultRow
  }
};
