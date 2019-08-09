import { ListVolumesInput } from "./ListVolumesInput";
import { ListVolumesOutput } from "./ListVolumesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVolumes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVolumes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListVolumesInput
  },
  output: {
    shape: ListVolumesOutput
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
