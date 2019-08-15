import { _SnapshotSummaries } from "./_SnapshotSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotSummaries: {
      shape: _SnapshotSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
