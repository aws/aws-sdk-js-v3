import { ModifySnapshotScheduleInput } from "../shapes/ModifySnapshotScheduleInput";
import { ModifySnapshotScheduleOutput } from "../shapes/ModifySnapshotScheduleOutput";
import { InvalidScheduleFault } from "../shapes/InvalidScheduleFault";
import { SnapshotScheduleNotFoundFault } from "../shapes/SnapshotScheduleNotFoundFault";
import { SnapshotScheduleUpdateInProgressFault } from "../shapes/SnapshotScheduleUpdateInProgressFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
