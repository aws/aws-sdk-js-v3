import { DeleteUserEndpointsInput } from "../shapes/DeleteUserEndpointsInput";
import { DeleteUserEndpointsOutput } from "../shapes/DeleteUserEndpointsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUserEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserEndpoints",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/users/{user-id}"
  },
  input: {
    shape: DeleteUserEndpointsInput
  },
  output: {
    shape: DeleteUserEndpointsOutput
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
