import { _SnapshotScheduleList } from "./_SnapshotScheduleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotSchedulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotSchedules: {
      shape: _SnapshotScheduleList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
