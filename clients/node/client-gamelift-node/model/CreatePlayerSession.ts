import { CreatePlayerSessionInput } from "./CreatePlayerSessionInput";
import { CreatePlayerSessionOutput } from "./CreatePlayerSessionOutput";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidGameSessionStatusException } from "./InvalidGameSessionStatusException";
import { GameSessionFullException } from "./GameSessionFullException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePlayerSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePlayerSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePlayerSessionInput
  },
  output: {
    shape: CreatePlayerSessionOutput
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
