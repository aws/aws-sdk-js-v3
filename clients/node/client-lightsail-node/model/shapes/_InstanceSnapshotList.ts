import { List as _List_ } from "@aws-sdk/types";
import { _InstanceSnapshot } from "./_InstanceSnapshot";

export const _InstanceSnapshotList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceSnapshot
  }
};
