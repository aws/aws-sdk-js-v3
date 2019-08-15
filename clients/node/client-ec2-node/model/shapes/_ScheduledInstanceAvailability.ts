import { _ScheduledInstanceRecurrence } from "./_ScheduledInstanceRecurrence";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstanceAvailability: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    AvailableInstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "availableInstanceCount"
    },
    FirstSlotStartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "firstSlotStartTime"
    },
    HourlyPrice: {
      shape: {
        type: "string"
      },
      locationName: "hourlyPrice"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    MaxTermDurationInDays: {
      shape: {
        type: "integer"
      },
      locationName: "maxTermDurationInDays"
    },
    MinTermDurationInDays: {
      shape: {
        type: "integer"
      },
      locationName: "minTermDurationInDays"
    },
    NetworkPlatform: {
      shape: {
        type: "string"
      },
      locationName: "networkPlatform"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    PurchaseToken: {
      shape: {
        type: "string"
      },
      locationName: "purchaseToken"
    },
    Recurrence: {
      shape: _ScheduledInstanceRecurrence,
      locationName: "recurrence"
    },
    SlotDurationInHours: {
      shape: {
        type: "integer"
      },
      locationName: "slotDurationInHours"
    },
    TotalScheduledInstanceHours: {
      shape: {
        type: "integer"
      },
      locationName: "totalScheduledInstanceHours"
    }
  }
};
