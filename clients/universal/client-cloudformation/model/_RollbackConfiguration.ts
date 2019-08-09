import { _RollbackTriggers } from "./_RollbackTriggers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RollbackConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RollbackTriggers: {
      shape: _RollbackTriggers
    },
    MonitoringTimeInMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
