import { DetachVolumeInput } from "./DetachVolumeInput";
import { DetachVolumeOutput } from "./DetachVolumeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachVolumeInput
  },
  output: {
    shape: DetachVolumeOutput
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
