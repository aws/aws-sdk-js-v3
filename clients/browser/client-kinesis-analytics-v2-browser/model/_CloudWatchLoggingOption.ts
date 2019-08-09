import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLoggingOption: _Structure_ = {
  type: "structure",
  required: ["LogStreamARN"],
  members: {
    LogStreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
