import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotScheduleOutput: _Structure_ = {
  type: "structure",
  required: [],
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
    Timezone: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
