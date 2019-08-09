import { _FilterList } from "./_FilterList";
import { _SlotDateTimeRangeRequest } from "./_SlotDateTimeRangeRequest";
import { _ScheduledInstanceRecurrenceRequest } from "./_ScheduledInstanceRecurrenceRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledInstanceAvailabilityInput: _Structure_ = {
  type: "structure",
  required: ["FirstSlotStartTimeRange", "Recurrence"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    FirstSlotStartTimeRange: {
      shape: _SlotDateTimeRangeRequest
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    MaxSlotDurationInHours: {
      shape: {
        type: "integer"
      }
    },
    MinSlotDurationInHours: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Recurrence: {
      shape: _ScheduledInstanceRecurrenceRequest
    }
  }
};
