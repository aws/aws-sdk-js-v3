import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReportTaskRunnerHeartbeatOutput: _Structure_ = {
  type: "structure",
  required: ["terminate"],
  members: {
    terminate: {
      shape: {
        type: "boolean"
      }
    }
  }
};
