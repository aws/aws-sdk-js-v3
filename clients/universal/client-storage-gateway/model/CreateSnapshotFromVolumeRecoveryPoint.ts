import { CreateSnapshotFromVolumeRecoveryPointInput } from "./CreateSnapshotFromVolumeRecoveryPointInput";
import { CreateSnapshotFromVolumeRecoveryPointOutput } from "./CreateSnapshotFromVolumeRecoveryPointOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
