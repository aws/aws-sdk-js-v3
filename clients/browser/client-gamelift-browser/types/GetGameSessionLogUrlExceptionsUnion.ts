import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
export type GetGameSessionLogUrlExceptionsUnion =
  | InternalServiceException
  | NotFoundException
  | UnauthorizedException
  | InvalidRequestException;
