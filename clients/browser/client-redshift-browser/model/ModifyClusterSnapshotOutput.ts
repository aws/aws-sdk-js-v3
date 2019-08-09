import { _Snapshot } from "./_Snapshot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Snapshot: {
      shape: _Snapshot
    }
  }
};
