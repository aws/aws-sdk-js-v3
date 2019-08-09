import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CapacityReservation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CapacityReservationId: {
      shape: {
        type: "string"
      },
      locationName: "capacityReservationId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    CapacityReservationArn: {
      shape: {
        type: "string"
      },
      locationName: "capacityReservationArn"
    },
    AvailabilityZoneId: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZoneId"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    InstancePlatform: {
      shape: {
        type: "string"
      },
      locationName: "instancePlatform"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Tenancy: {
      shape: {
        type: "string"
      },
      locationName: "tenancy"
    },
    TotalInstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "totalInstanceCount"
    },
    AvailableInstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "availableInstanceCount"
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      },
      locationName: "ebsOptimized"
    },
    EphemeralStorage: {
      shape: {
        type: "boolean"
      },
      locationName: "ephemeralStorage"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    EndDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "endDate"
    },
    EndDateType: {
      shape: {
        type: "string"
      },
      locationName: "endDateType"
    },
    InstanceMatchCriteria: {
      shape: {
        type: "string"
      },
      locationName: "instanceMatchCriteria"
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "createDate"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
