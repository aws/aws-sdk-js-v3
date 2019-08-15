import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateQueryLoggingConfigInput: _Structure_ = {
  type: "structure",
  required: ["HostedZoneId", "CloudWatchLogsLogGroupArn"],
  members: {
    HostedZoneId: {
      shape: {
        type: "string"
      }
    },
    CloudWatchLogsLogGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
