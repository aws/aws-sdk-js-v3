import { ModifySnapshotScheduleInput } from "./ModifySnapshotScheduleInput";
import { ModifySnapshotScheduleOutput } from "./ModifySnapshotScheduleOutput";
import { InvalidScheduleFault } from "./InvalidScheduleFault";
import { SnapshotScheduleNotFoundFault } from "./SnapshotScheduleNotFoundFault";
import { SnapshotScheduleUpdateInProgressFault } from "./SnapshotScheduleUpdateInProgressFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifySnapshotSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifySnapshotSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifySnapshotScheduleInput
  },
  output: {
    shape: ModifySnapshotScheduleOutput,
    resultWrapper: "ModifySnapshotScheduleResult"
  },
  errors: [
    {
      shape: InvalidScheduleFault
    },
    {
      shape: SnapshotScheduleNotFoundFault
    },
    {
      shape: SnapshotScheduleUpdateInProgressFault
    }
  ]
};
