import { List as _List_ } from "@aws-sdk/types";
import { _SnapshotDetail } from "./_SnapshotDetail";

export const _SnapshotDetailList: _List_ = {
  type: "list",
  member: {
    shape: _SnapshotDetail,
    locationName: "item"
  }
};
