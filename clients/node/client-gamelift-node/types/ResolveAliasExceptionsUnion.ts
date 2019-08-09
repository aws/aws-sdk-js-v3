import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { InternalServiceException } from "./InternalServiceException";
export type ResolveAliasExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | NotFoundException
  | TerminalRoutingStrategyException
  | InternalServiceException;
