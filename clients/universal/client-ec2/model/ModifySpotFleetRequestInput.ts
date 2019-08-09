import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifySpotFleetRequestInput: _Structure_ = {
  type: "structure",
  required: ["SpotFleetRequestId"],
  members: {
    ExcessCapacityTerminationPolicy: {
      shape: {
        type: "string"
      },
      locationName: "excessCapacityTerminationPolicy"
    },
    SpotFleetRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestId"
    },
    TargetCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "targetCapacity"
    },
    OnDemandTargetCapacity: {
      shape: {
        type: "integer"
      }
    }
  }
};
