import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterSnapshotAttribute } from "./_DBClusterSnapshotAttribute";

export const _DBClusterSnapshotAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterSnapshotAttribute,
    locationName: "DBClusterSnapshotAttribute"
  }
};
