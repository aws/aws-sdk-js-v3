import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLogsDestination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    LogGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
