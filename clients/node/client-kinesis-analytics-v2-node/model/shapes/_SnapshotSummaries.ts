import { List as _List_ } from "@aws-sdk/types";
import { _SnapshotDetails } from "./_SnapshotDetails";

export const _SnapshotSummaries: _List_ = {
  type: "list",
  member: {
    shape: _SnapshotDetails
  }
};
