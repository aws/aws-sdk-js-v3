import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationStrategy: {
      shape: {
        type: "string"
      },
      locationName: "allocationStrategy"
    },
    InstanceInterruptionBehavior: {
      shape: {
        type: "string"
      },
      locationName: "instanceInterruptionBehavior"
    },
    InstancePoolsToUseCount: {
      shape: {
        type: "integer"
      },
      locationName: "instancePoolsToUseCount"
    },
    SingleInstanceType: {
      shape: {
        type: "boolean"
      },
      locationName: "singleInstanceType"
    },
    SingleAvailabilityZone: {
      shape: {
        type: "boolean"
      },
      locationName: "singleAvailabilityZone"
    },
    MinTargetCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "minTargetCapacity"
    },
    MaxTotalPrice: {
      shape: {
        type: "string"
      },
      locationName: "maxTotalPrice"
    }
  }
};
