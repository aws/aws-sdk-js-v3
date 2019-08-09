import { _DBSnapshotList } from "./_DBSnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBSnapshots: {
      shape: _DBSnapshotList
    }
  }
};
