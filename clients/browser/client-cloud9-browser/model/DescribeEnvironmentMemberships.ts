import { DescribeEnvironmentMembershipsInput } from "./DescribeEnvironmentMembershipsInput";
import { DescribeEnvironmentMembershipsOutput } from "./DescribeEnvironmentMembershipsOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEnvironmentMemberships: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEnvironmentMemberships",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEnvironmentMembershipsInput
  },
  output: {
    shape: DescribeEnvironmentMembershipsOutput
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
