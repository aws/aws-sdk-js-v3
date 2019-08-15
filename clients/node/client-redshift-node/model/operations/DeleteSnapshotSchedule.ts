import { DeleteSnapshotScheduleInput } from "../shapes/DeleteSnapshotScheduleInput";
import { DeleteSnapshotScheduleOutput } from "../shapes/DeleteSnapshotScheduleOutput";
import { InvalidClusterSnapshotScheduleStateFault } from "../shapes/InvalidClusterSnapshotScheduleStateFault";
import { SnapshotScheduleNotFoundFault } from "../shapes/SnapshotScheduleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSnapshotSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSnapshotSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSnapshotScheduleInput
  },
  output: {
    shape: DeleteSnapshotScheduleOutput
  },
  errors: [
    {
      shape: InvalidClusterSnapshotScheduleStateFault
    },
    {
      shape: SnapshotScheduleNotFoundFault
    }
  ]
};
