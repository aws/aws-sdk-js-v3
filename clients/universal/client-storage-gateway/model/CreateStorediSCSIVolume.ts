import { CreateStorediSCSIVolumeInput } from "./CreateStorediSCSIVolumeInput";
import { CreateStorediSCSIVolumeOutput } from "./CreateStorediSCSIVolumeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
