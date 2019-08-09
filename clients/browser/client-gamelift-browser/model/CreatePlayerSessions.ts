import { CreatePlayerSessionsInput } from "./CreatePlayerSessionsInput";
import { CreatePlayerSessionsOutput } from "./CreatePlayerSessionsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidGameSessionStatusException } from "./InvalidGameSessionStatusException";
import { GameSessionFullException } from "./GameSessionFullException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePlayerSessions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePlayerSessions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePlayerSessionsInput
  },
  output: {
    shape: CreatePlayerSessionsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidGameSessionStatusException
    },
    {
      shape: GameSessionFullException
    },
    {
      shape: TerminalRoutingStrategyException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    }
  ]
};
