import { DescribeGameSessionsInput } from "../shapes/DescribeGameSessionsInput";
import { DescribeGameSessionsOutput } from "../shapes/DescribeGameSessionsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TerminalRoutingStrategyException } from "../shapes/TerminalRoutingStrategyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGameSessions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGameSessions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGameSessionsInput
  },
  output: {
    shape: DescribeGameSessionsOutput
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
    },
    {
      shape: TerminalRoutingStrategyException
    }
  ]
};
