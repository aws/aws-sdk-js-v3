import { DescribePlayerSessionsInput } from "./DescribePlayerSessionsInput";
import { DescribePlayerSessionsOutput } from "./DescribePlayerSessionsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
