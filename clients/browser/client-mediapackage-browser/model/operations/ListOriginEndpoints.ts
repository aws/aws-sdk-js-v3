import { ListOriginEndpointsInput } from "../shapes/ListOriginEndpointsInput";
import { ListOriginEndpointsOutput } from "../shapes/ListOriginEndpointsOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOriginEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOriginEndpoints",
  http: {
    method: "GET",
    requestUri: "/origin_endpoints"
  },
  input: {
    shape: ListOriginEndpointsInput
  },
  output: {
    shape: ListOriginEndpointsOutput
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
