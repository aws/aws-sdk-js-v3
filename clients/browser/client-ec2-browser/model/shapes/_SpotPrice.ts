import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotPrice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    ProductDescription: {
      shape: {
        type: "string"
      },
      locationName: "productDescription"
    },
    SpotPrice: {
      shape: {
        type: "string"
      },
      locationName: "spotPrice"
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      },
      locationName: "timestamp"
    }
  }
};
