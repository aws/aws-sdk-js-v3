import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLoggingOption: _Structure_ = {
  type: "structure",
  required: ["LogStreamARN", "RoleARN"],
  members: {
    LogStreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
