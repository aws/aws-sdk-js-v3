import { DescribeGameSessionDetailsInput } from "./DescribeGameSessionDetailsInput";
import { DescribeGameSessionDetailsOutput } from "./DescribeGameSessionDetailsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeGameSessionDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGameSessionDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGameSessionDetailsInput
  },
  output: {
    shape: DescribeGameSessionDetailsOutput
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
