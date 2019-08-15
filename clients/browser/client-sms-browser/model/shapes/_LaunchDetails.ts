import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    latestLaunchTime: {
      shape: {
        type: "timestamp"
      }
    },
    stackName: {
      shape: {
        type: "string"
      }
    },
    stackId: {
      shape: {
        type: "string"
      }
    }
  }
};
