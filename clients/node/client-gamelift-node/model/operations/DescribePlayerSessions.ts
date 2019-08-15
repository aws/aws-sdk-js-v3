import { DescribePlayerSessionsInput } from "../shapes/DescribePlayerSessionsInput";
import { DescribePlayerSessionsOutput } from "../shapes/DescribePlayerSessionsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePlayerSessions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePlayerSessions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePlayerSessionsInput
  },
  output: {
    shape: DescribePlayerSessionsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
