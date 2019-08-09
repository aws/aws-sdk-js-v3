import { ___listOfRollbackTrigger } from "./___listOfRollbackTrigger";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RollbackConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MonitoringTimeInMinutes: {
      shape: {
        type: "integer"
      },
      locationName: "monitoringTimeInMinutes"
    },
    RollbackTriggers: {
      shape: ___listOfRollbackTrigger,
      locationName: "rollbackTriggers"
    }
  }
};
