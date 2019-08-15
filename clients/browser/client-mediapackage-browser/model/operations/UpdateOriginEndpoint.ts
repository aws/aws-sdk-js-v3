import { UpdateOriginEndpointInput } from "../shapes/UpdateOriginEndpointInput";
import { UpdateOriginEndpointOutput } from "../shapes/UpdateOriginEndpointOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateOriginEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateOriginEndpoint",
  http: {
    method: "PUT",
    requestUri: "/origin_endpoints/{id}"
  },
  input: {
    shape: UpdateOriginEndpointInput
  },
  output: {
    shape: UpdateOriginEndpointOutput
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
