import { _OccurrenceDaySet } from "./_OccurrenceDaySet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstanceRecurrence: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Frequency: {
      shape: {
        type: "string"
      },
      locationName: "frequency"
    },
    Interval: {
      shape: {
        type: "integer"
      },
      locationName: "interval"
    },
    OccurrenceDaySet: {
      shape: _OccurrenceDaySet,
      locationName: "occurrenceDaySet"
    },
    OccurrenceRelativeToEnd: {
      shape: {
        type: "boolean"
      },
      locationName: "occurrenceRelativeToEnd"
    },
    OccurrenceUnit: {
      shape: {
        type: "string"
      },
      locationName: "occurrenceUnit"
    }
  }
};
