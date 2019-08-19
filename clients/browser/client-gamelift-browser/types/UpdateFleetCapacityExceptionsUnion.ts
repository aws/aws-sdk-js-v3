import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
export type UpdateFleetCapacityExceptionsUnion =
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | InvalidFleetStatusException
  | InternalServiceException
  | InvalidRequestException
  | UnauthorizedException;
