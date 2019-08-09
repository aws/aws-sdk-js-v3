import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTrailStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IsLogging: {
      shape: {
        type: "boolean"
      }
    },
    LatestDeliveryError: {
      shape: {
        type: "string"
      }
    },
    LatestNotificationError: {
      shape: {
        type: "string"
      }
    },
    LatestDeliveryTime: {
      shape: {
        type: "timestamp"
      }
    },
    LatestNotificationTime: {
      shape: {
        type: "timestamp"
      }
    },
    StartLoggingTime: {
      shape: {
        type: "timestamp"
      }
    },
    StopLoggingTime: {
      shape: {
        type: "timestamp"
      }
    },
    LatestCloudWatchLogsDeliveryError: {
      shape: {
        type: "string"
      }
    },
    LatestCloudWatchLogsDeliveryTime: {
      shape: {
        type: "timestamp"
      }
    },
    LatestDigestDeliveryTime: {
      shape: {
        type: "timestamp"
      }
    },
    LatestDigestDeliveryError: {
      shape: {
        type: "string"
      }
    },
    LatestDeliveryAttemptTime: {
      shape: {
        type: "string"
      }
    },
    LatestNotificationAttemptTime: {
      shape: {
        type: "string"
      }
    },
    LatestNotificationAttemptSucceeded: {
      shape: {
        type: "string"
      }
    },
    LatestDeliveryAttemptSucceeded: {
      shape: {
        type: "string"
      }
    },
    TimeLoggingStarted: {
      shape: {
        type: "string"
      }
    },
    TimeLoggingStopped: {
      shape: {
        type: "string"
      }
    }
  }
};
