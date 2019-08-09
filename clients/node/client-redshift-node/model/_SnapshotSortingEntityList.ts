import { List as _List_ } from "@aws-sdk/types";
import { _SnapshotSortingEntity } from "./_SnapshotSortingEntity";

export const _SnapshotSortingEntityList: _List_ = {
  type: "list",
  member: {
    shape: _SnapshotSortingEntity,
    locationName: "SnapshotSortingEntity"
  }
};
