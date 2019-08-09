import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateSpotMarketOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxPrice: {
      shape: {
        type: "string"
      },
      locationName: "maxPrice"
    },
    SpotInstanceType: {
      shape: {
        type: "string"
      },
      locationName: "spotInstanceType"
    },
    BlockDurationMinutes: {
      shape: {
        type: "integer"
      },
      locationName: "blockDurationMinutes"
    },
    ValidUntil: {
      shape: {
        type: "timestamp"
      },
      locationName: "validUntil"
    },
    InstanceInterruptionBehavior: {
      shape: {
        type: "string"
      },
      locationName: "instanceInterruptionBehavior"
    }
  }
};
