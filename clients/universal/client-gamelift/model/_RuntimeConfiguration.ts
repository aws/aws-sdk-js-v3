import { _ServerProcessList } from "./_ServerProcessList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RuntimeConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServerProcesses: {
      shape: _ServerProcessList
    },
    MaxConcurrentGameSessionActivations: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    GameSessionActivationTimeoutSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
