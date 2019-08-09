import { DescribeGameSessionsInput } from "./DescribeGameSessionsInput";
import { DescribeGameSessionsOutput } from "./DescribeGameSessionsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
