import { _OccurrenceDayRequestSet } from "./_OccurrenceDayRequestSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstanceRecurrenceRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Frequency: {
      shape: {
        type: "string"
      }
    },
    Interval: {
      shape: {
        type: "integer"
      }
    },
    OccurrenceDays: {
      shape: _OccurrenceDayRequestSet,
      locationName: "OccurrenceDay"
    },
    OccurrenceRelativeToEnd: {
      shape: {
        type: "boolean"
      }
    },
    OccurrenceUnit: {
      shape: {
        type: "string"
      }
    }
  }
};
