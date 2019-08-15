import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReportTaskRunnerHeartbeatInput: _Structure_ = {
  type: "structure",
  required: ["taskrunnerId"],
  members: {
    taskrunnerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    workerGroup: {
      shape: {
        type: "string"
      }
    },
    hostname: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
