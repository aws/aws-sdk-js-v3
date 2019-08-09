import { ModifyClusterSnapshotScheduleInput } from "./ModifyClusterSnapshotScheduleInput";
import { ModifyClusterSnapshotScheduleOutput } from "./ModifyClusterSnapshotScheduleOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { SnapshotScheduleNotFoundFault } from "./SnapshotScheduleNotFoundFault";
import { InvalidClusterSnapshotScheduleStateFault } from "./InvalidClusterSnapshotScheduleStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
