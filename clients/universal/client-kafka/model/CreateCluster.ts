import { CreateClusterInput } from "./CreateClusterInput";
import { CreateClusterOutput } from "./CreateClusterOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ForbiddenException } from "./ForbiddenException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
