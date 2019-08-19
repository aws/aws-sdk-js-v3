import { _CloudWatchLogsLogStreams } from "./_CloudWatchLogsLogStreams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLogsConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    LogStreams: {
      shape: _CloudWatchLogsLogStreams
    }
  }
};
