import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
export type DeleteMethodExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | ConflictException;
