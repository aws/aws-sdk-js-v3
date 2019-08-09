import { DeleteSnapshotScheduleInput } from "./DeleteSnapshotScheduleInput";
import { DeleteSnapshotScheduleOutput } from "./DeleteSnapshotScheduleOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
