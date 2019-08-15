import { CreatePlayerSessionInput } from "../shapes/CreatePlayerSessionInput";
import { CreatePlayerSessionOutput } from "../shapes/CreatePlayerSessionOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidGameSessionStatusException } from "../shapes/InvalidGameSessionStatusException";
import { GameSessionFullException } from "../shapes/GameSessionFullException";
import { TerminalRoutingStrategyException } from "../shapes/TerminalRoutingStrategyException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
