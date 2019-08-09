import { CreateEnvironmentEC2Input } from "./CreateEnvironmentEC2Input";
import { CreateEnvironmentEC2Output } from "./CreateEnvironmentEC2Output";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
