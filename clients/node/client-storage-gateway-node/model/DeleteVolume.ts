import { DeleteVolumeInput } from "./DeleteVolumeInput";
import { DeleteVolumeOutput } from "./DeleteVolumeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVolumeInput
  },
  output: {
    shape: DeleteVolumeOutput
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
