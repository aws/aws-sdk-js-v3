import { _DBClusterSnapshotList } from "./_DBClusterSnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBClusterSnapshots: {
      shape: _DBClusterSnapshotList
    }
  }
};
