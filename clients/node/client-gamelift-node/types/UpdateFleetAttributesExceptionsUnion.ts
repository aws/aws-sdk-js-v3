import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
export type UpdateFleetAttributesExceptionsUnion =
  | NotFoundException
  | ConflictException
  | InvalidFleetStatusException
  | LimitExceededException
  | InternalServiceException
  | InvalidRequestException
  | UnauthorizedException;
