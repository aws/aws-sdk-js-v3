import { List as _List_ } from "@aws-sdk/types";
import { _SnapshotCopyGrant } from "./_SnapshotCopyGrant";

export const _SnapshotCopyGrantList: _List_ = {
  type: "list",
  member: {
    shape: _SnapshotCopyGrant,
    locationName: "SnapshotCopyGrant"
  }
};
