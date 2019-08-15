import { _ScheduledInstanceRecurrence } from "./_ScheduledInstanceRecurrence";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "createDate"
    },
    HourlyPrice: {
      shape: {
        type: "string"
      },
      locationName: "hourlyPrice"
    },
    InstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "instanceCount"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    NetworkPlatform: {
      shape: {
        type: "string"
      },
      locationName: "networkPlatform"
    },
    NextSlotStartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "nextSlotStartTime"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    PreviousSlotEndTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "previousSlotEndTime"
    },
    Recurrence: {
      shape: _ScheduledInstanceRecurrence,
      locationName: "recurrence"
    },
    ScheduledInstanceId: {
      shape: {
        type: "string"
      },
      locationName: "scheduledInstanceId"
    },
    SlotDurationInHours: {
      shape: {
        type: "integer"
      },
      locationName: "slotDurationInHours"
    },
    TermEndDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "termEndDate"
    },
    TermStartDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "termStartDate"
    },
    TotalScheduledInstanceHours: {
      shape: {
        type: "integer"
      },
      locationName: "totalScheduledInstanceHours"
    }
  }
};
