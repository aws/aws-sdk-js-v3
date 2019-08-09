import { _Snapshots } from "./_Snapshots";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Snapshots: {
      shape: _Snapshots
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
