import { UpdateOriginEndpointInput } from "./UpdateOriginEndpointInput";
import { UpdateOriginEndpointOutput } from "./UpdateOriginEndpointOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
