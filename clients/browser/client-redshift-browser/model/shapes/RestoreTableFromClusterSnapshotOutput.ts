import { _TableRestoreStatus } from "./_TableRestoreStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreTableFromClusterSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableRestoreStatus: {
      shape: _TableRestoreStatus
    }
  }
};
