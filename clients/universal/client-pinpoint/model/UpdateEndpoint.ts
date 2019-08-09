import { UpdateEndpointInput } from "./UpdateEndpointInput";
import { UpdateEndpointOutput } from "./UpdateEndpointOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
