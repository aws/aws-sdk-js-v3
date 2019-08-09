import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMinuteUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    estimatedMinutesRemaining: {
      shape: {
        type: "integer"
      }
    },
    isReservedMinutesCustomer: {
      shape: {
        type: "boolean"
      }
    },
    totalReservedMinuteAllocation: {
      shape: {
        type: "integer"
      }
    },
    totalScheduledMinutes: {
      shape: {
        type: "integer"
      }
    },
    upcomingMinutesScheduled: {
      shape: {
        type: "integer"
      }
    }
  }
};
