import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
export type DeleteAliasExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | InvalidRequestException
  | InternalServiceException;
