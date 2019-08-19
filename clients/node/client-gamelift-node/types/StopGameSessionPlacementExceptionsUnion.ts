import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
export type StopGameSessionPlacementExceptionsUnion =
  | InternalServiceException
  | InvalidRequestException
  | NotFoundException
  | UnauthorizedException;
