import { DeleteEndpointInput } from "../shapes/DeleteEndpointInput";
import { DeleteEndpointOutput } from "../shapes/DeleteEndpointOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEndpoint",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/endpoints/{endpoint-id}"
  },
  input: {
    shape: DeleteEndpointInput
  },
  output: {
    shape: DeleteEndpointOutput
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
