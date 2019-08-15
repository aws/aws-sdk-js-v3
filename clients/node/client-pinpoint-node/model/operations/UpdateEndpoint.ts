import { UpdateEndpointInput } from "../shapes/UpdateEndpointInput";
import { UpdateEndpointOutput } from "../shapes/UpdateEndpointOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEndpoint",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/endpoints/{endpoint-id}"
  },
  input: {
    shape: UpdateEndpointInput
  },
  output: {
    shape: UpdateEndpointOutput
  },
  errors: [
    {
      shape: BadRequestException
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
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
