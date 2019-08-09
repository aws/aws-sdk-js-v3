import { List as _List_ } from "@aws-sdk/types";
import { _SnapshotSchedule } from "./_SnapshotSchedule";

export const _SnapshotScheduleList: _List_ = {
  type: "list",
  member: {
    shape: _SnapshotSchedule,
    locationName: "SnapshotSchedule"
  }
};
