import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceCapacity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailableCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "availableCapacity"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    TotalCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "totalCapacity"
    }
  }
};
