import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type DeleteScriptExceptionsUnion =
  | InvalidRequestException
  | UnauthorizedException
  | NotFoundException
  | InternalServiceException;
