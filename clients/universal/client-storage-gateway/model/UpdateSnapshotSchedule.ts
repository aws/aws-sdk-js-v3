import { UpdateSnapshotScheduleInput } from "./UpdateSnapshotScheduleInput";
import { UpdateSnapshotScheduleOutput } from "./UpdateSnapshotScheduleOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
