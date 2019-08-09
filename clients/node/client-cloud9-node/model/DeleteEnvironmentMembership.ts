import { DeleteEnvironmentMembershipInput } from "./DeleteEnvironmentMembershipInput";
import { DeleteEnvironmentMembershipOutput } from "./DeleteEnvironmentMembershipOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteEnvironmentMembership: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEnvironmentMembership",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEnvironmentMembershipInput
  },
  output: {
    shape: DeleteEnvironmentMembershipOutput
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
