import { UpdateSnapshotScheduleInput } from "../shapes/UpdateSnapshotScheduleInput";
import { UpdateSnapshotScheduleOutput } from "../shapes/UpdateSnapshotScheduleOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSnapshotSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSnapshotSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSnapshotScheduleInput
  },
  output: {
    shape: UpdateSnapshotScheduleOutput
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
