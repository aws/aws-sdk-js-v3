import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
export type DescribeGameSessionDetailsExceptionsUnion =
  | InternalServiceException
  | NotFoundException
  | InvalidRequestException
  | UnauthorizedException
  | TerminalRoutingStrategyException;
