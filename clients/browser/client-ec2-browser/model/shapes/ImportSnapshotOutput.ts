import { _SnapshotTaskDetail } from "./_SnapshotTaskDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    ImportTaskId: {
      shape: {
        type: "string"
      },
      locationName: "importTaskId"
    },
    SnapshotTaskDetail: {
      shape: _SnapshotTaskDetail,
      locationName: "snapshotTaskDetail"
    }
  }
};
