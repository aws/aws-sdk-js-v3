import { List as _List_ } from "@aws-sdk/types";
import { _Snapshot } from "./_Snapshot";

export const _SnapshotList: _List_ = {
  type: "list",
  member: {
    shape: _Snapshot,
    locationName: "Snapshot"
  }
};
