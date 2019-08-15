import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLoggingOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    LogGroupName: {
      shape: {
        type: "string"
      }
    },
    LogStreamName: {
      shape: {
        type: "string"
      }
    }
  }
};
