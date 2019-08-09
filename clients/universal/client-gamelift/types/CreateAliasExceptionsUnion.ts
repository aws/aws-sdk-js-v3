import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateAliasExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | ConflictException
  | InternalServiceException
  | LimitExceededException;
