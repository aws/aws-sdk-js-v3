import { CreateCachediSCSIVolumeInput } from "../shapes/CreateCachediSCSIVolumeInput";
import { CreateCachediSCSIVolumeOutput } from "../shapes/CreateCachediSCSIVolumeOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCachediSCSIVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCachediSCSIVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCachediSCSIVolumeInput
  },
  output: {
    shape: CreateCachediSCSIVolumeOutput
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
