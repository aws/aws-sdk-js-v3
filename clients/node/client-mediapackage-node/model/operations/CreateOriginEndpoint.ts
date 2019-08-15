import { CreateOriginEndpointInput } from "../shapes/CreateOriginEndpointInput";
import { CreateOriginEndpointOutput } from "../shapes/CreateOriginEndpointOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateOriginEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOriginEndpoint",
  http: {
    method: "POST",
    requestUri: "/origin_endpoints"
  },
  input: {
    shape: CreateOriginEndpointInput
  },
  output: {
    shape: CreateOriginEndpointOutput
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
