import { ListOriginEndpointsInput } from "./ListOriginEndpointsInput";
import { ListOriginEndpointsOutput } from "./ListOriginEndpointsOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
