import { _PlacementResponse } from "./_PlacementResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetLaunchTemplateOverrides: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    MaxPrice: {
      shape: {
        type: "string"
      },
      locationName: "maxPrice"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    WeightedCapacity: {
      shape: {
        type: "float"
      },
      locationName: "weightedCapacity"
    },
    Priority: {
      shape: {
        type: "float"
      },
      locationName: "priority"
    },
    Placement: {
      shape: _PlacementResponse,
      locationName: "placement"
    }
  }
};
