import { DescribeGameSessionDetailsInput } from "../shapes/DescribeGameSessionDetailsInput";
import { DescribeGameSessionDetailsOutput } from "../shapes/DescribeGameSessionDetailsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TerminalRoutingStrategyException } from "../shapes/TerminalRoutingStrategyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
