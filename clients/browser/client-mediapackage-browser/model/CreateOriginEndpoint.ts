import { CreateOriginEndpointInput } from "./CreateOriginEndpointInput";
import { CreateOriginEndpointOutput } from "./CreateOriginEndpointOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
