import { ModifyClusterSnapshotScheduleInput } from "../shapes/ModifyClusterSnapshotScheduleInput";
import { ModifyClusterSnapshotScheduleOutput } from "../shapes/ModifyClusterSnapshotScheduleOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { SnapshotScheduleNotFoundFault } from "../shapes/SnapshotScheduleNotFoundFault";
import { InvalidClusterSnapshotScheduleStateFault } from "../shapes/InvalidClusterSnapshotScheduleStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyClusterSnapshotSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClusterSnapshotSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterSnapshotScheduleInput
  },
  output: {
    shape: ModifyClusterSnapshotScheduleOutput
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: SnapshotScheduleNotFoundFault
    },
    {
      shape: InvalidClusterSnapshotScheduleStateFault
    }
  ]
};
