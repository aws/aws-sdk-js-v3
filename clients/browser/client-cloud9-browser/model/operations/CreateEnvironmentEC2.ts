import { CreateEnvironmentEC2Input } from "../shapes/CreateEnvironmentEC2Input";
import { CreateEnvironmentEC2Output } from "../shapes/CreateEnvironmentEC2Output";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateEnvironmentEC2: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEnvironmentEC2",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEnvironmentEC2Input
  },
  output: {
    shape: CreateEnvironmentEC2Output
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
