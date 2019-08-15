import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstancesDistribution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OnDemandAllocationStrategy: {
      shape: {
        type: "string"
      }
    },
    OnDemandBaseCapacity: {
      shape: {
        type: "integer"
      }
    },
    OnDemandPercentageAboveBaseCapacity: {
      shape: {
        type: "integer"
      }
    },
    SpotAllocationStrategy: {
      shape: {
        type: "string"
      }
    },
    SpotInstancePools: {
      shape: {
        type: "integer"
      }
    },
    SpotMaxPrice: {
      shape: {
        type: "string"
      }
    }
  }
};
