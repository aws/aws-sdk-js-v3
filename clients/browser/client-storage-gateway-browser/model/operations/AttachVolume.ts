import { AttachVolumeInput } from "../shapes/AttachVolumeInput";
import { AttachVolumeOutput } from "../shapes/AttachVolumeOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachVolumeInput
  },
  output: {
    shape: AttachVolumeOutput
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
