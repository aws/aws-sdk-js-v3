import { List as _List_ } from "@aws-sdk/types";
import { _HistoryRecordEntry } from "./_HistoryRecordEntry";

export const _HistoryRecordSet: _List_ = {
  type: "list",
  member: {
    shape: _HistoryRecordEntry,
    locationName: "item"
  }
};
