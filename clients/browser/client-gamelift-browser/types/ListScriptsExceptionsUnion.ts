import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
export type ListScriptsExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | InternalServiceException;
