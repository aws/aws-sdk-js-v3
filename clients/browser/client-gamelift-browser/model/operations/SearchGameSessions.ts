import { SearchGameSessionsInput } from "../shapes/SearchGameSessionsInput";
import { SearchGameSessionsOutput } from "../shapes/SearchGameSessionsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TerminalRoutingStrategyException } from "../shapes/TerminalRoutingStrategyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchGameSessions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchGameSessions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchGameSessionsInput
  },
  output: {
    shape: SearchGameSessionsOutput
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
