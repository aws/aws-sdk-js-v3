import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidGameSessionStatusException } from "./InvalidGameSessionStatusException";
import { GameSessionFullException } from "./GameSessionFullException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
export type CreatePlayerSessionExceptionsUnion =
  | InternalServiceException
  | UnauthorizedException
  | InvalidGameSessionStatusException
  | GameSessionFullException
  | TerminalRoutingStrategyException
  | InvalidRequestException
  | NotFoundException;
