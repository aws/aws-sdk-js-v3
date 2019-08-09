import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RtmpGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuthenticationScheme: {
      shape: {
        type: "string"
      },
      locationName: "authenticationScheme"
    },
    CacheFullBehavior: {
      shape: {
        type: "string"
      },
      locationName: "cacheFullBehavior"
    },
    CacheLength: {
      shape: {
        type: "integer",
        min: 30
      },
      locationName: "cacheLength"
    },
    CaptionData: {
      shape: {
        type: "string"
      },
      locationName: "captionData"
    },
    InputLossAction: {
      shape: {
        type: "string"
      },
      locationName: "inputLossAction"
    },
    RestartDelay: {
      shape: {
        type: "integer"
      },
      locationName: "restartDelay"
    }
  }
};
