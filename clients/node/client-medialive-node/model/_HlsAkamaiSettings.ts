import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsAkamaiSettings: _Structure_ = {
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
    HttpTransferMode: {
      shape: {
        type: "string"
      },
      locationName: "httpTransferMode"
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
    },
    Salt: {
      shape: {
        type: "string"
      },
      locationName: "salt"
    },
    Token: {
      shape: {
        type: "string"
      },
      locationName: "token"
    }
  }
};
