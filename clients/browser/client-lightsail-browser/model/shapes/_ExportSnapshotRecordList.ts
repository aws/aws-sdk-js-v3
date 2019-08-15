import { List as _List_ } from "@aws-sdk/types";
import { _ExportSnapshotRecord } from "./_ExportSnapshotRecord";

export const _ExportSnapshotRecordList: _List_ = {
  type: "list",
  member: {
    shape: _ExportSnapshotRecord
  }
};
