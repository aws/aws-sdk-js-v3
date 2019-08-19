import { CreateClusterInput } from "../shapes/CreateClusterInput";
import { CreateClusterOutput } from "../shapes/CreateClusterOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCluster",
  http: {
    method: "POST",
    requestUri: "/v1/clusters"
  },
  input: {
    shape: CreateClusterInput
  },
  output: {
    shape: CreateClusterOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
