import { GetEndpointInput } from "./GetEndpointInput";
import { GetEndpointOutput } from "./GetEndpointOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
