import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSnapshotScheduleInput: _Structure_ = {
  type: "structure",
  required: ["VolumeARN", "StartAt", "RecurrenceInHours"],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    StartAt: {
      shape: {
        type: "integer"
      }
    },
    RecurrenceInHours: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
