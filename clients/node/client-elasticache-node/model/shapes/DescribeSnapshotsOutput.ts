import { _SnapshotList } from "./_SnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    Snapshots: {
      shape: _SnapshotList
    }
  }
};
