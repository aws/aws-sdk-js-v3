import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchOutputConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudWatchLogGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CloudWatchOutputEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
