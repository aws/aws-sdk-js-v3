import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
export type CreateScriptExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | ConflictException
  | InternalServiceException;
