import { DeleteOriginEndpointInput } from "../shapes/DeleteOriginEndpointInput";
import { DeleteOriginEndpointOutput } from "../shapes/DeleteOriginEndpointOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteOriginEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteOriginEndpoint",
  http: {
    method: "DELETE",
    requestUri: "/origin_endpoints/{id}"
  },
  input: {
    shape: DeleteOriginEndpointInput
  },
  output: {
    shape: DeleteOriginEndpointOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
