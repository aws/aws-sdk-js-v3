import { _DBClusterSnapshotAttributesResult } from "./_DBClusterSnapshotAttributesResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterSnapshotAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterSnapshotAttributesResult: {
      shape: _DBClusterSnapshotAttributesResult
    }
  }
};
