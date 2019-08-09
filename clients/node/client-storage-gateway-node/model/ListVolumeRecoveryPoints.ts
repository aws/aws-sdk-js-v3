import { ListVolumeRecoveryPointsInput } from "./ListVolumeRecoveryPointsInput";
import { ListVolumeRecoveryPointsOutput } from "./ListVolumeRecoveryPointsOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVolumeRecoveryPoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVolumeRecoveryPoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListVolumeRecoveryPointsInput
  },
  output: {
    shape: ListVolumeRecoveryPointsOutput
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
