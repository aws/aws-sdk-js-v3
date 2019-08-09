import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsInputSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bandwidth: {
      shape: {
        type: "integer"
      },
      locationName: "bandwidth"
    },
    BufferSegments: {
      shape: {
        type: "integer"
      },
      locationName: "bufferSegments"
    },
    Retries: {
      shape: {
        type: "integer"
      },
      locationName: "retries"
    },
    RetryInterval: {
      shape: {
        type: "integer"
      },
      locationName: "retryInterval"
    }
  }
};
