import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLoggingOptionDescription: _Structure_ = {
  type: "structure",
  required: ["LogStreamARN", "RoleARN"],
  members: {
    CloudWatchLoggingOptionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
