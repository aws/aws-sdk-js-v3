import { DeleteOriginEndpointInput } from "./DeleteOriginEndpointInput";
import { DeleteOriginEndpointOutput } from "./DeleteOriginEndpointOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
