import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstancesConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    InstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "instanceCount"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    Scope: {
      shape: {
        type: "string"
      },
      locationName: "scope"
    }
  }
};
