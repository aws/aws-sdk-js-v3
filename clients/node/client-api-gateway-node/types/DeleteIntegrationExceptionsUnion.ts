import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
export type DeleteIntegrationExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | ConflictException;
