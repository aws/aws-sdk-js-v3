import { List as _List_ } from "@aws-sdk/types";
import { _SnapshotInfo } from "./_SnapshotInfo";

export const _SnapshotSet: _List_ = {
  type: "list",
  member: {
    shape: _SnapshotInfo,
    locationName: "item"
  }
};
