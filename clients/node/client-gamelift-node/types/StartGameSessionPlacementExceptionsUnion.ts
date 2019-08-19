import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
export type StartGameSessionPlacementExceptionsUnion =
  | InternalServiceException
  | InvalidRequestException
  | NotFoundException
  | UnauthorizedException;
