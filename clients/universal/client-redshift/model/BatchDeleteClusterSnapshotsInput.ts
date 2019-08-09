import { _DeleteClusterSnapshotMessageList } from "./_DeleteClusterSnapshotMessageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteClusterSnapshotsInput: _Structure_ = {
  type: "structure",
  required: ["Identifiers"],
  members: {
    Identifiers: {
      shape: _DeleteClusterSnapshotMessageList
    }
  }
};
