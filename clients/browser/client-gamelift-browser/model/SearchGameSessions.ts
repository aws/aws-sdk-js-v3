import { SearchGameSessionsInput } from "./SearchGameSessionsInput";
import { SearchGameSessionsOutput } from "./SearchGameSessionsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
