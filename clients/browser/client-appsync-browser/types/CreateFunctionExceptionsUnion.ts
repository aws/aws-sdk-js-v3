import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type CreateFunctionExceptionsUnion =
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException;
