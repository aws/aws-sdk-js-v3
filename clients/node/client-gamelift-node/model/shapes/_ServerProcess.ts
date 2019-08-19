import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerProcess: _Structure_ = {
  type: "structure",
  required: ["LaunchPath", "ConcurrentExecutions"],
  members: {
    LaunchPath: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Parameters: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConcurrentExecutions: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
