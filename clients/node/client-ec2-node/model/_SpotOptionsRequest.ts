import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotOptionsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationStrategy: {
      shape: {
        type: "string"
      }
    },
    InstanceInterruptionBehavior: {
      shape: {
        type: "string"
      }
    },
    InstancePoolsToUseCount: {
      shape: {
        type: "integer"
      }
    },
    SingleInstanceType: {
      shape: {
        type: "boolean"
      }
    },
    SingleAvailabilityZone: {
      shape: {
        type: "boolean"
      }
    },
    MinTargetCapacity: {
      shape: {
        type: "integer"
      }
    },
    MaxTotalPrice: {
      shape: {
        type: "string"
      }
    }
  }
};
