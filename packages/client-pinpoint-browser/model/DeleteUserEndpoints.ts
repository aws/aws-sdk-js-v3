import { DeleteUserEndpointsInput } from "./DeleteUserEndpointsInput";
import { DeleteUserEndpointsOutput } from "./DeleteUserEndpointsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
