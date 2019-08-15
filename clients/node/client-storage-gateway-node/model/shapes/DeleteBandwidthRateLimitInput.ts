import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBandwidthRateLimitInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "BandwidthType"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    BandwidthType: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
