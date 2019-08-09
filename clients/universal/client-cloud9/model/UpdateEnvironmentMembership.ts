import { UpdateEnvironmentMembershipInput } from "./UpdateEnvironmentMembershipInput";
import { UpdateEnvironmentMembershipOutput } from "./UpdateEnvironmentMembershipOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateEnvironmentMembership: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEnvironmentMembership",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEnvironmentMembershipInput
  },
  output: {
    shape: UpdateEnvironmentMembershipOutput
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
