import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OnDemandOptionsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationStrategy: {
      shape: {
        type: "string"
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
