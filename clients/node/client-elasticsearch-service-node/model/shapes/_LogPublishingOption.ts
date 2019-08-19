import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogPublishingOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudWatchLogsLogGroupArn: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
