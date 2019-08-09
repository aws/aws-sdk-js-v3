import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsBasicPutSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionRetryInterval: {
      shape: {
        type: "integer"
      },
      locationName: "connectionRetryInterval"
    },
    FilecacheDuration: {
      shape: {
        type: "integer"
      },
      locationName: "filecacheDuration"
    },
    NumRetries: {
      shape: {
        type: "integer"
      },
      locationName: "numRetries"
    },
    RestartDelay: {
      shape: {
        type: "integer"
      },
      locationName: "restartDelay"
    }
  }
};
