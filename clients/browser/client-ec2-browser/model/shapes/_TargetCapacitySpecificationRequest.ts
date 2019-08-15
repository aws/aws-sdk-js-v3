import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetCapacitySpecificationRequest: _Structure_ = {
  type: "structure",
  required: ["TotalTargetCapacity"],
  members: {
    TotalTargetCapacity: {
      shape: {
        type: "integer"
      }
    },
    OnDemandTargetCapacity: {
      shape: {
        type: "integer"
      }
    },
    SpotTargetCapacity: {
      shape: {
        type: "integer"
      }
    },
    DefaultTargetCapacityType: {
      shape: {
        type: "string"
      }
    }
  }
};
