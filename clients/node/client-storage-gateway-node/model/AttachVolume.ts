import { AttachVolumeInput } from "./AttachVolumeInput";
import { AttachVolumeOutput } from "./AttachVolumeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
