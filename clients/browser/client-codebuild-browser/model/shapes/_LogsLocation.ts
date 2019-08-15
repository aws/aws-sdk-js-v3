import { _CloudWatchLogsConfig } from "./_CloudWatchLogsConfig";
import { _S3LogsConfig } from "./_S3LogsConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogsLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    groupName: {
      shape: {
        type: "string"
      }
    },
    streamName: {
      shape: {
        type: "string"
      }
    },
    deepLink: {
      shape: {
        type: "string"
      }
    },
    s3DeepLink: {
      shape: {
        type: "string"
      }
    },
    cloudWatchLogs: {
      shape: _CloudWatchLogsConfig
    },
    s3Logs: {
      shape: _S3LogsConfig
    }
  }
};
