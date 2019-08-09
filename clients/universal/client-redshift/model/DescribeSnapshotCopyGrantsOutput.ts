import { _SnapshotCopyGrantList } from "./_SnapshotCopyGrantList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotCopyGrantsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    SnapshotCopyGrants: {
      shape: _SnapshotCopyGrantList
    }
  }
};
