import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
export type CreateFleetExceptionsUnion =
  | InternalServiceException
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | InvalidRequestException
  | UnauthorizedException;
