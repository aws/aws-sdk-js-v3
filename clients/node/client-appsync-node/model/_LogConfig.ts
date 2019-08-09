import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogConfig: _Structure_ = {
  type: "structure",
  required: ["fieldLogLevel", "cloudWatchLogsRoleArn"],
  members: {
    fieldLogLevel: {
      shape: {
        type: "string"
      }
    },
    cloudWatchLogsRoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
