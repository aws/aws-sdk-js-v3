import { CreateSnapshotFromVolumeRecoveryPointInput } from "../shapes/CreateSnapshotFromVolumeRecoveryPointInput";
import { CreateSnapshotFromVolumeRecoveryPointOutput } from "../shapes/CreateSnapshotFromVolumeRecoveryPointOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableError } from "../shapes/ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSnapshotFromVolumeRecoveryPoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSnapshotFromVolumeRecoveryPoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSnapshotFromVolumeRecoveryPointInput
  },
  output: {
    shape: CreateSnapshotFromVolumeRecoveryPointOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableError
    }
  ]
};
