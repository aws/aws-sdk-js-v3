import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSnapshotScheduleInput: _Structure_ = {
  type: "structure",
  required: ["ScheduleIdentifier"],
  members: {
    ScheduleIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
