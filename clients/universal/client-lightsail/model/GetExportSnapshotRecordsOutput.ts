import { _ExportSnapshotRecordList } from "./_ExportSnapshotRecordList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExportSnapshotRecordsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportSnapshotRecords: {
      shape: _ExportSnapshotRecordList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
