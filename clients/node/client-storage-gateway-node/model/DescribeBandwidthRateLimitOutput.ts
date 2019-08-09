import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBandwidthRateLimitOutput: _Structure_ = {
  type: "structure",
  required: [],
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
