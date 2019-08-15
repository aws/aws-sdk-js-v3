import { _InstanceSnapshotList } from "./_InstanceSnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceSnapshotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceSnapshots: {
      shape: _InstanceSnapshotList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
