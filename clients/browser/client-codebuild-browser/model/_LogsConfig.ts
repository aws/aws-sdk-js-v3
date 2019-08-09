import { _CloudWatchLogsConfig } from "./_CloudWatchLogsConfig";
import { _S3LogsConfig } from "./_S3LogsConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogsConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cloudWatchLogs: {
      shape: _CloudWatchLogsConfig
    },
    s3Logs: {
      shape: _S3LogsConfig
    }
  }
};
