import { List as _List_ } from "@aws-sdk/types";
import { _DiskSnapshot } from "./_DiskSnapshot";

export const _DiskSnapshotList: _List_ = {
  type: "list",
  member: {
    shape: _DiskSnapshot
  }
};
