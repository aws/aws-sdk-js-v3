import { _SnapshotList } from "./_SnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Snapshots: {
      shape: _SnapshotList,
      locationName: "snapshotSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
