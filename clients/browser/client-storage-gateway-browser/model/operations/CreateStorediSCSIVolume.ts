import { CreateStorediSCSIVolumeInput } from "../shapes/CreateStorediSCSIVolumeInput";
import { CreateStorediSCSIVolumeOutput } from "../shapes/CreateStorediSCSIVolumeOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStorediSCSIVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStorediSCSIVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStorediSCSIVolumeInput
  },
  output: {
    shape: CreateStorediSCSIVolumeOutput
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
