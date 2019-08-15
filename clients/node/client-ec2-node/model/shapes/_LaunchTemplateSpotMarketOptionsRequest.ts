import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateSpotMarketOptionsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxPrice: {
      shape: {
        type: "string"
      }
    },
    SpotInstanceType: {
      shape: {
        type: "string"
      }
    },
    BlockDurationMinutes: {
      shape: {
        type: "integer"
      }
    },
    ValidUntil: {
      shape: {
        type: "timestamp"
      }
    },
    InstanceInterruptionBehavior: {
      shape: {
        type: "string"
      }
    }
  }
};
