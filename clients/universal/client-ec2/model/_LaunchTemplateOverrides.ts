import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateOverrides: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    SpotPrice: {
      shape: {
        type: "string"
      },
      locationName: "spotPrice"
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
    }
  }
};
