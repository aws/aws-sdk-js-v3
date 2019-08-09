import { _SnapshotSet } from "./_SnapshotSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Snapshots: {
      shape: _SnapshotSet,
      locationName: "snapshotSet"
    }
  }
};
