import { GetEndpointInput } from "../shapes/GetEndpointInput";
import { GetEndpointOutput } from "../shapes/GetEndpointOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEndpoint",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/endpoints/{endpoint-id}"
  },
  input: {
    shape: GetEndpointInput
  },
  output: {
    shape: GetEndpointOutput
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
