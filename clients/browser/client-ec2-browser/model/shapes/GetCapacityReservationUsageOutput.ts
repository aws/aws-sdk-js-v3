import { _InstanceUsageSet } from "./_InstanceUsageSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCapacityReservationUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    CapacityReservationId: {
      shape: {
        type: "string"
      },
      locationName: "capacityReservationId"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
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
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    InstanceUsages: {
      shape: _InstanceUsageSet,
      locationName: "instanceUsageSet"
    }
  }
};
