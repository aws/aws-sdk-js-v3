import { List as _List_ } from "@aws-sdk/types";

export const _ScheduledSnapshotTimeList: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "timestamp"
    },
    locationName: "SnapshotTime"
  }
};
