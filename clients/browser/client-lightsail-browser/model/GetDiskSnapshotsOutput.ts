import { _DiskSnapshotList } from "./_DiskSnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDiskSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    diskSnapshots: {
      shape: _DiskSnapshotList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
