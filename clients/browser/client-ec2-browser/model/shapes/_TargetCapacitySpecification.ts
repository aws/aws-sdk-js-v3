import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetCapacitySpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalTargetCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "totalTargetCapacity"
    },
    OnDemandTargetCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "onDemandTargetCapacity"
    },
    SpotTargetCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "spotTargetCapacity"
    },
    DefaultTargetCapacityType: {
      shape: {
        type: "string"
      },
      locationName: "defaultTargetCapacityType"
    }
  }
};
