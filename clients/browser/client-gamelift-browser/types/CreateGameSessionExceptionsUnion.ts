import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { FleetCapacityExceededException } from "./FleetCapacityExceededException";
import { LimitExceededException } from "./LimitExceededException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
export type CreateGameSessionExceptionsUnion =
  | ConflictException
  | InternalServiceException
  | UnauthorizedException
  | InvalidFleetStatusException
  | TerminalRoutingStrategyException
  | InvalidRequestException
  | NotFoundException
  | FleetCapacityExceededException
  | LimitExceededException
  | IdempotentParameterMismatchException;
