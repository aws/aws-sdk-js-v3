import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterSnapshot } from "./_DBClusterSnapshot";

export const _DBClusterSnapshotList: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterSnapshot,
    locationName: "DBClusterSnapshot"
  }
};
