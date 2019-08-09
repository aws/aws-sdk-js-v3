import { List as _List_ } from "@aws-sdk/types";
import { _DBSnapshotAttribute } from "./_DBSnapshotAttribute";

export const _DBSnapshotAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _DBSnapshotAttribute,
    locationName: "DBSnapshotAttribute"
  }
};
