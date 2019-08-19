import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLoggingOptionUpdate: _Structure_ = {
  type: "structure",
  required: ["CloudWatchLoggingOptionId"],
  members: {
    CloudWatchLoggingOptionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogStreamARNUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
