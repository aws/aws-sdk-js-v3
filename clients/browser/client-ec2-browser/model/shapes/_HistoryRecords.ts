import { List as _List_ } from "@aws-sdk/types";
import { _HistoryRecord } from "./_HistoryRecord";

export const _HistoryRecords: _List_ = {
  type: "list",
  member: {
    shape: _HistoryRecord,
    locationName: "item"
  }
};
