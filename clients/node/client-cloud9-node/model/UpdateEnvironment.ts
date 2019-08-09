import { UpdateEnvironmentInput } from "./UpdateEnvironmentInput";
import { UpdateEnvironmentOutput } from "./UpdateEnvironmentOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEnvironment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEnvironmentInput
  },
  output: {
    shape: UpdateEnvironmentOutput
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
