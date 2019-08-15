import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBandwidthRateLimitInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    AverageUploadRateLimitInBitsPerSec: {
      shape: {
        type: "integer",
        min: 51200
      }
    },
    AverageDownloadRateLimitInBitsPerSec: {
      shape: {
        type: "integer",
        min: 102400
      }
    }
  }
};
