import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLogsConfig: _Structure_ = {
  type: "structure",
  required: ["status"],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    groupName: {
      shape: {
        type: "string"
      }
    },
    streamName: {
      shape: {
        type: "string"
      }
    }
  }
};
